import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface QuizIntroProps {
  handleStart: () => void;
}
export const QuizIntro = ({ handleStart }: QuizIntroProps) => {
  return (
    <div className="wrapper flex flex-col gap-8 py-8 text-background">
      <h1 className="text-center text-3xl font-bold sm:text-5xl sm:leading-[60px]">
        Descubra qual é o seu estilo de aprendizagem!
      </h1>
      <Card className="mx-auto flex w-full max-w-xl flex-col gap-4 p-6 text-center">
        <h2 className="text-center text-2xl font-semibold">
          Bem-vindo ao teste 🧠
        </h2>
        <p>
          O conceito de estilos de aprendizagem foi desenvolvido por David Kolb,
          que destacou que cada pessoa tem uma forma preferida de aprender, seja
          pela prática, reflexão, observação ou organização. Identificar o seu
          estilo ajuda a compreender como você processa e aplica o conhecimento,
          potencializando seu aprendizado e desenvolvimento pessoal.
        </p>
        <p>
          Responda o quiz e descubra como usar essa informação para alcançar
          seus objetivos de maneira mais eficiente!
        </p>
        <p className="text-lg font-medium">Vamos lá?!</p>
        <Button className="" onClick={handleStart}>
          Começar
        </Button>
      </Card>
    </div>
  );
};
