import React from 'react';


const About = () => {
  return (
    <section className="about section-padding prelative" data-scroll-index="1">
      <div className="container">
        <div className="row">
          <div className="col-md-12" >
            <div className="section-header text-center wow fadeInUp" >
              <h3 >Qué hacemos
              </h3>
              <span className="line"></span>
              <p className='pa'>
              Aplicaciones que impulsan tu estrategia digital

              </p>
              <p className='ps'>En GearthLogic, creamos aplicaciones móviles y web que son tan funcionales como atractivas. Utilizando las últimas tecnologías y frameworks, como React y Node.js, desarrollamos soluciones que garantizan un rendimiento superior y una experiencia de usuario impecable.</p>
              <a href="#contact" className="about-btn wow tada">Solicita una demostración gratis
              </a>
            </div>
            <div className="section-content text-center">
              <div className="row">
                <div className="col-md-4">
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                    <i className="fa fa-life-ring" aria-hidden="true"></i>
                    <h5>Soporte 24/7</h5>
                    <p>
                    Ofrecemos soporte integral en cada fase del desarrollo, garantizando calidad y seguridad para superar tus expectativas en todo momento.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                    <h5>Desarrollo de aplicaciones móviles</h5>
                    <p>
                    Creamos aplicaciones móviles personalizadas, adaptadas a las necesidades de tu negocio y tus usuarios. Ofrecemos soluciones innovadoras y funcionales para Android e iOS, asegurando que tu app sea intuitiva y fácil de usar.


                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.6s">
                    <i className="fa fa-bolt" aria-hidden="true"></i>
                    <h5>Velocidad y eficiencia</h5>
                    <p>
                    Nos enfocamos en entregar proyectos de forma rápida y eficiente. Implementamos tecnologías modernas que garantizan un rendimiento óptimo y tiempos de entrega ágiles, sin sacrificar la calidad de nuestras soluciones.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;