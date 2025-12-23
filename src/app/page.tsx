"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import {useEffect } from "react";

/**
 * Componente da página inicial (Home).
 * Renderiza as seções principais da landing page, incluindo Cabeçalho, Hero, Sobre, Serviços,
 * Depoimentos, Contato e Rodapé.
 * 
 * Também lida com a restauração da rolagem para o topo ao montar o componente.
 */
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
