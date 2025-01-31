import { z } from "zod";
import { Experience, Position } from "./types";

export const leadSchema = z.object({
  name: z
    .string({ required_error: "O nome é obrigatório" })
    .min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z
    .string({ required_error: "O e-mail é obrigatório" })
    .email("Insira um e-mail válido."),
  position: z.nativeEnum(Position, {
    required_error: "Por favor, selecione uma opção",
  }),
  experience: z.nativeEnum(Experience, {
    required_error: "Por favor, selecione uma opção",
  }),
});

export type LeadSchema = z.infer<typeof leadSchema>;

export const updateLeadResultSchema = z.object({
  email: z
    .string({ required_error: "O e-mail é obrigatório" })
    .email("Insira um e-mail válido."),
  EC: z.number(),
  EA: z.number(),
  OR: z.number(),
  CA: z.number(),
  result: z.string(),
});

export type UpdateLeadResultSchema = z.infer<typeof updateLeadResultSchema>;
