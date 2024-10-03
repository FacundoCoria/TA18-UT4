// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Protected from "./navigation/Protected";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about" exact />

        {/* Rutas protegidas */}
        <Route element={<Protected />}>
          <Route path="/products/:id" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
