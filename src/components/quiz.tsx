"use client";

import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import { Progress } from "./ui/progress";
import { ChevronLeft } from "lucide-react";
import { ResultData, ResultKey } from "@/lib/types";
import { quizQuestions } from "@/lib/data";
import { Answers } from "./anwsers";
import { LeadForm } from "./lead-form";
import { LeadSchema } from "@/lib/validation";
import { QuizResult } from "./quiz-result";
import { QuizIntro } from "./quiz-intro";
import { Button } from "./ui/button";
import { calculateResult } from "@/lib/actions";
import { toast } from "sonner";

const initalScore: Record<ResultKey, number> = {
  EC: 0,
  CA: 0,
  OR: 0,
  EA: 0,
};

export const Quiz = () => {
  const [isPending, startTransition] = useTransition();
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [score, setScore] = useState<Record<ResultKey, number>>(initalScore);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [quizResult, setQuizResult] = useState<ResultData>();

  const handleAnswer = (value: ResultKey) => {
    setScore((prevScore) => ({
      ...prevScore,
      [value]: prevScore[value] + 1,
    }));

    setCurrentQuestion(currentQuestion + 1);
  };

  const onSubmit = async (values: LeadSchema) => {
    startTransition(async () => {
      await calculateResult({ ...values, ...score }).then((res) => {
        if (!res.success) {
          console.error("Erro na API: ", res.error);
          toast.error(res.error || "Erro desconhecido.");
          return;
        }

        if (res.success && res.data) {
          setQuizResult(res.data);
        }
      });
    });
  };

  const resetQuiz = () => {
    setScore(initalScore);
    setCurrentQuestion(0);
    setQuizResult(undefined);
    setHasStarted(false);
  };

  const handleBack = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  if (!hasStarted) return <QuizIntro handleStart={() => setHasStarted(true)} />;

  if (quizResult)
    return (
      <motion.div
        key={quizResult.title}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <QuizResult result={quizResult} handleReset={resetQuiz} />;
      </motion.div>
    );

  return (
    <div className="flex w-full flex-col gap-10">
      <Progress
        value={(currentQuestion / quizQuestions.length) * 100}
        className="w-full rounded-none bg-secondary/20"
      />
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-y-10 px-6">
        {currentQuestion < quizQuestions.length ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Answers
              currentQuestion={quizQuestions[currentQuestion]}
              onClick={handleAnswer}
            />
          </motion.div>
        ) : (
          <motion.div
            key="lead-form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <LeadForm onSubmit={onSubmit} loading={isPending} />
          </motion.div>
        )}

        <Button
          onClick={handleBack}
          variant="ghost"
          size="sm"
          className="mx-auto flex w-fit items-center gap-0.5 text-sm font-medium text-background hover:bg-background/10 hover:text-background"
          disabled={currentQuestion <= 0 || isPending}
        >
          <ChevronLeft />
          Voltar
        </Button>
      </div>
    </div>
  );
};
