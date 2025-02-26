"use client";

import Image from "next/image";
import ReactMarkdown, { Components } from "react-markdown";
import { motion } from "framer-motion";
import { PlanKey, ResultData } from "@/lib/types";
import { planMark, plans } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";
import { LeadSchema } from "@/lib/validation";

interface QuizResultProps {
  leadData: LeadSchema;
  quizResult: ResultData;
  handleReset: () => void;
}

const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 className="mb-4 text-2xl font-semibold">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 text-xl font-medium">{children}</h3>
  ),
  p: ({ children }) => <p className="mb-3 text-lg font-normal">{children}</p>,
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
};

const positionToPlanMap = new Map<string, PlanKey>([
  ["Assistente", "silver"],
  ["Analista", "gold"],
  ["Coordenador", "gold"],
  ["Gerente", "black"],
  ["Diretor", "prime"],
  ["Empreendedor", "prime"],
]);

export const QuizResult = ({ leadData, quizResult }: QuizResultProps) => {
  const planKey = positionToPlanMap.get(leadData.position) || "black";
  const leadPlan = plans[planKey];
  const planMarkdown = planMark(leadPlan);

  return (
    <motion.div
      key={quizResult.title}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="wrapper flex flex-col py-10 text-background"
    >
      <h2 className="text-center text-3xl font-semibold sm:text-5xl sm:leading-[60px]">
        O seu perfil de aprendizagem é:{" "}
        <span className="leading-[40px] text-secondary sm:leading-[60px]">
          {quizResult.title}
        </span>
      </h2>
      <div className="relative mx-auto my-8 aspect-square max-h-[500px] w-full max-w-[500px] overflow-hidden rounded-3xl">
        <Image
          src={quizResult.image}
          alt={`Resultado ${quizResult.title}`}
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <ReactMarkdown components={markdownComponents}>
        {quizResult.description(leadData.name)}
      </ReactMarkdown>
      <ReactMarkdown components={markdownComponents}>
        {planMarkdown.description}
      </ReactMarkdown>
      <Button
        asChild
        variant="secondary"
        size="lg"
        className="mx-auto my-8 h-auto text-wrap rounded-xl py-4 text-center text-xl text-black sm:w-fit"
      >
        <Link href={leadPlan.link} target="_blank" rel="noopener noreferrer">
          Quero levar meu aprendizado para o próximo nível!
        </Link>
      </Button>
      <ReactMarkdown components={markdownComponents}>
        {planMarkdown.offer}
      </ReactMarkdown>
    </motion.div>
  );
};
