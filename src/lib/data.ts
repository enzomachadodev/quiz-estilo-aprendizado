import { PlanData, PlanKey, Question, ResultData, ResultKey } from "./types";
import exploradorImage from "../../public/explorador.jpeg";
import executorImage from "../../public/executor.jpeg";
import pensadorImage from "../../public/pensador.jpeg";
import observadorImage from "../../public/observador.jpeg";

export const quizQuestions: Question[] = [
  {
    question:
      "Quando você enfrenta um problema no trabalho, qual a sua primeira reação?",
    answers: [
      {
        label:
          "Eu tento experimentar uma solução prática para ver o que funciona.",
        value: "EC",
      },
      {
        label:
          "Eu começo a refletir sobre o problema, procurando entender as causas e teorias relacionadas",
        value: "CA",
      },
      {
        label:
          "Prefiro observar como os outros lidam com situações semelhantes antes de agir.",
        value: "OR",
      },
      {
        label:
          "Gosto de analisar todos os dados e organizar as informações para encontrar uma solução lógica.",
        value: "EA",
      },
    ],
  },
  {
    question:
      "Quando você aprende algo novo, como prefere receber informações?",
    answers: [
      {
        label:
          "Eu gosto de observar como os outros fazem primeiro para então tentar por conta própria",
        value: "OR",
      },
      {
        label:
          "Prefiro ouvir uma explicação detalhada sobre o conceito antes de tentar.",
        value: "CA",
      },
      {
        label:
          "Prefiro ter as informações bem organizadas e estruturadas antes de fazer qualquer coisa.",
        value: "EA",
      },
      {
        label: "Gosto de colocar a teoria em prática e aprender enquanto faço.",
        value: "EC",
      },
    ],
  },
  {
    question:
      "Quando você está diante de uma decisão importante no trabalho, como costuma tomar a decisão?",
    answers: [
      {
        label: "Testo diferentes abordagens e vejo qual dá certo",
        value: "EC",
      },
      {
        label:
          "Penso bem antes, buscando entender todas as implicações teóricas.",
        value: "CA",
      },
      {
        label:
          "Observo como outras pessoas lidaram com decisões semelhantes e sigo seus exemplos.",
        value: "OR",
      },
      {
        label:
          "Analiso as informações disponíveis de maneira lógica e estruturada para tomar a melhor decisão.",
        value: "EA",
      },
    ],
  },
  {
    question: "Quando você enfrenta um novo projeto ou desafio, como se sente?",
    answers: [
      {
        label:
          "Um pouco cauteloso; preciso entender todas as possibilidades antes de me envolver.",
        value: "CA",
      },
      {
        label:
          "Animado para colocar minhas ideias em prática e ver o que acontece",
        value: "EC",
      },
      {
        label:
          "Gosto de ter uma visão clara do que fazer, com todas as etapas bem planejadas.",
        value: "EA",
      },
      {
        label:
          "Prefiro ver como outras pessoas estão lidando com isso antes de começar.",
        value: "OR",
      },
    ],
  },
  {
    question: "Qual dessas situações mais reflete o seu estilo de trabalho?",
    answers: [
      {
        label:
          "Eu gosto de aprender observando os outros antes de tomar uma decisão.",
        value: "OR",
      },
      {
        label:
          "Eu sou movido pela ação e gosto de experimentar coisas novas sem esperar por um plano perfeito.",
        value: "EC",
      },
      {
        label:
          "Eu prefiro ter tudo bem organizado e estruturado antes de começar a trabalhar.",
        value: "EA",
      },
      {
        label:
          "Eu prefiro analisar a situação e entender todas as variáveis antes de agir.",
        value: "CA",
      },
    ],
  },
  {
    question:
      "Como você se sente ao enfrentar uma situação desconhecida no seu trabalho?",
    answers: [
      {
        label:
          "Um pouco hesitante; quero analisar todos os aspectos antes de agir.",
        value: "CA",
      },
      {
        label:
          "Gosto de observar outras pessoas primeiro, para ver como lidam com a situação.",
        value: "OR",
      },
      {
        label: "Empolgado! Vejo como uma oportunidade para aprender fazendo.",
        value: "EC",
      },
      {
        label:
          "Eu prefiro planejar e estruturar tudo antes de tomar qualquer atitude.",
        value: "EA",
      },
    ],
  },
  {
    question:
      "Em relação ao seu desenvolvimento profissional, qual é o seu maior desafio?",
    answers: [
      {
        label: "Relacionar novas ideias e teorias ao meu trabalho atual.",
        value: "CA",
      },
      {
        label:
          "Observar e entender como as pessoas mais experientes fazem as coisas.",
        value: "OR",
      },
      {
        label:
          "Organizar as informações para resolver problemas de forma eficiente.",
        value: "EA",
      },
      {
        label: "Colocar o que aprendi em prática de forma eficaz.",
        value: "EC",
      },
    ],
  },
];

export const planMark = ({ title, price, description }: PlanData) => ({
  description: `
## **🔥 Criamos algo novo para você crescer ainda mais!**

Nós, da eMentor, percebemos uma necessidade comum entre profissionais como você: **ter um acompanhamento contínuo, com especialistas experientes, para refinar sua visão e transformar conhecimento em crescimento acelerado.**

Durante os últimos anos, impactamos **mais de 30 mil mentorados e ajudamos mais de 1.000 empresas** a desenvolverem seus colaboradores – incluindo grandes nomes como **Vivo, Nestlé, iFood, BMG e Unico**. Nosso compromisso com o aprendizado de alto nível reflete no nosso **NPS de 96** e em uma **média de evolução de 9,5 (de 0 a 10), segundo nossos mentorados.**

Agora, queremos que você também faça parte desse grupo de profissionais que estão desbloqueando seu máximo potencial!

Foi por isso que lançamos os **Planos de Assinatura eMentor**, permitindo que você tenha acesso a **mentores estratégicos** por um valor acessível e de forma contínua – com toda a estrutura necessária para manter seu desenvolvimento sempre em evolução.

**Plano Ideal para Você:**

**${title} (${price})** – ${description}.

## **💡 O que você ganha ao se tornar assinante?**

✅ **Aprendizado contínuo:** 2 sessões de mentoria por mês, durante 3 meses, com especialistas experientes em sua área.

✅ **Plano individualizado:** Nossa equipe ajudará a montar um plano personalizado para você, com base nos seus desafios, indicando os melhores mentores que já enfrentaram e superaram situações semelhantes.

✅ **Evolução com economia:** No plano trimestral, você terá **acesso a mais sessões com um desconto que corresponde a 40%** em relação ao valor das sessões avulsas.

✅ **Rede de mentores qualificados:** Escolha entre diversos mentores que ocupam cargos iguais ou superiores ao seu, e que já vivenciaram desafios parecidos com os que você enfrenta agora.

## **Você está pronto para levar sua jornada ao próximo nível? 🚀**

No final do dia, o que distingue os grandes profissionais dos demais **não é o quanto eles sabem, mas como eles utilizam esse conhecimento**.

**Agora você tem uma escolha:** continuar aprendendo da mesma forma ou **ter um plano estruturado**, com mentores que vão acelerar seus resultados e te ajudar a crescer de forma contínua.

Vamos conversar sobre como encaixar isso na sua carreira? Nosso time pode te ajudar a entender como o **${title}** pode se conectar aos seus desafios profissionais – e, se achar que outra opção faz mais sentido para você, também podemos te ajudar a escolher o melhor plano para o seu perfil.
`,
  offer: `
Estamos animados para ter você conosco nessa jornada!

**Até breve,**

**Vinicius Silvestrini**

Founder da eMentor
`,
});

export const plans: Record<PlanKey, PlanData> = {
  silver: {
    title: "Plano Silver Trimestral",
    price: "R$ 147/mês",
    description:
      "Ideal para quem está no início da sua jornada profissional e busca um primeiro contato com a mentoria, antecipando problemas e sugerindo melhorias.",
    link: "https://buy.stripe.com/3csbMK4bo9rkc2QdRg",
  },

  gold: {
    title: "Plano Gold Trimestral",
    price: "R$ 297/mês",
    description:
      "Ideal para quem está em uma posição de responsabilidade, transformando dados em estratégias e buscando soluções inovadoras para desafios estratégicos.",
    link: "https://buy.stripe.com/9AQ8Ay37k4704AobJ9",
  },
  black: {
    title: "Plano Black Trimestral",
    price: "R$ 597/mês",
    description:
      "Ideal para quem está liderando equipes e projetos complexos, transformando dados em estratégias e buscando soluções inovadoras para desafios estratégicos.",
    link: "https://buy.stripe.com/7sI6sqazMgTM6Iw4gI",
  },
  prime: {
    title: "Plano Prime Trimestral",
    price: "R$ 1.397/mês",
    description:
      "Ideal para quem está em uma posição de liderança, transformando dados em estratégias e buscando soluções inovadoras para desafios estratégicos.",
    link: "https://buy.stripe.com/aEU3ge23g1YS4AocNf",
  },
};

export const quizResults: Record<ResultKey, ResultData> = {
  CA: {
    image: observadorImage,
    title: "EXPLORADOR",
    description: (name: string) => `
**Olá, ${name},**    
    
Parabéns por completar nosso quiz! Ficamos felizes em compartilhar que seu estilo de aprendizado é o **OBSERVADOR**.

Pessoas com o perfil Observador têm uma capacidade única de entender contextos complexos e enxergar nuances que passam despercebidas por muitos. São atentas, reflexivas e analíticas, sempre buscando entender o cenário por completo antes de agir. Essa habilidade é um grande diferencial em qualquer área da vida – desde decisões profissionais estratégicas até a forma como lidam com desafios diários.

## **🌟 Você está entre mentes brilhantes!**

**Mahatma Gandhi** – Líder cuja reflexão profunda sobre a sociedade e as mudanças necessárias o levou a guiar um movimento transformador de paz e independência.

**Bill Gates** – Fundador da Microsoft, conhecido pela sua análise meticulosa do mercado e das tecnologias emergentes, sempre um passo à frente em suas decisões estratégicas.

Assim como eles, seu potencial está na sua habilidade de avaliar cenários e tomar decisões bem fundamentadas. Mas será que **você está aproveitando ao máximo essa característica no seu crescimento profissional?**

## **📌 Como potencializar seu estilo Observador?**

**Equilibre análise e ação**

Refletir antes de agir é uma de suas maiores forças. Mas algumas oportunidades exigem decisões rápidas. Praticar o equilíbrio entre análise e execução pode ser o diferencial para alcançar resultados ainda mais expressivos.

**Busque diferentes perspectivas**

Sua visão profunda pode ser ampliada quando você se expõe a novos pontos de vista. Conversar com especialistas, entrar em discussões estratégicas e explorar diferentes maneiras de enxergar um mesmo problema pode levar você a descobertas incríveis.

**Aprendizado contínuo: a chave para decisões ainda mais estratégicas**

A melhor forma de consolidar sua evolução como Observador é aprimorar sua capacidade de análise com orientação especializada. **É aqui que entra a mentoria.**
    `,
  },
  EC: {
    image: exploradorImage,
    title: "EXPLORADOR",
    description: (name: string) => `
**Olá, ${name},**

Parabéns por completar nosso quiz! Ficamos felizes em compartilhar que seu estilo de aprendizado é o **EXPLORADOR**.

Pessoas com o perfil Explorador são conhecidas por sua curiosidade insaciável e desejo de desbravar o desconhecido. Elas são inovadoras, aventureiras e sempre em busca de novas oportunidades. Essa habilidade é essencial para profissionais que estão começando suas carreiras e querem explorar todas as possibilidades.

## **🌟 Você está entre mentes brilhantes!**

**Elon Musk** – O visionário por trás da Tesla e SpaceX, conhecido por sua capacidade de explorar novas fronteiras e transformar indústrias inteiras.

**Jeff Bezos** – Fundador da Amazon, que revolucionou o comércio eletrônico e continua a explorar novas possibilidades com sua empresa de exploração espacial, Blue Origin.

Assim como eles, seu potencial está na sua capacidade de explorar e inovar. Mas será que **você está aproveitando ao máximo essa característica no seu crescimento profissional?**

## **📌 Como potencializar seu estilo Explorador?**

**Abrace a experimentação**

Sua disposição para experimentar e explorar é uma força. Não tenha medo de testar novas ideias e abordagens, mesmo que isso signifique correr riscos calculados.

**Cultive a resiliência**

Explorar o desconhecido pode ser desafiador. Desenvolva a resiliência para lidar com contratempos e aprender com os fracassos, transformando-os em oportunidades de crescimento.

**Mentoria como catalisador de resultados**

Ter um mentor experiente pode ajudar a refinar suas habilidades de exploração e inovação. Alguém que já enfrentou desafios semelhantes pode oferecer insights valiosos e ajudar a acelerar seu crescimento profissional.
    `,
  },
  OR: {
    image: pensadorImage,
    title: "PENSADOR",
    description: (name: string) => `
**Olá, ${name},**

Parabéns por completar nosso quiz! Ficamos felizes em compartilhar que seu estilo de aprendizado é o **PENSADOR**.

Pessoas com o perfil Pensador não se contentam com respostas fáceis. Elas buscam entender os problemas a fundo, criando modelos e teorias para analisá-los sob novas perspectivas. Essa habilidade é essencial para líderes que tomam decisões inovadoras e moldam o futuro de suas áreas.

## **🌟 Você está entre mentes brilhantes!**

**Albert Einstein** – A mente revolucionária por trás da teoria da relatividade, sempre questionando e desafiando os limites do conhecimento.

**Stephen Hawking** – O físico teórico que desafiou as fronteiras do tempo e do espaço, com uma mente extraordinariamente analítica e criativa.

Assim como eles, seu potencial está na sua capacidade de criar soluções inovadoras e bem fundamentadas. Mas será que **você está aproveitando ao máximo essa característica no seu crescimento profissional?**

## **📌 Como potencializar seu estilo Pensador?**

**Equilibre análise e ação**

Seu processo mental profundo é uma vantagem, mas se perder em detalhes pode travar sua evolução. Estabeleça prazos para cada fase da análise e avance para a execução com mais rapidez e confiança.

**Seja flexível nas soluções**

Não há uma resposta única para cada desafio. Teste diferentes abordagens, adapte-se às novas informações e ajuste suas soluções conforme necessário. Sua flexibilidade será sua maior aliada na hora de acertar a fórmula perfeita.

**Mentoria como catalisador de resultados**

O pensamento estratégico precisa de uma base prática. Encontre mentores que possam ajudar a transformar suas ideias em ações eficazes. Ter alguém com mais experiência para desafiar suas perspectivas e sugerir melhorias vai acelerar sua jornada para o sucesso.
    `,
  },
  EA: {
    image: executorImage,
    title: "EXECUTOR",
    description: (name: string) => `
**Olá, ${name},**

Parabéns por completar nosso quiz! Ficamos felizes em compartilhar que seu estilo de aprendizado é o **EXECUTOR**.

Pessoas com o perfil Executor são conhecidas por sua capacidade de transformar ideias em ação. Elas são práticas, focadas e determinadas, sempre buscando resultados concretos. Essa habilidade é essencial para líderes que precisam entregar resultados de forma eficiente e eficaz.

## **🌟 Você está entre mentes brilhantes!**

**Walt Disney** – O visionário que transformou sonhos em realidade, criando um império de entretenimento com foco na execução impecável de suas ideias.

**Steve Jobs** – O visionário por trás da Apple, que transformou ideias inovadoras em produtos revolucionários com um foco implacável na execução.

Assim como eles, seu potencial está na sua capacidade de transformar planos em realidade. Mas será que **você está aproveitando ao máximo essa característica no seu crescimento profissional?**

## **📌 Como potencializar seu estilo Executor?**

**Planeje e priorize**

Sua habilidade de execução é uma força, mas sem um bom planejamento, você pode se perder em tarefas sem importância. Aprenda a priorizar suas atividades e definir metas claras para maximizar sua eficiência.

**Desenvolva habilidades de liderança**

Como Executor, você é naturalmente bom em fazer as coisas acontecerem. No entanto, para liderar equipes de forma eficaz, é importante desenvolver habilidades de comunicação e motivação, inspirando sua equipe a alcançar os objetivos juntos.

**Mentoria como catalisador de resultados**

Ter um mentor experiente pode ajudar a refinar suas habilidades de execução e liderança. Alguém que já enfrentou desafios semelhantes pode oferecer insights valiosos e ajudar a acelerar seu crescimento profissional.
`,
  },
};
