
import  { useEffect,useState } from 'react';

import styled from "styled-components";


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
  .product h3 {
  margin: 0.5rem 0; /* Reduce el margen vertical */
}

.product p {
  margin: 0.25rem 0; /* Reduce el margen vertical */
}

.product img {
  margin-bottom: 0.5rem; /* Espaciado entre la imagen y el texto */
}

.product .price {
  margin: 0.5rem 0;
}

.product button {
  margin-top: 0.75rem; /* Espaciado para separar ligeramente el botón */
}
  .price{
        font-size: 1.5rem;
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

   button {
    background-color: #f9a405;
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

const Store = () => {



  const [productItems ,setProductItems] = useState([]);

  useEffect(() => {
    // URL del archivo Google Sheets en formato JSON
   const url = 'https://docs.google.com/spreadsheets/d/12dRMLW3HTLpA8QhGizDOu04efYnOYAT-pD4tckruEhg/gviz/tq?tqx=out:json'

    fetch(url)
      .then(response => response.text()) // Leer como texto
      .then(text => {
        // El texto contiene una función JavaScript, por lo que necesitamos extraer la parte de JSON
        const jsonData = JSON.parse(text.replace('/*O_o*/\ngoogle.visualization.Query.setResponse(', '').replace(');', ''));

        // La primera fila (headers) contiene los nombres de las columnas
        const headers = jsonData.table.cols.map(col => col.label); // Extraemos los nombres de las columnas

        // Los datos de las filas son las filas siguientes en la hoja
        const rows = jsonData.table.rows.map(row => {
          const rowData = {};
          row.c.forEach((cell, index) => {
            if (cell && cell.v) {
              rowData[headers[index]] = cell.v; // Asignar el valor de la celda con el nombre de la columna
            }
          });
          return rowData;
        });

        // Mapeamos los datos de la fila a la estructura de menuItems
        const formattedMenuItems = rows.map(row => ({
          nombre: row['nombre'] || '', // Asumimos que la columna 'Genética' tiene el nombre del producto
          precio: row['precio'] || '', 
          descripcion: row['descripcion'] || '', 
          image: row['image'] || '', 
        }));

        setProductItems(formattedMenuItems); // Guardamos los datos formateados en el estado
      })
      .catch(error => console.error('Error al leer la hoja de cálculo:', error));
  }, []);

  return (
    <StoreSection id="store">
      <h2>Compra nuestros productos</h2>
      <p>Envios a todo San Juan o retiro por RN40 3293, J5413 Chimbas, San Juan</p>
      <div className="products">
        {productItems.map((product) => (
          <div key={product.nombre} className="product">
            <img src={product.image} alt={product.nombre} />
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p className="price">${product.precio}</p>
            <a
              href={`https://wa.me/542644166990?text=Hola,%20quisiera%20comprar%20${encodeURIComponent(
                product.nombre
              )}%20-%20${encodeURIComponent(
                product.descripcion
              )}%20por%20$${encodeURIComponent(
                product.precio
              )}.%20Vengo%20desde%20la%20página%20web%20de%20Yemas%20del%20Sol.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Comprar</button>
            </a>
          </div>
        ))}
      </div>
    </StoreSection>
  );
};

export default Store;
