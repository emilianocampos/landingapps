import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";


const Testimonials = () => {
  return (
    <section className="testimonial section-padding" data-scroll-index="4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center white">
              <h3 className="wow fadeInUp">Reseñas de clientes</h3>
              <span className="line"></span>
            </div>
            <div className="section-content">
              <div className="row">
                <div className="offset-md-2 col-md-8 col-sm-12">
                <Swiper
      spaceBetween={10}
      loop={true}
      className="wow fadeInUp"
    >
                    <SwiperSlide
                      style={{
                        border: "none",
                        background: "rgba(255, 255, 255, 0.81)",
                        borderRadius: "5px ",
                      }}
                    >
                      <div className="slider-item">
                        <div className="test-img">
                          <img
                            src="./src/images/user1.jpg"
                            alt="John Michal"
                            width="157"
                            height="157"
                            style={{
                              border: "12px solid #fff",
                              borderRadius: "50%",
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </div>
                        <div className="test-text">
                          <span
                            className="title"
                            style={{
                              display: "block",
                              fontSize: "1.125em",
                              fontWeight: "700",
                            }}
                          >
                            <span
                              style={{
                                display: "block",
                                fontSize: "1.5em",
                                fontWeight: "700",
                              }}
                            >
                              John Michal
                            </span>{" "}
                            Digital Designer
                          </span>
                          <p>
                            "La aplicación móvil que desarrollaron ha sido
                            fundamental para mejorar nuestra eficiencia. ¡Gran
                            trabajo, GearthLogic!"
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        border: "none",
                        background: "rgba(255, 255, 255, 0.81)",
                        borderRadius: "5px ",
                      }}
                    >
                      <div className="slider-item">
                        <div className="test-img">
                          <img
                            src="./src/images/user3.jpg"
                            alt="Steve Smith"
                            width="157"
                            height="157"
                            style={{
                              border: "12px solid #fff",
                              borderRadius: "50%",
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </div>
                        <div className="test-text">
                          <span
                            className="title"
                            style={{
                              display: "block",
                              fontSize: "1.125em",
                              fontWeight: "700",
                            }}
                          >
                            <span
                              style={{
                                display: "block",
                                fontSize: "1.5em",
                                fontWeight: "700",
                              }}
                            >
                              Steve Smith
                            </span>{" "}
                            App User
                          </span>
                          <p>
                            "GearthLogic entendió exactamente lo que
                            necesitábamos y nos entregó una solución que superó
                            nuestras expectativas."
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        border: "none",
                        background: "rgba(255, 255, 255, 0.81)",
                        borderRadius: "5px ",
                      }}
                    >
                      <div className="slider-item">
                        <div className="test-img">
                          <img
                            src="./src/images/user1.jpg"
                            alt="John Michal"
                            width="157"
                            height="157"
                            style={{
                              border: "12px solid #fff",
                              borderRadius: "50%",
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </div>
                        <div className="test-text">
                          <span
                            className="title"
                            style={{
                              display: "block",
                              fontSize: "1.125em",
                              fontWeight: "700",
                            }}
                          >
                            <span
                              style={{
                                display: "block",
                                fontSize: "1.5em",
                                fontWeight: "700",
                              }}
                            >
                              John Michal
                            </span>{" "}
                            Digital Designer
                          </span>
                          <p>
                          "El equipo de GearthLogic es altamente competente y profesional. La aplicación ha sido un éxito rotundo."

                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        border: "none",
                        background: "rgba(255, 255, 255, 0.81)",
                        borderRadius: "5px ",
                      }}
                    >
                      <div className="slider-item">
                        <div className="test-img">
                          <img
                            src="./src/images/user1.jpg"
                            alt="John Michal"
                            width="157"
                            height="157"
                            style={{
                              border: "12px solid #fff",
                              borderRadius: "50%",
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </div>
                        <div className="test-text">
                          <span
                            className="title"
                            style={{
                              display: "block",
                              fontSize: "1.125em",
                              fontWeight: "700",
                            }}
                          >
                            <span
                              style={{
                                display: "block",
                                fontSize: "1.5em",
                                fontWeight: "700",
                              }}
                            >
                              John Michal
                            </span>{" "}
                            Digital Designer
                          </span>
                          <p>
                          "La plataforma que crearon es intuitiva y fácil de usar, ha sido un placer trabajar con ellos."

                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
