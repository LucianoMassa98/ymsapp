import React from 'react';
import styled from 'styled-components';

// Importación de las imágenes
import online from '../assets/Component15.png';
import Component16 from '../assets/Component16.png';
import Component17 from '../assets/Component17.png';

// Estilos para la galería
const GalleryContainer = styled.section`
  width: 100%;
  max-width: 1200px; /* Puedes ajustar esto si necesitas un ancho máximo */
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  justify-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Galery = () => {
  // Definir un objeto que contenga todas las imágenes
  const images = {
    online: online,
    Component16: Component16,
    Component17: Component17
  };

  return (
    <GalleryContainer>
      {/* Accede a las imágenes a través del objeto */}
      <GalleryItem>
        <img src={images.online} alt="Image 1" />
      </GalleryItem>

      <GalleryItem>
        <img src={images.Component16} alt="Image 2" />
      </GalleryItem>

      <GalleryItem>
        <img src={images.Component17} alt="Image 3" />
      </GalleryItem>
    </GalleryContainer>
  );
};

export default Galery;
