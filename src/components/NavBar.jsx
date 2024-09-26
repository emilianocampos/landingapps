import React, { useState } from 'react';
import logo from '../images/logo.svg'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand navbar-logo slideInLeft animated" href="#">
          <img src={logo} alt="lcac" className="logo-1" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          
          <span className="fas fa-bars"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto " >
            <li className="nav-item rubberBand animated">
              <a className="nav-link" href="#" data-scroll-nav="0">
               Inicio
              </a>
            </li>
            <li className="nav-item rubberBand animated">
              <a className="nav-link" href="#" data-scroll-nav="1">
              Qué Hacemos
              </a>
            </li>
            <li className="nav-item rubberBand animated">
              <a className="nav-link" href="#" data-scroll-nav="2">
                Ventajas Gearthlogic
              </a>
            </li>
            
            <li className="nav-item rubberBand animated">
              <a className="nav-link" href="#" data-scroll-nav="4">
                Reseñas
              </a>
            </li>
            <li className="nav-item rubberBand animated">
              <a className="nav-link" href="#" data-scroll-nav="5">
                Historias de éxito
              </a>
            </li>
            <li className="nav-item rubberBand animated">
              <a className="nav-link" href="#" data-scroll-nav="6">
               Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;