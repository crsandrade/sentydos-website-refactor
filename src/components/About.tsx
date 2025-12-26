import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

/**
 * Componente da seção Sobre (About).
 * Exibe informações sobre o profissional/clínica, incluindo histórico e qualificações.
 * Utiliza um layout de duas colunas com texto de um lado e imagem do outro.
 */
export function About() {
  // Lista de qualificações profissionais para exibir
  const qualifications = [
    'Especialista em Psicopatologia e Saúde Mental',
    'Especialista em Avaliação Psicológica',
    'Especialista em Avaliação Neuropsicológica',
    'Pós-Graduando em Psicanálise',
    'Pós-Graduando em Atendimento Clínico das Diversidades Sexuais e de Gênero',
    'Membro do Conselho Regional de Psicologia (CRP 03/9433)'
  ];

  return (
    <section id="sobre" className="py-4 lg:py-20 ultrawide:py-36 bg-white ultrawide:mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:gap-16 gap-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl ultrawide:text-6xl text-gray-900 mb-6 ultrawide:mb-16">
              Psicólogo clínico especializado em avaliação psicológica
            </h2>
            <p className="text-gray-600 ultrawide:text-lg mb-6 ultrawide:mb-8">
              Sou psicólogo clínico, com atuação voltada para o cuidado da saúde mental a partir da escuta qualificada, da avaliação psicológica e da compreensão profunda de cada história.
              Meu trabalho é ajudar pessoas a entenderem o que está por trás de seus sintomas emocionais, cognitivos e comportamentais, construindo, junto com cada paciente, um processo de cuidado ético, individualizado e responsável.

            </p>
            <p className="text-gray-600 ultrawide:text-lg mb-6 ultrawide:mb-8">
              Faço atendimento presencial em Salvador, Bahia atuando nas áreas de psicoterapia, avaliação psicológica e avaliação neuropsicológica, com formação especializada e compromisso com práticas baseadas em conhecimento técnico e sensibilidade clínica.
              O atendimento é realizado em um espaço seguro, de acolhimento e sigilo, respeitando a singularidade de cada pessoa e o tempo necessário para que o processo terapêutico aconteça.
            </p>
            <div className="space-y-4 pt-6 ultrawide:pt-16">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <p className="text-gray-700 text-sm ultrawide:text-lg">{qualification}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="sentydos-logo.png"
                alt="Profissional de psicologia"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-6 ultrawide:pt-12">
        <button className=" w-xl bg-teal-600 text-white lg:px-6 lg:py-3 px-2 py-2 rounded-full text-base lg:text-lg ultrawide:text-base font-medium
             hover:bg-teal-700 transition-colors group inline-flex items-center justify-center gap-2 ">
          Conheça nossas áreas de atuação <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
}
