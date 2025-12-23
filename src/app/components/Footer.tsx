import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl mb-4">Dra. Ana Silva</h3>
            <p className="text-gray-400 mb-4">
              Psicóloga Clínica - CRP 06/123456
            </p>
            <p className="text-gray-400 mb-4">
              Cuidando da sua saúde mental com empatia, profissionalismo e
              dedicação. Atendimento presencial e online.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Depoimentos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+5511987654321"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  (11) 98765-4321
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@draanasilva.com.br"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  contato@draanasilva.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Av. Paulista, 1000
                  <br />
                  São Paulo, SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dra. Ana Silva. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
