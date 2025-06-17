import { useEffect, useState } from 'react';
import '../styles/home.css';
import { FiArrowRight, FiShoppingBag, FiUpload, FiUser, FiMessageSquare } from 'react-icons/fi';


const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowContent(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { 
      id: 1, 
      title: "Explora productos", 
      description: "Revisa nuestras categorías y descubre manualidades únicas.",
      icon: <FiShoppingBag size={24} />
    },
    { 
      id: 2, 
      title: "Publica tus creaciones", 
      description: "En la sección 'Vender' puedes subir imágenes, poner descripción y precio.",
      icon: <FiUpload size={24} />
    },
    { 
      id: 3, 
      title: "Crea tu perfil", 
      description: "Accede a tu perfil para editar tu información personal y seguir tus publicaciones.",
      icon: <FiUser size={24} />
    },
    { 
      id: 4, 
      title: "Conecta con compradores", 
      description: "Comparte tus redes y mantente en contacto con quienes aprecian tu arte.",
      icon: <FiMessageSquare size={24} />
    }
  ];

  return (
    <div className="home-container">
{/* BANNER PRINCIPAL */}
<section className={`home-banner ${showContent ? 'hidden' : ''}`}>
  <div className="home-overlay">
    <h1>Bienvenido a HANDMADE</h1>
    <p>🎨 Donde la imaginación cobra vida y cada detalle está hecho con el corazón. 💖</p>
    <a href="/productos" className="home-button">
      Explorar Productos <FiArrowRight className="button-icon" />
    </a>
  </div>
</section>

      {/* SOBRE NOSOTROS */}
      <section className={`home-info ${showContent ? 'visible' : ''}`}>
        <div className="info-content">
          <h2>Sobre Nosotros</h2>
          <p>
            Handmade es una plataforma dedicada a promover el trabajo de artesanos independientes. 
            Ofrecemos productos únicos hechos con materiales como madera, papel y plástico reciclado, 
            cada uno con su propia historia y esencia.
          </p>
        </div>
      </section>

      {/* DINÁMICA GENERAL */}
      <section className="home-section-cards">
        <h2>¿Cómo Funciona?</h2>
        <div className="card-container">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`funciona-card ${activeCard === step.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(step.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-icon">{step.icon}</div>
              <div className="card-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;