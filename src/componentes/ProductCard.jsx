import './ProductCard.css';

const ProductCard = ({ producto }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="product-info">
        <h3>{producto.nombre}</h3>
        <p className="categoria">{producto.categoria}</p>
        <button className="ver-mas">Ver más</button>
      </div>
    </div>
  );
};

export default ProductCard;
