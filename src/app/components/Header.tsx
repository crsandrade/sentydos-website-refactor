import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl text-teal-700">Dra. Ana Silva</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
            >
              Agendar Consulta
            </button>
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
          <nav className="md:hidden pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="w-full bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
            >
              Agendar Consulta
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
