import React, { useState } from "react";
import styled from "styled-components";

import logo from "../assets/yemaslogo.png";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  background-color: #f9a405;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  .logo {
    max-width: 80px;
  }

  .menu-icon {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0 1rem;

      a {
        text-decoration: none;
        color: #ffffff;
        font-weight: bold;

        &:hover {
          color: #ff8c00;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }

    /* Estilos para el menú modal */
    ul {
      display: ${({ isOpen }) => (isOpen ? "block" : "none")};
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 40%;
      background-color: #f9a405; /* Fondo semitransparente */
      z-index: 9999; /* Asegura que el menú esté por encima de todo */
      padding: 2rem;
      box-sizing: border-box;
      text-align: center;

      li {
        margin: 2rem 0;
        font-size: 1.5rem;
        
        a {
          font-size: 1.8rem;
          color: #ffffff;
          font-weight: bold;
          text-decoration: none;

          &:hover {
            color: #ff8c00;
          }
        }
      }
    }
  }
`;

// Estilo para el fondo cuando el menú está abierto
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9998;
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Cerrar el menú cuando un enlace es clickeado
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Fondo oscuro cuando el menú está abierto */}
      {menuOpen && <ModalBackdrop onClick={closeMenu} />}

      <NavBar isOpen={menuOpen}>
        <img src={logo} alt="Yemas del Sol Logo" className="logo" />
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
        <ul>
          <li>
            <a href="#about" onClick={closeMenu}>
              Acerca de
            </a>
          </li>
          <li>
            <a href="#app" onClick={closeMenu}>
              YMS App
            </a>
          </li>
          <li>
            <a href="#store" onClick={closeMenu}>
              Tienda
            </a>
          </li>
        </ul>
      </NavBar>
    </>
  );
};

export default Header;
