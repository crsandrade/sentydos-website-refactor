import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Psicólogo Valmiro Filho | Saúde Mental e Bem-estar",
  description: "Psicólogo clínico especializado em avaliação Neuropsicológica e psicoterapia. Agende sua consulta em Salvador/BA.",
};

/**
 * Componente de layout raiz da aplicação.
 * Define a estrutura HTML global e aplica estilos/fontes globais.
 * 
 * @param children - Os componentes filhos a serem renderizados dentro do layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
