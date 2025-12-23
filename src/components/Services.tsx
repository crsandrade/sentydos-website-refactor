'use client';

import { Brain, Heart, User, Clock } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  topics: string[];
}

export function Services() {
  const services: Service[] = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Terapia Cognitivo-Comportamental',
      description: 'Abordagem focada em identificar e modificar padrões de pensamento e comportamento.',
      topics: ['Ansiedade', 'Depressão', 'Fobias', 'TOC'],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Terapia Individual',
      description: 'Atendimento personalizado para questões emocionais e desenvolvimento pessoal.',
      topics: ['Autoestima', 'Relacionamentos', 'Luto', 'Traumas'],
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'Orientação Profissional',
      description: 'Suporte para questões relacionadas à carreira e ambiente de trabalho.',
      topics: ['Burnout', 'Transição de carreira', 'Estresse', 'Conflitos'],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Sessões Online',
      description: 'Atendimento por videochamada com a mesma qualidade do presencial.',
      topics: ['Flexibilidade', 'Conforto', 'Acessibilidade', 'Segurança'],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Serviços Oferecidos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atendimento especializado com foco em suas necessidades individuais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.topics.map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl mb-4">
            Primeira Consulta com Desconto
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Agende sua primeira sessão e receba 20% de desconto
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Aproveitar Oferta
          </button>
        </div>
      </div>
    </section>
  );
}
