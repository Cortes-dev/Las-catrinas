import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { gsap } from "gsap";


const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  // GSAP animation for hero text
  const heroTextRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroTextRef.current) {
        gsap.fromTo(
          heroTextRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
        );
      }
    }, 2000); // Espera 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/catrina.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ zIndex: 10 }}
        />
        {/* Overlay degradado y decorativo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" style={{zIndex:2}}></div>
        <div className="absolute inset-0 bg-black bg-opacity-40" style={{zIndex:3}}></div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div ref={heroTextRef} className="max-w-4xl mx-auto opacity-0">
            <h1 className="text-6xl md:text-9xl font-bold great-vibes-regular mb-4 drop-shadow-lg">
              Las Catrinas
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow">
              Una celebración de la vida y la muerte a través de la gastronomía mexicana
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
            >
              Reserva tu Mesa
            </motion.a>
          </div>
        </div>
        {/* Decoración extra: Catrina SVG o imagen (opcional) */}
        {/* Puedes agregar aquí una imagen decorativa si lo deseas */}
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 great-vibes-regular">
              Sobre Nosotros
            </h2>
            <p className="text-lg leading-relaxed">
              En Restaurante Catrina, honramos la rica tradición del Día de los
              Muertos con platos que cuentan historias. Nuestros chefs fusionan
              técnicas ancestrales con ingredientes frescos para crear una
              experiencia culinaria inolvidable. Cada bocado es una celebración
              de la cultura mexicana, llena de colores, sabores y emociones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-center mb-12 great-vibes-regular"
          >
            Nuestro Menú Destacado
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tacos de Catrina",
                desc: "Tacos tradicionales con un toque festivo",
                price: "$12",
              },
              {
                name: "Mole Poblano",
                desc: "Salsa ancestral con pollo tierno",
                price: "$18",
              },
              {
                name: "Chiles Rellenos",
                desc: "Pimientos rellenos de queso y carne",
                price: "$15",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg text-center"
              >
                <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <p className="text-orange-500 font-bold text-xl">
                  {item.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia y Ambiente */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-4xl font-bold mb-6 great-vibes-regular text-orange-400">Vive la Experiencia</h2>
            <p className="text-lg leading-relaxed mb-4">
              En Las Catrinas, cada detalle está pensado para sumergirte en la cultura mexicana. Disfruta de un ambiente temático con decoración inspirada en el Día de los Muertos, música tradicional y atención personalizada.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Decoración auténtica y colorida</li>
              <li>Música mexicana en vivo los fines de semana</li>
              <li>Eventos especiales y noches temáticas</li>
              <li>Espacios para grupos y celebraciones</li>
            </ul>
            <p className="text-lg text-orange-300 font-semibold">¡Ven y celebra la vida con nosotros!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="/catrina.png"
              alt="Ambiente Las Catrinas"
              className="rounded-xl shadow-2xl w-full max-w-md object-cover border-4 border-orange-500"
              style={{ background: 'rgba(0,0,0,0.2)' }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
