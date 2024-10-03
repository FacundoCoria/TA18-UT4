import React from "react";
import { useParams } from "react-router-dom";

// Simulación de datos de productos
const products = {
  1: { name: "Producto 1", description: "Este es el producto 1" },
  2: { name: "Producto 2", description: "Este es el producto 2" },
  3: { name: "Producto 3", description: "Este es el producto 3" },
};

function Products() {
  const { id } = useParams();
  const product = products[id];

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default Products;
