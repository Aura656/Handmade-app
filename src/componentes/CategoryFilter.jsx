// src/componentes/CategoryFilter.jsx
import './CategoryFilter.css';

const CategoryFilter = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="category-filter">
      <h3>Filtrar por categoría</h3>
      <select onChange={handleChange} defaultValue="">
        <option value="">Todas</option>
        <option value="Madera">Madera</option>
        <option value="Papel">Papel</option>
        <option value="Plástico">Plástico</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
