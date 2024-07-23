// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">Mi Proyecto</a>
        <ul className="navbar-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/contact">Contacto</a></li>
          <li><a href="/search">Buscar</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
