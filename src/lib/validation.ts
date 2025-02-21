import { z } from "zod";
import { Experience, Position } from "./types";

export const leadSchema = z.object({
  name: z
    .string({ required_error: "O nome é obrigatório" })
    .min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z
    .string({ required_error: "O e-mail é obrigatório" })
    .email("Insira um e-mail válido."),
  phone: z
    .string({ required_error: "O telefone é obrigatório" })
    .trim()
    .regex(/^\+?[0-9\s()-]+$/, "Insira um telefone válido")
    .min(10, "O telefone deve ter pelo menos 10 dígitos")
    .max(15, "O telefone deve ter no máximo 15 dígitos"),
  position: z.nativeEnum(Position, {
    required_error: "Por favor, selecione uma opção",
  }),
  experience: z.nativeEnum(Experience, {
    required_error: "Por favor, selecione uma opção",
  }),
});

export type LeadSchema = z.infer<typeof leadSchema>;

export const leadResultSchema = z.object({
  name: z
    .string({ required_error: "O nome é obrigatório" })
    .min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z
    .string({ required_error: "O e-mail é obrigatório" })
    .email("Insira um e-mail válido."),
  phone: z
    .string({ required_error: "O telefone é obrigatório" })
    .trim()
    .regex(/^\+?[0-9\s()-]+$/, "Insira um telefone válido")
    .min(10, "O telefone deve ter pelo menos 10 dígitos")
    .max(15, "O telefone deve ter no máximo 15 dígitos"),
  position: z.nativeEnum(Position, {
    required_error: "Por favor, selecione uma opção",
  }),
  experience: z.nativeEnum(Experience, {
    required_error: "Por favor, selecione uma opção",
  }),
  EC: z.number(),
  EA: z.number(),
  OR: z.number(),
  CA: z.number(),
  result: z.string(),
});

export type LeadResultSchema = z.infer<typeof leadResultSchema>;

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
