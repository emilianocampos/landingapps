import React from "react";

const Banner = () => {
  return (
    <section className="banner" data-scroll-index="0">
      <div className="banner-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="banner-text">
                <h2 className="white bounceInLeft animated">
                  Aplicaciones que transforman tu negocio
                </h2>

                <p className="banner-text white bounceInLeft animated">
                  Desarrollamos aplicaciones personalizadas, dinámicas y seguras
                  que elevan la experiencia del usuario y el rendimiento
                  empresarial.
                </p>
                <ul>
                  {/* <li>
                    <a href="#">
                      <img
                        src="./src/images/appstore.png"
                        className="wow fadeInUp"
                        data-wow-delay="0.4s"
                        alt="App Store"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./src/images/playstore.png"
                        className="wow fadeInUp"
                        data-wow-delay="0.7s"
                        alt="Play Store"
                      />
                    </a>
                  </li> */}
                  <li className="bounceInLeft animated">
                    <a href="#contact" className="about-btns pulse  animated  ">
                      Haz crecer tu negocio con apps innovadoras
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-12 "
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
   
                  
            >
              <img
                src="./src/images/iphone-screen.png"
                className="img-fluid wow fadeInUp"
                alt="iPhone screen"
              />
            </div>
          </div>
        </div>
      </div>
      <span class="svg-wave">
        {" "}
        <img
          class="svg-hero"
          src="./src/images/applight-wave.svg"
          className="imgwa"
        />{" "}
      </span>
    </section>
  );
};

export default Banner;
