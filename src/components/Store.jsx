import React from "react";
import styled from "styled-components";

import imgHuevo from "../assets/huevo.png"
const StoreSection = styled.section`
  padding: 2rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .product {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
  }

  .product img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .product h3 {
    margin: 0.5rem 0;
  }
`;

const Store = () => {
  const products = [
    { id: 1, name: "Cartón de 24 Huevos", price: "$500", img: imgHuevo },
    { id: 2, name: "Cartón de 24 Huevos", price: "$500", img: imgHuevo },
    { id: 3, name: "Cartón de 24 Huevos", price: "$500", img: imgHuevo },
    { id: 4, name: "Cartón de 24 Huevos", price: "$500", img: imgHuevo },

  ];

  return (
    <StoreSection id="store">
      <h2>Compra nuestros productos</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </StoreSection>
  );
};

export default Store;
