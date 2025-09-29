import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Contacto = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Validar nombre (solo letras y espacios, mínimo 2 caracteres)
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.nombre)) {
      newErrors.nombre = 'El nombre solo puede contener letras y espacios';
    }

    // Validar teléfono (formato mexicano)
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio';
    } else if (!/^[0-9]{10}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Ingresa un teléfono válido de 10 dígitos';
    }

    // Validar mensaje (mínimo 10 caracteres)
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const telefono = '528787838514';
    const text = `Hola, soy ${formData.nombre.trim()} (Tel: ${formData.telefono}). ${formData.mensaje.trim()}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    
    // Limpiar formulario después del envío
    setFormData({ nombre: '', telefono: '', mensaje: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Restaurante Catrina</title>
        <meta name="description" content="Contáctanos y encuentra nuestra ubicación en Restaurante Catrina." />
      </Helmet>
      <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold great-vibes-regular text-center mb-8 drop-shadow-lg"
          >
            Contáctanos
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div className="flex items-center text-lg mb-2">
                <FaMapMarkerAlt className="text-orange-500 mr-3" />
                <span>Calle de la Catrina 123, Ciudad de México</span>
              </div>
              <div className="flex items-center text-lg mb-2">
                <FaPhone className="text-orange-500 mr-3" />
                <a href="tel:+528787838514" className="hover:text-orange-400 transition-colors">+52 878 783 8514</a>
              </div>
              <div className="flex items-center text-lg mb-2">
                <FaEnvelope className="text-orange-500 mr-3" />
                <a href="mailto:info@restaurantcatrina.com" className="hover:text-orange-400 transition-colors">info@restaurantcatrina.com</a>
              </div>
              <div className="flex items-center text-lg mb-2">
                <FaWhatsapp className="text-green-500 mr-3" />
                <a href="https://wa.me/528787838514" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Enviar WhatsApp</a>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.0846919343003!2d-100.547295705179!3d28.67951118686924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865f8b001b21f681%3A0x12aa4ab390c91d40!2sLAS%20CATRINAS!5e0!3m2!1ses-419!2smx!4v1759101905427!5m2!1ses-419!2smx"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Restaurante Catrina"
                ></iframe>
              </div>
            </motion.div>
            <motion.form
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-4 bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg"
              onSubmit={handleWhatsApp}
            >
              <div>
                <input
                  type="text"
                  placeholder="Tu Nombre Completo"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange('nombre', e.target.value)}
                  className={`w-full p-3 bg-gray-900 border rounded focus:outline-none transition-colors ${
                    errors.nombre 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-gray-700 focus:border-orange-500'
                  }`}
                />
                {errors.nombre && (
                  <p className="text-red-400 text-sm mt-1">{errors.nombre}</p>
                )}
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Tu Teléfono (10 dígitos)"
                  value={formData.telefono}
                  onChange={(e) => {
                    // Solo permitir números
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 10) {
                      handleInputChange('telefono', value);
                    }
                  }}
                  className={`w-full p-3 bg-gray-900 border rounded focus:outline-none transition-colors ${
                    errors.telefono 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-gray-700 focus:border-orange-500'
                  }`}
                />
                {errors.telefono && (
                  <p className="text-red-400 text-sm mt-1">{errors.telefono}</p>
                )}
              </div>
              
              <div>
                <textarea
                  placeholder="Tu Mensaje (mínimo 10 caracteres)"
                  rows="4"
                  value={formData.mensaje}
                  onChange={(e) => handleInputChange('mensaje', e.target.value)}
                  className={`w-full p-3 bg-gray-900 border rounded focus:outline-none resize-none transition-colors ${
                    errors.mensaje 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-gray-700 focus:border-orange-500'
                  }`}
                ></textarea>
                {errors.mensaje && (
                  <p className="text-red-400 text-sm mt-1">{errors.mensaje}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded transition duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp /> Enviar por WhatsApp
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;