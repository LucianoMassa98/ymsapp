import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #157b37;
  color: white;
  text-align: center;
  padding: 1.5rem;

  a {
    color: #ff8c00;
    text-decoration: none;
    margin: 0 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Yemas del Sol. Todos los derechos reservados.</p>
      <p>
        <a href="#about">Acerca de</a> | <a href="#app">YMS App</a> | <a href="#store">Tienda</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
