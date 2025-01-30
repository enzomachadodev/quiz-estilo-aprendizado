import { Question, ResultData, ResultKey } from "./types";

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

export const quizResults: Record<ResultKey, ResultData> = {
  EC: {
    image: "/explorador.jpeg",
    title: "EXPLORADOR",
    description: [
      "Exploradores aprendem melhor através da experiência prática e da ação direta. Eles gostam de se envolver em atividades que lhes permitem experimentar, explorar e descobrir por si mesmos.",
      "A mentoria pode ajudar você a aplicar suas ideias e alcançar seus objetivos mais rapidamente.",
    ],
  },
  CA: {
    image: "/observador.jpeg",
    title: "OBSERVADOR",
    description: [
      "Observadores preferem aprender observando os outros e refletindo sobre as experiências. Eles são pensadores cuidadosos que analisam as situações antes de agir.",
      "A mentoria personalizada pode proporcionar insights valiosos ao observar como outros profissionais atuam.",
    ],
  },
  OR: {
    image: "/pensador.jpeg",
    title: "PENSADOR",
    description: [
      "Pensadores aprendem melhor através de teorias, modelos abstratos e conceitos. Eles apreciam a lógica e a racionalidade.",
      "A mentoria pode ajudar você a aplicar suas ideias e alcançar seus objetivos mais rapidamente.",
    ],
  },
  EA: {
    image: "/executor.jpeg",
    title: "EXECUTOR",
    description: [
      "Executores aprendem melhor aplicando teorias e conceitos em situações práticas. Eles gostam de ver resultados concretos de suas ações através de resultados tangíveis.",
      "A mentoria pode te ajudar a organizar seus próximos passos e alcançar seus objetivos com eficiência.",
    ],
  },
};
