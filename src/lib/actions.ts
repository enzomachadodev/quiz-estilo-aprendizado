"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

import { calculateResultSchema, CalculateResultSchema } from "./validation";
import { quizResults } from "./data";
import { ResultKey } from "./types";
import { env } from "./env";

const getSheet = async () => {
  const serviceAccountAuth = new JWT({
    email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: env.GOOGLE_PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(env.GOOGLE_SHEET_ID, serviceAccountAuth);
  await doc.loadInfo();
  return doc.sheetsByIndex[0];
};

export const calculateResult = async (input: CalculateResultSchema) => {
  const validatedFields = calculateResultSchema.safeParse(input);

  if (!validatedFields.success) {
    return { success: false, error: "Dados inválidos" };
  }

  const { name, email, position, experience, ...score } = validatedFields.data;

  try {
    const sheet = await getSheet();

    const resultKey = Object.entries(score).reduce((a, b) =>
      b[1] > a[1] ? b : a,
    )[0] as ResultKey;

    const finalResult = quizResults[resultKey];

    const formattedDate = new Date().toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    await sheet.addRow({
      Data: formattedDate,
      Nome: name,
      Email: email,
      Posição: position,
      Experiência: experience,
      EC: score.EC,
      CA: score.CA,
      OR: score.OR,
      EA: score.EA,
      "Resultado Final": finalResult.title,
    });

    return { success: true, data: finalResult };
  } catch (error) {
    console.error("Erro ao salvar no Google Sheets:", error);
    return { success: false, error: "Erro ao salvar os dados." };
  }
};
