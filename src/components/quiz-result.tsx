import Image from "next/image";
import { motion } from "framer-motion";
import { ResultData } from "@/lib/types";
import { Button } from "./ui/button";

interface QuizResultProps {
  result: ResultData;
  handleReset: () => void;
}

export const QuizResult = ({ result, handleReset }: QuizResultProps) => {
  return (
    <motion.div
      key={result.title}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="wrapper flex flex-col gap-8 py-10 text-background"
    >
      <h2 className="text-center text-3xl font-semibold sm:text-5xl sm:leading-[60px]">
        O seu perfil de aprendizagem é:{" "}
        <span className="leading-[40px] text-secondary sm:leading-[60px]">
          {result.title}
        </span>
      </h2>
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-8 lg:flex-row-reverse">
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={result.image}
            alt={`Resultado ${result.title}`}
            fill
            className="object-cover"
            placeholder="blur"
          />
        </div>
        <div className="flex w-full flex-col gap-4 text-lg">
          {result.description.map((text, index) => (
            <p key={index} className="">
              {text}
            </p>
          ))}
          <p className="text-xl font-semibold">Isso é só o começo!</p>
          <p className="">
            Confira nosso e-mail com uma análise completa sobre o seu perfil de
            aprendizagem. Se prepare — insights valiosos estão a caminho🚀
          </p>
          <p className="text-base text-muted">
            *Se não chegar na sua caixa de entrada confira na caixa de SPAM.
          </p>
          <Button
            className="mt-4 lg:w-fit"
            size="lg"
            variant="secondary"
            onClick={handleReset}
          >
            Reiniciar teste
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
