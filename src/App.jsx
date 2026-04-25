import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MoleculeBackground from './components/MoleculeBackground';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Technology from './pages/Technology';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Industries from './pages/Industries';
import ServicesHub from './pages/ServicesHub';
import Products from './pages/Products';
import Newsroom from './pages/Newsroom';
import Wings from './pages/Wings';
import Careers from './pages/Careers';
import CareersForm from './pages/CareersForm';
import './App.css';

const NavigationManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    // Force redirect to home on refresh/initial load
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, []); // Only run once on mount (refresh)

  return (
    <div className="app-container" style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
      {/* Canvas-based Molecule Background — NOT on home page */}
      {!isHome && <MoleculeBackground />}

      <NavigationManager />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/:techId" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/products" element={<Products />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/wings" element={<Wings />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/apply" element={<CareersForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
