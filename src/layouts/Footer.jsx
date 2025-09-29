import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 backdrop-blur-xl text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left text-sm mb-2 md:mb-0">
          &copy; 2025 LAS CATRINAS Restaurante. Todos los derechos reservados.
        </p>
        <p className="text-center md:text-right text-sm">
          Hecho por{' '}
          <a
            href="https://cortes-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-600 font-semibold underline transition-colors"
          >
            cortes-dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;