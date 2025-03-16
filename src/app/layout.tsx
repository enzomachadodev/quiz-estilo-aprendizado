import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

const font = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const baseUrl = "https://quiz.e-mentor.com.br";

export const metadata: Metadata = {
  title: "Descubra seu Estilo de Aprendizado | eMentor",
  description:
    "Faça o teste de estilo de aprendizagem e descubra qual método funciona melhor para você. Baseado na teoria de David Kolb, este quiz ajuda você a potencializar seu aprendizado.",
  keywords: [
    "estilos de aprendizagem",
    "teste de aprendizagem",
    "David Kolb",
    "metodologia de ensino",
    "como aprender melhor",
    "quiz educacional",
  ],
  openGraph: {
    title: "Descubra Seu Estilo de Aprendizagem | eMentor",
    description:
      "Cada pessoa tem uma forma única de aprender. Descubra seu estilo de aprendizagem e otimize seu aprendizado com nosso quiz interativo.",
    url: baseUrl,
    siteName: "Quiz Estilo de Aprendizagem | eMentor",
    type: "website",
    images: [
      {
        url: `${baseUrl}/preview.jpg`,
        width: 1200,
        height: 630,
        alt: "Teste de estilo de aprendizagem | eMentor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Descubra Seu Estilo de Aprendizagem | eMentor",
    description:
      "Faça o teste de estilo de aprendizagem baseado na teoria de David Kolb e descubra como você aprende melhor.",
    images: [`${baseUrl}/preview.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <GoogleAnalytics
        gaId="G-K2L3LF2GX3"
        debugMode={process.env.NODE_ENV === "development"}
      />
      <body className={`${font.variable}`}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
