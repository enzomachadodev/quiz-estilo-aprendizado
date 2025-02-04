"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

import {
  leadSchema,
  LeadSchema,
  updateLeadResultSchema,
  UpdateLeadResultSchema,
} from "./validation";
import { env } from "./env";
import console from "console";

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

export const saveLead = async (input: LeadSchema) => {
  const validatedFields = leadSchema.safeParse(input);

  if (!validatedFields.success) {
    return { success: false, error: "Dados inválidos" };
  }

  const { name, email, position, experience } = validatedFields.data;

  const formattedDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  try {
    const sheet = await getSheet();
    const rows = await sheet.getRows();

    const leadRow = rows.find((row) => row.get("Email") === email);

    if (leadRow) {
      leadRow.set("Data", formattedDate);
      leadRow.set("Nome", name);
      leadRow.set("Email", email);
      leadRow.set("Posição", position);
      leadRow.set("Experiência", experience);
    } else {
      await sheet.addRow({
        Data: formattedDate,
        Nome: name,
        Email: email,
        Posição: position,
        Experiência: experience,
        EC: 0,
        CA: 0,
        OR: 0,
        EA: 0,
        "Resultado Final": "",
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Erro ao salvar dados do usuário:", error);
    return { success: false, error: "Erro ao salvar os dados." };
  }
};

export const updateLeadResult = async (input: UpdateLeadResultSchema) => {
  const validatedFields = updateLeadResultSchema.safeParse(input);

  if (!validatedFields.success) {
    return { success: false, error: "Dados inválidos" };
  }

  const { email, result, ...score } = validatedFields.data;

  try {
    const sheet = await getSheet();
    const rows = await sheet.getRows();

    const leadRow = rows.find((row) => row.get("Email") === email);

    if (!leadRow) {
      return { success: false, error: "Usuário não encontrado na planilha." };
    }
    
    const name = leadRow.get("Nome") || "Nome não encontrado";
    const position = leadRow.get("Posição") || "Posição não encontrada";
    const experience = leadRow.get("Experiência") || "Experiência não encontrada";
    
    console.log("Dados recuperados:", { name, position, experience });

    leadRow.set("EC", score.EC);
    leadRow.set("CA", score.CA);
    leadRow.set("OR", score.OR);
    leadRow.set("EA", score.EA);
    leadRow.set("Resultado Final", result);

    await leadRow.save();
    
    const payload = {
      nome: name,
      email: email,
      cargo: position,
      experiencia: experience,
      resultado: result,
      pontuação: score,
      timestamp: new Date().toISOString(),
    };
    
    console.log("Enviando dados para o webhook do n8n...", payload);

    const response = await fetch("https://n8n.ementor.com.br/webhook/0ca6a4b1-8580-43a5-99f2-7fc98b9407f4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();
    console.log("Resposta do webhook:", responseData);

    return { success: true };
  } catch (error) {
    console.error("Erro ao atualizar o resultado do usuário:", error);
    return { success: false, error: "Erro ao atualizar os dados." };
  }
};
