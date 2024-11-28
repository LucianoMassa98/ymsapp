import React from "react";
import styled from "styled-components";
import logo from "../assets/yemaslogo.png"; // Ajusta la ruta según tu proyecto

const AboutSection = styled.section`
  padding: 2rem;
  background-color: #fff4e6;
  text-align: center;

  .logo {
    max-width: 150px;
    margin: 0 auto 1.5rem auto;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: #333;
  }

  p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .values {
    margin-top: 2rem;

    h3 {
      font-size: 1.8rem;
      color: #333;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;
        color: #555;
        font-size: 1rem;
      }
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <img src={logo} alt="Yemas del Sol Logo" className="logo" />
      <h2>Acerca de Nosotros</h2>
      <p>
        En <strong>Yemas del Sol</strong>, nos dedicamos a la producción y comercialización de huevos frescos 
        de la más alta calidad. Nuestro compromiso es ofrecer productos que respeten 
        el medio ambiente y promuevan prácticas agrícolas sostenibles, asegurando que cada huevo 
        que llega a su mesa sea un símbolo de frescura, sabor y responsabilidad.
      </p>
      
      <div className="values">
        <h3>Nuestros Valores</h3>
        <ul>
          <li>🌱 <strong>Sostenibilidad:</strong> Respetamos el medio ambiente en cada etapa de nuestro proceso.</li>
          <li>🤝 <strong>Compromiso:</strong> Estamos comprometidos con la calidad y el bienestar de nuestros clientes.</li>
          <li>🌟 <strong>Innovación:</strong> Buscamos constantemente mejorar para ofrecer lo mejor del mercado.</li>
          <li>🧡 <strong>Integridad:</strong> Mantenemos la honestidad y transparencia como pilares de nuestra empresa.</li>
        </ul>
      </div>
      
    </AboutSection>
  );
};

export default About;
