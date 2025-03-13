"use client";

import { useEffect, useReducer, useTransition } from "react";
import { Progress } from "./ui/progress";
import { ChevronLeft } from "lucide-react";
import { ResultData, ResultKey } from "@/lib/types";
import { quizQuestions, quizResults } from "@/lib/data";
import { Answers } from "./anwsers";
import { LeadForm } from "./lead-form";
import { LeadSchema } from "@/lib/validation";
import { QuizResult } from "./quiz-result";
import { QuizIntro } from "./quiz-intro";
import { Button } from "./ui/button";
import { saveLeadResult } from "@/lib/actions";
import { toast } from "sonner";
import { sendGAEvent } from "@/lib/analytics";

const initialState = {
  hasStarted: false,
  leadData: null as LeadSchema | null,
  score: {
    EC: 0,
    CA: 0,
    OR: 0,
    EA: 0,
  } as Record<ResultKey, number>,
  currentQuestion: 0,
  quizResult: null as ResultData | null,
};

type State = typeof initialState;

type Action =
  | { type: "START_QUIZ" }
  | { type: "SET_LEAD_DATA"; payload: LeadSchema }
  | { type: "ANSWER_QUESTION"; payload: Record<ResultKey, number> }
  | { type: "GO_BACK" }
  | { type: "SET_RESULT"; payload: ResultData }
  | { type: "RESET" };

const quizReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START_QUIZ":
      return { ...state, hasStarted: true };
    case "SET_LEAD_DATA":
      return { ...state, leadData: action.payload };
    case "ANSWER_QUESTION":
      return {
        ...state,
        score: action.payload,
        currentQuestion: state.currentQuestion + 1,
      };
    case "GO_BACK":
      if (state.currentQuestion === 0) {
        return { ...state, leadData: null };
      }
      return {
        ...state,
        currentQuestion: Math.max(state.currentQuestion - 1, 0),
      };
    case "SET_RESULT":
      return { ...state, quizResult: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const Quiz = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!state.hasStarted) {
      sendGAEvent("view", "homePage");
    } else if (state.hasStarted && !state.leadData && state.quizResult) {
      sendGAEvent("view", "formPage");
    } else if (state.hasStarted && state.leadData && state.quizResult) {
      sendGAEvent("view", "resultPage");
    } else if (state.hasStarted && state.currentQuestion === 0) {
      sendGAEvent("view", "quizPage");
    }
  }, [
    state.hasStarted,
    state.leadData,
    state.quizResult,
    state.currentQuestion,
  ]);

  const handleStartQuiz = () => {
    sendGAEvent("interaction", "startQuizClicked");
    dispatch({ type: "START_QUIZ" });
  };

  const handleAnswer = async (value: ResultKey) => {
    const { question, answers } = quizQuestions[state.currentQuestion];
    const answer = answers.find((a) => a.value == value)?.label || "";
    sendGAEvent("interaction", "questionAnswered", {
      question,
      answer,
      answerValue: value,
      percentComplete: Math.round(
        (state.currentQuestion / quizQuestions.length) * 100,
      ),
    });

    const updatedScore = {
      ...state.score,
      [value]: state.score[value] + 1,
    };

    dispatch({ type: "ANSWER_QUESTION", payload: updatedScore });

    if (state.currentQuestion === quizQuestions.length - 1) {
      const resultKey = Object.entries(updatedScore).reduce((a, b) =>
        b[1] > a[1] ? b : a,
      )[0] as ResultKey;

      const resultData = quizResults[resultKey];

      sendGAEvent("achievement", "quizCompleted", {
        resultName: resultData.name,
      });

      dispatch({ type: "SET_RESULT", payload: resultData });
    }
  };

  const handleBack = () => {
    // Rastreamento de clique no botão voltar
    sendGAEvent("interaction", "backButtonClicked", {
      fromQuestion: state.currentQuestion,
    });

    dispatch({ type: "GO_BACK" });
  };

  const handleSubmitLeadForm = async (values: LeadSchema) => {
    // Rastreamento de tentativa de envio do formulário
    sendGAEvent("interaction", "leadFormSubmitted");

    startTransition(async () => {
      if (state.quizResult) {
        const res = await saveLeadResult({
          ...values,
          result: state.quizResult.name,
          ...state.score,
        });
        if (!res.success) {
          console.error("Erro na API: ", res.error);
          toast.error(res.error || "Erro desconhecido.");

          // Rastrear erro no envio
          sendGAEvent("error", "leadFormError", {
            errorMessage: res.error || "Erro desconhecido",
          });
          return;
        }

        // Rastrear sucesso no envio do formulário
        sendGAEvent("conversion", "leadCaptured", {
          leadEmail: values.email,
        });

        dispatch({ type: "SET_LEAD_DATA", payload: values });
      } else {
        console.error("Ocorreu um erro inesperado!");

        // Rastreamento de erro inesperado
        sendGAEvent("error", "unexpectedError", {
          state: JSON.stringify({
            hasStarted: state.hasStarted,
            hasResult: !!state.quizResult,
            currentQuestion: state.currentQuestion,
          }),
        });
      }
    });
  };

  const resetQuiz = () => {
    // Rastreamento de reinício do quiz
    sendGAEvent("interaction", "quizReset");

    dispatch({ type: "RESET" });
  };

  if (!state.hasStarted) {
    return <QuizIntro handleStart={handleStartQuiz} />;
  }

  if (state.hasStarted && !state.leadData && state.quizResult) {
    return <LeadForm onSubmit={handleSubmitLeadForm} loading={isPending} />;
  }

  if (state.hasStarted && state.leadData && state.quizResult) {
    return (
      <QuizResult
        leadData={state.leadData}
        quizResult={state.quizResult}
        handleReset={resetQuiz}
      />
    );
  }

  if (state.currentQuestion <= quizQuestions.length) {
    return (
      <div className="flex w-full flex-col gap-10">
        <Progress
          value={(state.currentQuestion / quizQuestions.length) * 100}
          className="w-full rounded-none bg-secondary/20"
        />
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-y-10 px-6">
          <Answers
            currentQuestion={quizQuestions[state.currentQuestion]}
            onClick={handleAnswer}
          />
          <Button
            onClick={handleBack}
            variant="ghost"
            size="sm"
            className="mx-auto flex w-fit items-center gap-0.5 text-sm font-medium text-background hover:bg-background/10 hover:text-background"
            disabled={isPending}
          >
            <ChevronLeft />
            Voltar
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full py-20 text-center text-background">
      Calculando resultado...
    </div>
  );
};
