import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact section-padding" data-scroll-index='6' id='contact'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center">
              <h3 className='wow fadeInLeft'>¿Cómo podemos ayudarte?
              </h3>
              <span className="line"></span>
             
            </div>
            <div className="section-content wow flipInX">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8">
                  <form id="contact_form" action="">
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          id="your_name"
                          className="form-input w-100"
                          name="full-name"
                          placeholder="Nombre"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          id="your_name"
                          className="form-input w-100"
                          name="full-name"
                          placeholder="Empresa"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="email"
                          id="email"
                          className="form-input w-100"
                          name="email"
                          placeholder="Correo"
                          required
                        />
                      </div>
                    </div>
                    <input
                      type="number"
                      id="subject"
                      className="form-input w-100"
                      name="subject"
                      placeholder="Teléfono
"
                    />
                    <textarea
                      className="form-input w-100"
                      id="message"
                      placeholder="Mensaje..."
                      name="message"
                    ></textarea>
                    <button
                      className="btn-grad w-100 text-uppercase"
                      type="submit"
                      name="button"
                    >
                      Enviar
                    </button>
                  </form>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="contact-info white">
                    <div className="contact-item media">
                      <i className="fa fa-map-marker-alt media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">Ubicación</p>
                        <p className="text-uppercase">Eusebione 1521, Mar del plata, C, 7600, Argentina</p>
                      </div>
                    </div>
                    {/* <div className="contact-item media">
                      <i className="fa fa-mobile media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">Phone</p>
                        <p className="text-uppercase">
                          <a className="text-white" href="tel:+15173977100">
                            009900990099
                          </a>
                        </p>
                      </div>
                    </div> */}
                    <div className="contact-item media">
                      <i className="fa fa-envelope media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">E-mail</p>
                        <p className="text-uppercase">
                          <a className="text-white" href="mailto:abcdefg@gmail.com">
                          contacto@gearthlogic.com
                          </a>
                        </p>
                      </div>
                    </div>
                    {/* <div className="contact-item media">
                      <i className="fa fa-clock media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">Working Hours</p>
                        <p className="text-uppercase">Mon-Fri 9.00 AM to 5.00PM.</p>
                      </div>
                    </div> */}
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

export default ContactSection;