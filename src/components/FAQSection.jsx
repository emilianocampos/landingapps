// FAQSection.jsx
import React, { useEffect } from 'react';
// Importa wow.js si estás usando animaciones de wow



const faqs = [
  {
    question: ' Aplicación de Gestión para Empresa A',
    answer: ' Desarrollamos una aplicación móvil de gestión para Empresa A, mejorando la eficiencia operativa en un 40%.',
    delay: '0.2s'
  },
  {
    question: 'Plataforma de e-Learning para Empresa B',
    answer: 'Creamos una plataforma de e-learning que ha permitido a Empresa B expandir su alcance educativo globalmente.',
    delay: '0.2s'
  },
  {
    question: 'App de Logística para Empresa C',
    answer: '  Implementamos una aplicación de logística para Empresa C, reduciendo los tiempos de entrega en un 25%.',
    delay: '0.4s'
  },
  {
    question: ' Aplicación de Reservas para Empresa D',
    answer: '  Desarrollamos una aplicación de reservas para Empresa D, que aumentó las reservas en línea en un 60%.',
    delay: '0.4s'
  }

];

const FAQSection = () => {
  useEffect(() => {
    // Inicializa WOW.js para las animaciones
    new WOW().init();
  }, []);

  return (
    <section className="faq section-padding prelative" data-scroll-index='5'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center">
              <h3 className='wow fadeInLeft'> Historias de Éxito
              </h3>
              <span className="line"></span>
              
            </div>
            <div className="section-content">
              <div className="row">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="col-md-6 faq-content wow fadeInUp"
                    data-wow-delay={faq.delay}
                  >
                    <h4 className='h4asw'>{faq.question}</h4>
                    <p className='pasw'>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;