import React from 'react';
import styled from 'styled-components';
import imageWtsp from '../assets/whatsapp.svg';

// Estilos para el botón flotante de WhatsApp
const ButtonContainer = styled.div`
  bottom: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background-color: #25D366;  // Verde de WhatsApp
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9999;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #128C7E; // Cambiar color al pasar el cursor
  }
`;

const WtspButton = (numero, mensaje) => {
  return (
    <ButtonContainer>
      <a href="https://wa.me/542646111611" target="_blank" rel="noopener noreferrer">
        <img src={imageWtsp} alt="WhatsApp" style={{ width: '50px', height: '50px' }} />
      </a>
    </ButtonContainer>
  );
};

export default WtspButton;
