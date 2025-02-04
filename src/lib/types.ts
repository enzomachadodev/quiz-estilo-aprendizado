import { StaticImageData } from "next/image";

export enum Result {
  EC = "EXPLORADOR",
  CA = "OBSERVADOR",
  OR = "PENSADOR",
  EA = "EXECUTOR",
}

export type ResultKey = keyof typeof Result;

export type ResultData = {
  image: StaticImageData;
  title: string;
  description: string[];
};

export type Answer = {
  label: string;
  value: ResultKey;
};

export type Question = {
  question: string;
  answers: Answer[];
};

export enum Position {
  Assistente = "Assistente",
  Analista = "Analista",
  Coordenador = "Coordenador",
  Gerente = "Gerente",
  Diretor = "Diretor",
  Empreendedor = "Empreendedor"
}

export enum Experience {
  Menos6Meses = "Menos de 6 meses",
  SeisMesesUmAno = "6 meses a 1 ano",
  UmTresAnos = "1 a 3 anos",
  MaisTresAnos = "Mais de 3 anos",
}
