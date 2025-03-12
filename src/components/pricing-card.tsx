import { PlanData } from "@/lib/types";
import { FaCheck } from "react-icons/fa6";
import { ActionButton } from "./action-button";

interface PricingCardProps {
  plan: PlanData;
  onClick?: () => void;
}
export const PricingCard = ({ plan, onClick }: PricingCardProps) => {
  return (
    <div className="relative mt-14 flex w-full max-w-xl flex-col rounded-3xl border-[3px] border-primary p-6 pt-28 shadow-xl">
      <div className="absolute left-1/2 top-0 flex w-full max-w-[80%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-8 rounded-3xl bg-primary p-6 shadow-lg">
        <p className="text-center text-3xl font-semibold text-white">
          {plan.title}
        </p>
        <div className="flex items-end justify-center">
          <p className="text-4xl font-bold text-background">{plan.price}</p>
          <span className="text-muted">/mês</span>
        </div>
      </div>
      <ul className="flex flex-col gap-4">
        <li className="flex items-start gap-4">
          <FaCheck size={24} className="text-green-500" />
          <p className="w-full">
            <strong>Aprendizado contínuo:</strong> 2 sessões de mentoria por
            mês, durante 3 meses, com especialistas experientes em sua área.
          </p>
        </li>
        <li className="flex items-start gap-4">
          <FaCheck size={24} className="text-green-500" />
          <p className="w-full">
            <strong>Plano individualizado:</strong> Nossa equipe ajudará a
            montar um plano personalizado para você, com base nos seus desafios,
            indicando os melhores mentores que já enfrentaram e superaram
            situações semelhantes.
          </p>
        </li>
        <li className="flex w-full items-start gap-4">
          <FaCheck size={24} className="text-green-500" />
          <p className="w-full">
            <strong>Evolução com economia:</strong> No plano trimestral, você
            terá acesso a mais sessões com um desconto que corresponde a 40% em
            relação ao valor das sessões avulsas.
          </p>
        </li>
        <li className="flex items-start gap-4">
          <FaCheck size={24} className="text-green-500" />
          <p className="w-full">
            <strong>Rede de mentores qualificados:</strong> Escolha entre
            diversos mentores que ocupam cargos iguais ou superiores ao seu, e
            que já vivenciaram desafios parecidos com os que você enfrenta
            agora.
          </p>
        </li>
      </ul>
      <ActionButton link={plan.link} onClick={onClick} />
    </div>
  );
};
