'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Componente de Cabeçalho (Header) contendo a barra de navegação.
 * Gerencia a navegação responsiva com um alternador de menu móvel.
 * Inclui funcionalidade de rolagem suave para as seções da página.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Rola suavemente para uma seção específica pelo ID e fecha o menu móvel.
   * @param id - O ID HTML da seção para a qual rolar
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full h-14 lg:h-20 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl text-teal-700">Psicólogo Valmiro Filho</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-semibold">
            <a href="#inicio" className="text-gray-700 hover:text-teal-600 transition-colors ">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-teal-600 transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-700 hover:text-teal-600 transition-colors">Serviços</a>
            <a href="#depoimentos" className="text-gray-700 hover:text-teal-600 transition-colors">Depoimentos</a>
            <a href="#contato" className="text-gray-700 hover:text-teal-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/5571988911911?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
              >
                Agendar Consulta
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-4 bg-white/95 backdrop-blur-sm shadow-sm flex flex-col items-center">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-teal-600 transition-colors ">Início</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-teal-600 transition-colors">Sobre</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-teal-600 transition-colors">Serviços</a>
            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-teal-600 transition-colors">Depoimentos</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-teal-600 transition-colors">Contato</a>
            <a
              href="https://wa.me/5571988911911?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
              >
                Agendar Consulta
              </button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
