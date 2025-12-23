'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

/**
 * Componente da seção de Contato.
 * Exibe informações de contato (telefone, email, endereço) e um formulário de contato.
 * Gerencia o estado do formulário e envio simulado.
 */
export function Contact() {
  // Estado do formulário para inputs controlados
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  /**
   * Lida com o envio do formulário.
   * Atualmente implementa um alerta simulado e redefinição do formulário.
   * @param e - Evento de envio do formulário
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envio simulado do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  /**
   * Atualiza o estado do formulário na alteração do input.
   * @param e - Evento de alteração do input
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Dados das informações de contato
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      content: '(71) 98891-1911',
      link: 'tel:+5571988911911',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'valmirofilho@sentydos.com.br',
      link: 'mailto:valmirofilho@sentydos.com.br',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Endereço',
      content: 'Avenida Tancredo Neves, 969, Edf. Metropolitan Center - Sala: 304 - Caminho das Árvores., Salvador (Bahia)',
      link: 'https://maps.app.goo.gl/ChhhCxDruiRWTRNQ9',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horário de Atendimento',
      content: 'Seg-Sex: 8h-20h | Sáb: 8h-12h',
      link: null,
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estou aqui para ajudar. Agende sua consulta ou tire suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl text-gray-900 mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-teal-50 rounded-xl p-6">
              <h4 className="text-lg text-gray-900 mb-2">Atendimento Online</h4>
              <p className="text-gray-600">
                Ofereço também atendimento por videochamada para sua comodidade.
                Todos os protocolos de segurança e sigilo são mantidos.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl text-gray-900 mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="(11) 98765-4321"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  placeholder="Como posso ajudar você?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
