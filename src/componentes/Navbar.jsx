// src/componentes/Navbar.jsx
import { Link } from 'react-router-dom';
import { FiHome, FiBox, FiUploadCloud, FiUser } from 'react-icons/fi';
import { FaHandSparkles } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaHandSparkles style={{ marginRight: '8px' }} />HANDMADE
      </div>
      <ul className="navbar-links">
        <li><Link to="/"><FiHome /></Link></li>
        <li><Link to="/productos"><FiBox /></Link></li>
        <li><Link to="/vender"><FiUploadCloud /></Link></li>
        <li><Link to="/perfil"><FiUser /></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
