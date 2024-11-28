import styled from "styled-components";

import img1 from '../assets/im1.jpg';  // Ajusta la ruta según corresponda


const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
  background: url(${img1}) no-repeat center center/cover;
  color: white;
  padding: 0 2rem;
  position: relative; /* Necesario para posicionar la capa encima de la imagen */
`;

const Overlay = styled.div`
  position: absolute; /* Posiciona la capa sobre la imagen */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Capa gris con transparencia */
  z-index: 1; /* Asegura que la capa esté por encima de la imagen */
`;

const TextContainer = styled.div`
  position: relative; /* Necesario para que el texto quede por encima de la capa */
  z-index: 2; /* Asegura que el texto esté por encima de la capa */
`;

const Hero = () => {
  return (
    <HeroSection>
      <Overlay />
      <TextContainer>
        <h1>Yemas del Sol: Huevos Frescos y Sostenibles</h1>
        <p>Comprometidos con la calidad, la frescura y el cuidado del medio ambiente. De nuestra granja a tu mesa, con amor y dedicación.</p>
      </TextContainer>
    </HeroSection>
  );
};

export default Hero;
