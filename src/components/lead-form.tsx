"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { leadSchema, LeadSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Experience, Position } from "@/lib/types";
import { Card } from "./ui/card";

interface LeadFormProps {
  onSubmit: (values: LeadSchema) => void;
  loading?: boolean;
}

export const LeadForm = ({ onSubmit, loading = false }: LeadFormProps) => {
  const form = useForm<LeadSchema>({
    resolver: zodResolver(leadSchema),
    disabled: loading,
    defaultValues: {
      name: "",
      email: "",
      position: undefined,
      experience: undefined,
    },
  });

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-center text-2xl font-semibold text-background sm:text-4xl">
        Antes revelar seu resultado, precisamos fazer algumas perguntas rápidas.
      </h2>
      <Card className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qual é o seu nome?</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Seu Nome"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Qual é o seu cargo atual ou área de atuação?
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={loading}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um cargo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Cargos</SelectLabel>
                          {Object.values(Position).map((p) => (
                            <SelectItem key={p} value={p}>
                              {p}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Há quanto tempo você ocupa essa posição?
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={loading}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma período" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Cargos</SelectLabel>
                          {Object.values(Experience).map((e) => (
                            <SelectItem key={e} value={e}>
                              {e}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qual é o seu e-mail?</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="email@exemplo.com"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Pode ficar tranquilo, prometemos não encher sua caixa de
                    entrada com mensagens desnecessárias.
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full"
              loading={loading}
            >
              Ver Resultado
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};
