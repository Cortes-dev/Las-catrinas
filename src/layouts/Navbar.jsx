
import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      navRef.current,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)' },
      0.3
    );

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = [
    { name: 'Inicio', href: '/', ariaLabel: 'Ir a página de inicio' },
    { name: 'Menú', href: '/menu', ariaLabel: 'Ver nuestro menú' },
    { name: 'Contacto', href: '/contacto', ariaLabel: 'Información de contacto' },
  ];

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-xl shadow-lg'
          : 'transparent backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          ref={logoRef}
          className="text-2xl md:text-3xl font-bold great-vibes-regular text-white flex flex-col items-center hover:text-orange-400 transition-colors duration-300"
          aria-label="Las Catrinas - Ir al inicio"
        >
          Las Catrinas
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 justify-center items-center" role="menubar">
          {navItems.map(({ name, href, ariaLabel }) => (
            <Link
              to={href}
              key={name}
              className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
              role="menuitem"
              aria-label={ariaLabel}
            >
              {name}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="ml-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
            aria-label="Ordenar ahora"
          >
          Ordenar ahora
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-lg p-2 transition-all duration-200"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-orange-500/20"
            role="menu"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map(({ name, href, ariaLabel }) => (
                <Link
                  key={name}
                  to={href}
                  className="block text-white hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300 font-medium py-3 px-2 rounded-lg"
                  role="menuitem"
                  aria-label={ariaLabel}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;