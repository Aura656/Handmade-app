// src/pages/Productos.jsx
import { useState, useEffect } from "react";
import CategoryFilter from "../componentes/CategoryFilter";
import ProductCard from "../componentes/ProductCard";
import "../styles/productos.css";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  useEffect(() => {
    // Simular carga de productos desde una API
    const productosFalsos = [
      { id: 1, nombre: "Marco de fotos", categoria: "Madera" },
      { id: 2, nombre: "Flor de papel", categoria: "Papel" },
      { id: 3, nombre: "Llaveros reciclados", categoria: "Plástico" },
    ];
    setProductos(productosFalsos);
  }, []);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((producto) => producto.categoria === categoriaSeleccionada)
    : productos;

  return (
    <div className="productos-page">
      <aside className="productos-filtros">
        <CategoryFilter onChange={setCategoriaSeleccionada} />
      </aside>
      <section className="productos-lista">
        {productosFiltrados.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </section>
    </div>
  );
};

export default Productos;