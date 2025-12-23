'use client';

import { ImageWithFallback } from './figma/ImageWithFallback';

/**
 * Componente da seção Hero.
 * Exibe a proposta de valor principal, botões de chamada para ação (CTA) e uma imagem em destaque.
 * Esta é a primeira seção que os usuários veem ao acessar a página.
 */
export function Hero() {
  /**
   * Rola suavemente para uma seção específica pelo ID.
   * @param id - O ID HTML da seção para a qual rolar
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 ultrawide:py-32 bg-linear-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 ultrawide:py-36 ultrawide:mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className=" text-4xl ultrawide:text-7xl lg:text-4xl text-gray-900 mb-6">
              Cuidando da sua{' '}
              <span className="text-teal-600">saúde mental</span> com
              empatia e profissionalismo
            </h1>
            <p className="text-lg ultrawide:text-xl text-gray-600 mb-8">
              Psicólogo clínico especializado em avaliação Neuropsicológica,
              oferecendo um espaço seguro e acolhedor para o seu bem-estar emocional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5571988911911?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors"
                >
                  Agendar Consulta
                </button>
              </a>
              <button
                onClick={() => scrollToSection('sobre')}
                className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition-colors"
              >
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="valmiro-filho-image.png"
                alt="Consultório de psicologia acolhedor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-teal-600 mb-1">+100</p>
              <p className="text-gray-600 text-sm">Pacientes atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
