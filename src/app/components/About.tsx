import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const qualifications = [
    'Graduação em Psicologia - USP',
    'Especialização em Terapia Cognitivo-Comportamental',
    'Mestrado em Psicologia Clínica',
    'Membro do Conselho Regional de Psicologia (CRP 06/123456)',
    'Mais de 10 anos de experiência clínica',
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
              Sobre a Profissional
            </h2>
            <p className="text-gray-600 mb-6">
              Olá! Sou a Dra. Ana Silva, psicóloga clínica com uma paixão por ajudar
              pessoas a superarem seus desafios emocionais e alcançarem uma vida mais
              equilibrada e significativa.
            </p>
            <p className="text-gray-600 mb-8">
              Minha abordagem é centrada no paciente, combinando técnicas baseadas em
              evidências com um atendimento humanizado e acolhedor. Acredito que cada
              pessoa é única e merece um tratamento personalizado que respeite sua
              individualidade.
            </p>
            <div className="space-y-3">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <p className="text-gray-700">{qualification}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621887348744-6b0444f8a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjYzOTkwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profissional de psicologia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
