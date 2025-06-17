// Footer.jsx
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="logo-title">Handmade</h3>
        <p className="footer-description">Tu espacio para comprar y vender manualidades únicas.</p>

        <h4 className="follow-title">Síguenos</h4>

        <div className="social-buttons">
          <a
            href="https://facebook.com"
            className="social-btn facebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visítanos en Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            className="social-btn instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visítanos en Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            className="social-btn twitter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visítanos en Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Handmade. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
