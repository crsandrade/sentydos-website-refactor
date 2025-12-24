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
    <section id="sobre" className="py-20 ultrawide:py-36 bg-white ultrawide:mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl ultrawide:text-6xl text-gray-900 mb-6 ultrawide:mb-16">
              Quem somos?
            </h2>
            <p className="text-gray-600 ultrawide:text-lg mb-6 ultrawide:mb-8">
              Somos uma empresa que surgiu com o intuito de ser tornar referência no mercado em nossa área de atuação, com foco na valorização
              do Desenvolvimento Humano, atuando nos segmentos de Psicoterapia, Avaliação Psicológica e Avaliação Neuropsicológica,
              além de Recrutamento e Seleção, cursos e palestras relacionadas à área.
            </p>
            <p className="text-gray-600 ultrawide:text-lg mb-6 ultrawide:mb-8">
              Dispomos de uma equipe qualificada e eficiente, comprometida em superar as expectativas dos nossos clientes.
              Atuamos com seriedade, transparência e, sobretudo, respeito na relação com pessoas e/ou organizações.
              Presentes desde 2017, prezamos sempre pela qualidade do atendimento, estando prontos para acolher e satisfazer necessidades em todos os âmbitos.
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
    </section>
  );
}
