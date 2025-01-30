import { ResultData } from "@/lib/types";
import Image from "next/image";
import { Button } from "./ui/button";

interface QuizResultProps {
  result: ResultData;
  handleReset: () => void;
}

export const QuizResult = ({ result, handleReset }: QuizResultProps) => {
  return (
    <div className="wrapper flex flex-col gap-8 py-10 text-background">
      <h2 className="text-center text-3xl font-semibold sm:text-5xl sm:leading-[60px]">
        O seu perfil de aprendizagem é:{" "}
        <span className="leading-[40px] text-secondary sm:leading-[60px]">
          {result.title}
        </span>
      </h2>
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-8 lg:flex-row-reverse">
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
          <Image
            src={result.image}
            alt={`Resultado ${result.title}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-4 text-lg">
          {result.description.map((text, index) => (
            <p key={index} className="">
              {text}
            </p>
          ))}
          <p className="font-medium">A jornada não para por aqui!</p>
          <p className="font-medium">
            Além de revelar seu estilo de aprendizagem, estamos enviando um
            e-mail com uma análise personalizada. Esse e-mail inclui insights
            sobre o seu resultado e uma sugestão de plano de mentoria, para
            ajudá-lo a potencializar seu desenvolvimento 🚀
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
    </div>
  );
};
