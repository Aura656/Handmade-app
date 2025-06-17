import '../styles/vender.css';
import { useState } from 'react';

const Vender = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    categoria: '',
    descripcion: '',
    imagen: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProducto({
      ...producto,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Producto enviado:', producto);
    alert('¡Tu manualidad ha sido enviada!');
  };

  return (
    <section className="vender">
      <h2>Publica tu Manualidad</h2>
      <form onSubmit={handleSubmit} className="vender-form">
        <div>
          <label htmlFor="nombre">Nombre del producto</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ej. Caja decorativa de madera"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            name="categoria"
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="Madera">Madera</option>
            <option value="Plástico">Plástico</option>
            <option value="Papel">Papel</option>
          </select>
        </div>

        <div>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Describe los materiales, medidas, colores, etc."
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="imagen">Imagen del producto</label>
          <input
            type="file"
            id="imagen"
            name="imagen"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Publicar</button>
      </form>
    </section>
  );
};

export default Vender;
