import React from 'react';
import { FaRobot, FaPencilRuler,FaCogs, FaLightbulb ,FaShieldAlt } from 'react-icons/fa';
import { MdOutlineMonitor } from "react-icons/md";
const Features = () => {
  return (
    <section className="feature section-padding" data-scroll-index="2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h3 className='wow fadeInDown'> Ventajas de elegir GearthLogic</h3>
              <span className="line asd" id='linea'></span>
             
            </div>
            <div className="section-content text-center">
              <div className="row">
                {/* Primera columna de características */}
                <div className="col-md-4 col-sm-12">
                  <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                    <div className="media-body text-right media-right-margin">
                      <h5>Integraciones con IA</h5>
                      <p>
                      Potencia tus aplicaciones con funcionalidades avanzadas de IA.

                      </p>
                    </div>
                    <div className="media-right icon-border">
                    <FaRobot size={50} color="#3c72fc " />
                    </div>
                  </div>
                  <div className="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                    <div className="media-body text-right media-right-margin">
                      <h5>Enfoque en UX/UI:</h5>
                      <p>
                      Diseñamos aplicaciones con interfaces amigables y atractivas.
                      </p>
                    </div>
                    <div className="media-right icon-border">
                     <FaPencilRuler size={50} color="#3c72fc "/>
                    </div>
                  </div>
                  <div className="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                    <div className="media-body text-right media-right-margin">
                      <h5>Desarrollo personalizado:</h5>
                      <p>
                      Adaptamos cada aplicación a las necesidades específicas de tu negocio.

                      </p>
                    </div>
                    <div className="media-right icon-border">
                    <FaCogs size={50} color="#3c72fc "/>
                    </div>
                  </div>
                </div>

                {/* Imagen central */}
                <div className="col-md-4 d-none d-md-block d-lg-block">
                  <div className="feature-mobile">
                    <img src="./src/images/iphone-screen-with-shadow.png" className="img-fluid wow fadeInUp" alt="Feature" />
                  </div>
                </div>

                {/* Segunda columna de características */}
                <div className="col-md-4 col-sm-12">
                  <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                    <div className="media-left icon-border media-right-margin">
                    <FaLightbulb size={40} color="#3c72fc " />
                    </div>
                    <div className="media-body text-left">
                      <h5>Tecnología de vanguardia:</h5>
                      <p>
                      Utilizamos frameworks modernos para garantizar el mejor rendimiento.

                      </p>
                    </div>
                  </div>
                  <div className="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                    <div className="media-left icon-border media-right-margin">
                    <FaShieldAlt size={40} color="#3c72fc " />
                    </div>
                    <div className="media-body text-left">
                      <h5>Seguridad y escalabilidad: </h5>
                      <p>
                      Desarrollamos aplicaciones seguras y preparadas para crecer contigo.

                      </p>
                    </div>
                  </div>
                  <div className="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                    <div className="media-left icon-border media-right-margin">
                    <MdOutlineMonitor size={40} color="#3c72fc "/>
                    </div>
                    <div className="media-body text-left">
                      <h5>Tecnologías en las que trabajamos:</h5>
                      <p>
                     ANDROID - IOS - TV - WATCH - IA 
                      </p>
                    </div>
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

export default Features;