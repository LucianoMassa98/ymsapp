import React from "react";
import styled from "styled-components";

import inventario from "../assets/inventario.png";
import produccion from "../assets/produccion.png";
import gerencia from "../assets/gerencia.png";


const AppSectionContainer = styled.section`
  padding: 2rem;
  background-color: #f1f1f1;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  .feature-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;

    .feature-item {
      text-align: center;
      max-width: 300px;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 0.5rem;
      }

      h3 {
        font-size: 1.2rem;
        margin: 0.5rem 0;
        color: #333;
      }

      p {
        font-size: 0.9rem;
        color: #555;
      }
    }
  }

  button {
    background-color: #007bff;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 2rem;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const AppSection = () => {
  return (
    <AppSectionContainer id="app">
      <h2>Descubre YMS App</h2>
      <p>
        Una solución completa para optimizar y gestionar tu granja avícola de forma 
        eficiente y sencilla. Explora nuestras funcionalidades clave:
      </p>
      <div className="feature-grid">
        <div className="feature-item">
          <img
            src={inventario}
            alt="Gestión de inventarios"
          />
          <h3>Gestión de Inventarios</h3>
          <p>
            Lleva un control detallado de los productos disponibles y optimiza tu inventario.
          </p>
        </div>
        <div className="feature-item">
          <img
            src={produccion}
            alt="Monitoreo de producción"
          />
          <h3>Monitoreo de Producción</h3>
          <p>
            Supervisa la producción en tiempo real para garantizar eficiencia y calidad.
          </p>
        </div>
        <div className="feature-item">
          <img
            src={gerencia}
            alt="Reportes Gerenciales"
          />
          <h3>Reportes Gerenciales</h3>
          <p>
            Accede a informes detallados para tomar decisiones estratégicas en tu negocio.
          </p>
        </div>
      </div>
      <button>Demo Grátis</button>
    </AppSectionContainer>
  );
};

export default AppSection;
