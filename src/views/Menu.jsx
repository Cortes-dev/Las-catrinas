import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const menuItems = [
  {
    name: "Tacos de Catrina",
    desc: "Tacos tradicionales con un toque festivo y salsa especial.",
    price: "$12",
  },
  {
    name: "Mole Poblano",
    desc: "Salsa ancestral con pollo tierno y semillas mexicanas.",
    price: "$18",
  },
  {
    name: "Chiles Rellenos",
    desc: "Pimientos rellenos de queso y carne, bañados en salsa de jitomate.",
    price: "$15",
  },
  {
    name: "Pozole Rojo",
    desc: "Maíz cacahuazintle con carne de cerdo y guarniciones.",
    price: "$14",
  },
  {
    name: "Tamales de Fiesta",
    desc: "Tamales de diferentes sabores, envueltos en hoja de maíz.",
    price: "$10",
  },
  {
    name: "Agua de Jamaica",
    desc: "Refrescante bebida tradicional mexicana.",
    price: "$5",
  },
];

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menú | Restaurante Catrina</title>
        <meta name="description" content="Descubre el menú temático de Restaurante Catrina, inspirado en la tradición mexicana." />
      </Helmet>
      <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold great-vibes-regular text-center mb-8 drop-shadow-lg"
          >
            Nuestro Menú
          </motion.h1>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-300">
            Platos inspirados en la cultura mexicana y el Día de los Muertos. Cada receta celebra la vida y la tradición.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {menuItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-orange-500 hover:scale-105 transition-transform duration-300"
              >
                <h2 className="text-3xl font-bold great-vibes-regular text-orange-400 mb-2 drop-shadow">
                  {item.name}
                </h2>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <span className="text-orange-500 font-bold text-2xl mb-2">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
