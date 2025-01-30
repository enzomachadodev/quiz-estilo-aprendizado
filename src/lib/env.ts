import { z } from "zod";

const envSchema = z.object({
  GOOGLE_SHEET_ID: z.string().min(1, "GOOGLE_SHEET_ID não definido."),
  GOOGLE_SERVICE_ACCOUNT_EMAIL: z
    .string()
    .email("GOOGLE_SERVICE_ACCOUNT_EMAIL inválido."),
  GOOGLE_PRIVATE_KEY: z
    .string()
    .min(1, "GOOGLE_PRIVATE_KEY não definido.")
    .transform((key) => key.replace(/\\n/g, "\n")),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("⚠️ Erro nas variáveis de ambiente:", parsedEnv.error.format());
  throw new Error(
    "Configuração inválida das variáveis de ambiente. Verifique seu .env.local.",
  );
}

export const env = parsedEnv.data;
