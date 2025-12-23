import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Cuidando da sua{' '}
              <span className="text-teal-600">saúde mental</span> com
              empatia e profissionalismo
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Psicóloga clínica especializada em terapia cognitivo-comportamental,
              oferecendo um espaço seguro e acolhedor para o seu bem-estar emocional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors"
              >
                Agendar Consulta
              </button>
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
                src="https://images.unsplash.com/photo-1700168333952-3d44a3f427af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2dpc3QlMjBvZmZpY2UlMjBjYWxtfGVufDF8fHx8MTc2NjQ4ODcwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Consultório de psicologia acolhedor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-teal-600 mb-1">+500</p>
              <p className="text-gray-600 text-sm">Pacientes atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
