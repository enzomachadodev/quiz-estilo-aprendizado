"use client";

import Image from "next/image";
import { PlanKey, ResultData } from "@/lib/types";
import { plans } from "@/lib/data";
import { LeadSchema } from "@/lib/validation";
import { PricingCard } from "./pricing-card";
import { RecomendationCard } from "./recomendation-card";
import { PersonalityCard } from "./personality-card";
import { ActionButton } from "./action-button";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

interface QuizResultProps {
  leadData: LeadSchema;
  quizResult: ResultData;
  handleReset: () => void;
}

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

  return (
    <div className="min-h-screen w-full text-lg">
      <section className="w-full py-14 text-background">
        <div className="wrapper flex flex-col items-center gap-8 lg:flex-row-reverse">
          <div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl border-[3px] border-secondary shadow-lg">
            <Image
              alt={`Resultado ${quizResult.name}`}
              src={quizResult.image}
              fill
            />
          </div>
          <div className="flex w-full flex-col gap-4 text-start">
            <h1 className="mb-6 text-4xl font-bold">
              O Seu Perfil de Aprendizagem é:{" "}
              <span className="text-4xl uppercase leading-[60px] text-secondary md:text-5xl">
                {quizResult.name}
              </span>
            </h1>
            <p className="lg:text-xl">
              Parabéns por completar nosso quiz! Ficamos felizes em compartilhar
              que seu estilo de aprendizado é o{" "}
              <strong>{quizResult.name}</strong>.
            </p>
            <p className="lg:text-xl">{quizResult.description}</p>
          </div>
        </div>
      </section>
      <section className="w-full bg-background py-14">
        <div className="wrapper flex flex-col gap-14">
          <div className="flex flex-col items-center gap-4">
            <h2 className="section-title text-primary">
              Você Está Entre Mentes Brilhantes!
            </h2>
            <p className="max-w-5xl text-center text-lg">
              Assim como eles, seu potencial está na sua habilidade de avaliar
              cenários e tomar decisões bem fundamentadas. Mas será que{" "}
              <strong>
                você está aproveitando ao máximo essa característica no seu
                crescimento profissional?
              </strong>
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
            {quizResult.personality.map((p, index) => (
              <PersonalityCard key={index} personality={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-background py-14">
        <div className="wrapper flex flex-col gap-14">
          <h2 className="section-title text-primary">
            Como Potencializar Seu Estilo {quizResult.name}
          </h2>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {quizResult.recomendations.map((r, index) => (
              <RecomendationCard key={index} recomendation={r} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-14 text-background">
        <div className="wrapper flex flex-col gap-14">
          <h2 className="section-title">
            Criamos Algo Novo para Você Crescer Ainda Mais!
          </h2>
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row-reverse lg:gap-14">
            <div className="relative aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl border-[3px] border-secondary shadow-lg">
              <Image
                src="/crescimento.jpg"
                alt="Crescimento Profisional"
                fill
                className="object-cover object-left"
              />
            </div>
            <div className="flex w-full flex-col gap-4 text-lg">
              <p>
                Nós, da eMentor, percebemos uma necessidade comum entre
                profissionais como você:{" "}
                <strong>
                  ter um acompanhamento contínuo, com especialistas experientes,
                  para refinar sua visão e transformar conhecimento em
                  crescimento acelerado.
                </strong>
              </p>
              <p>
                Durante os últimos anos, impactamos{" "}
                <strong>
                  mais de 30 mil mentorados e ajudamos mais de 1.000 empresas
                </strong>{" "}
                a desenvolverem seus colaboradores – incluindo grandes nomes
                como <strong>Vivo, Nestlé, iFood, BMG e Unico</strong>. Nosso
                compromisso com o aprendizado de alto nível reflete no nosso{" "}
                <strong>NPS de 96</strong> e em uma{" "}
                <strong>
                  média de evolução de 9,5 (de 0 a 10), segundo nossos
                  mentorados.
                </strong>
              </p>
              <p>
                Agora, queremos que você também faça parte desse grupo de
                profissionais que estão desbloqueando seu máximo potencial!
              </p>
              <p>
                Foi por isso que lançamos os{" "}
                <strong>Planos de Assinatura eMentor</strong>, permitindo que
                você tenha acesso a <strong>mentores estratégicos</strong> por
                um valor acessível e de forma contínua – com toda a estrutura
                necessária para manter seu desenvolvimento sempre em evolução.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-background py-14">
        <div className="wrapper flex flex-col items-center gap-14">
          <h2 className="section-title text-primary">
            O Plano Ideal para Você!
          </h2>
          <PricingCard plan={leadPlan} />
        </div>
      </section>
      <section className="w-full py-14">
        <div className="wrapper flex flex-col items-center gap-14">
          <div className="flex w-full flex-col gap-4 rounded-3xl bg-background p-6 text-center md:p-10">
            <h2 className="section-title text-primary">
              Você está pronto para levar sua jornada ao próximo nível? 🚀
            </h2>
            <p>
              No final do dia, o que distingue os grandes profissionais dos
              demais{" "}
              <strong>
                não é o quanto eles sabem, mas como eles utilizam esse
                conhecimento.
              </strong>
            </p>
            <p>
              <strong>Agora você tem uma escolha:</strong> continuar aprendendo
              da mesma forma ou <strong>ter um plano estruturado</strong>, com
              mentores que vão acelerar seus resultados e te ajudar a crescer de
              forma contínua.
            </p>
            <p>
              Vamos conversar sobre como encaixar isso na sua carreira? Nosso
              time pode te ajudar a entender como o{" "}
              <strong>{leadPlan.title}</strong> pode se conectar aos seus
              desafios profissionais – e, se achar que outra opção faz mais
              sentido para você, também podemos te ajudar a escolher o melhor
              plano para o seu perfil.
            </p>
            <ActionButton
              link={leadPlan.link}
              className="mx-auto mt-4 w-full md:w-fit md:px-12"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-8 py-14">
          <p className="text-xl text-background">
            Dúvidas? Entre em contato conosco.
          </p>
          <Button
            size="lg"
            className="h-14 gap-3 rounded-xl bg-green-500 text-xl hover:bg-green-500/80"
            asChild
          >
            <Link
              href="https://api.whatsapp.com/send/?phone=5527992499687&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={23} /> Falar com o Suporte
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
