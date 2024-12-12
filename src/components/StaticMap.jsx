import styled from 'styled-components';

// Estilos para el contenedor del mapa
const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StaticMap = () => {
  // Coordenadas de la ubicación estática
  const location = {
    lat: -31.4859238,  // Latitud
    lng: -68.5184096, // Longitud
  };

  // URL para el mapa interactivo de Google
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location.lat},${location.lng}`;

  return (
    <MapContainer>
      {/* Mapa interactivo de Google en iframe */}
      <iframe
        title="Mapa de Ubicación"
        width="600"
        height="400"
        src={mapUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </MapContainer>
  );
};

export default StaticMap;
