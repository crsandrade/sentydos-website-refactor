import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Maria Santos',
      role: 'Paciente desde 2022',
      content:
        'A Dra. Ana transformou minha vida. Sua abordagem empática e profissional me ajudou a superar a ansiedade que me afetava há anos. Sou extremamente grata!',
      rating: 5,
    },
    {
      name: 'João Oliveira',
      role: 'Paciente desde 2021',
      content:
        'Excelente profissional! As sessões online são muito convenientes e a qualidade do atendimento é impecável. Recomendo muito!',
      rating: 5,
    },
    {
      name: 'Carla Mendes',
      role: 'Paciente desde 2023',
      content:
        'Encontrei na Dra. Ana o suporte que precisava para atravessar um momento difícil. Seu profissionalismo e humanidade fazem toda a diferença.',
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
