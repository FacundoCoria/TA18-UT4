import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Home</h1>
      <Link to="/about">Ver otra pagina</Link>
      <Link to="/products/1">Ver producto 1</Link>
      <Link to="/products/2">Ver producto 2</Link>
      <Link to="/products/3">Ver producto 3</Link>
    </div>
  );
};

export default Home;
