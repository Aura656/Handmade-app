import React from 'react';
import '../styles/Perfil.css';
import { FaUserEdit } from 'react-icons/fa';

const misManualidades = [
  {
    id: 1,
    nombre: 'Marco de madera rústico',
    categoria: 'Madera',
    imagen: 'https://via.placeholder.com/100'
  },
  {
    id: 2,
    nombre: 'Flor de papel decorativa',
    categoria: 'Papel',
    imagen: 'https://via.placeholder.com/100'
  },
  {
    id: 3,
    nombre: 'Jarrón reciclado de plástico',
    categoria: 'Plástico',
    imagen: 'https://via.placeholder.com/100'
  }
];


const Perfil = () => {
  return (
    <div className="perfil-layout">
      <div className="perfil-card glass">
        <div className="avatar">JP</div>
        <h2>Mi Perfil</h2>
        <p><strong>Nombre:</strong> Juan Pérez</p>
        <p><strong>Correo:</strong> juanperez@email.com</p>
        <p><strong>Ubicación:</strong> Lima, Perú</p>
        <button className="editar-btn" title="Editar perfil">
          <FaUserEdit />
        </button>
      </div>

      <div className="manualidades-card glass">
        <h3>Tus manualidades</h3>
        <div className="manualidades-list">
          {misManualidades.map((item) => (
            <div key={item.id} className="manualidad-item">
              <img src={item.imagen} alt={item.nombre} />
              <div>
                <h4>{item.nombre}</h4>
                <p>{item.categoria}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
