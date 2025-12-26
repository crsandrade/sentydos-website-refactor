'use client';

import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

/**
 * Componente de Rodapé (Footer).
 * Exibe informações de direitos autorais, links sociais, links de navegação rápida e detalhes de contato.
 * Aparece na parte inferior de todas as páginas.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/valmirofilhopsicologo/', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/valmiro-do-esp%C3%ADrito-santo-filho-40048244/', label: 'LinkedIn' },
  ];

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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl mb-4">Psicólogo Valmiro Filho</h3>
            <p className="text-gray-400 mb-4">
              Psicólogo Clínico - CRP 03/9433
            </p>
            <p className="text-gray-400 mb-4">
              “Não se trata de eliminar o sofrimento, mas de dar a ele um sentido.”
              <br></br>
              — Viktor Frankl
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
            <a href="#inicio" className="text-gray-400 hover:text-teal-400 transition-colors ">Início</a>           
              </li>
              <li>
  <a href="#sobre" className="text-gray-400 hover:text-teal-400 transition-colors">Sobre</a>
              </li>
              <li>
                 <a href="#servicos" className="text-gray-400 hover:text-teal-400 transition-colors">Serviços</a>    
              </li>
              <li>
            <a href="#contato" className="text-gray-400 hover:text-teal-400 transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <a
                  href="tel:+5571988911911"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  (71) 98891-1911
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:valmirofilho@sentydos.com.br"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  valmirofilho@sentydos.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Av. ACM, 969 - Sala 304
                  <br />
                  Salvador, BA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Valmiro Filho, todos os direitos reservados. Desenvolvido por Rafael Andrade.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
