import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

/**
 * Componente da seção de Depoimentos.
 * Exibe avaliações de pacientes/clientes para construir prova social.
 * Renderiza uma grade de cartões de depoimento com classificações por estrelas.
 */
export function Testimonials() {
  // Array de dados dos depoimentos
  const testimonials: Testimonial[] = [
    {
      name: 'Priscila',
      role: 'Paciente desde 2018',
      content:
        'Estou há mais de 5 anos com Valmiro e tenho tido avanços inimagináveis, cada ano me renovo e me torno uma pessoa melhor. Foi com ele que tratei minha depressão aguda e agora o tdah encontrando novas formas de lidar comigo e estratégias para evoluir além de vasculhando bem passado poder fazer as pazes com meus fantasmas e lidar c meus traumas de infância. Valmiro além de um profissional de excelência é muito humano e empático.ama seu trabalho e o faz de maneira incrivel.',
      rating: 5,
    },
    {
      name: 'Gabriela',
      role: 'Paciente desde 2019',
      content:
        'Cheguei ao consultório de Valmiro Filho, completamente desacreditada da vida, cheio de pensamentos terríveis e com vontade de tirar a minha própria vida. E ao longo do acompanhamento psicológico, acabei sendo diagnósticada com depressão, atrelada outras coisas, mas aos poucos fui melhorando e evoluindo. Hoje me sinto bem melhor e já não tenho vontade de morrer, pelol contrário, venho transformando a minha vida em algo realmente bom. Agradeço imensamente ao Valmiro pela forma que vem conduzindo o meu tratamento.',
      rating: 5,
    },
    {
      name: 'Jaqueline',
      role: 'Paciente desde 2017',
      content:
        'Estava passando por um processo muito difícil, tive depressão maior, que desestruturou minha vida como um todo. O atendimento com o Valmiro me proporcionou uma nova visão do que estava vivenciando, e hoje estou bem melhor, estou refazendo e reequilibrando minha vida, hoje já consigo trabalhar novamente e fazer coisas que deixei de fazer por conta da depressão. Ele é um profissional excelente! Profissional competente, e pessoa bem receptiva, além do local do atendimento ser um ambiente bem aconchegante!',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            O que dizem meus pacientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de pessoas que transformaram suas vidas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 relative"
            >
              <div className="absolute top-6 right-6 text-teal-200">
                <Quote className="w-12 h-12" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
              <div>
                <p className="text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
