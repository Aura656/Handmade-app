import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import Perfil from '../pages/Perfil';
import Vender from '../pages/Vender';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/vender" element={<Vender />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
