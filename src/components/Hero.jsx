import { motion } from "framer-motion";
import placeholder from "../assets/placeholder.jpeg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Hero() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCtaClick = () => {
    // Redirect to the BookNow component
    navigate("/book-now");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${placeholder})`,
      }}
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-6xl font-orbitron mb-4"
      >
        Experience Luxury Like Never Before
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl max-w-2xl mb-8"
      >
        Indulge in the ultimate relaxation with our premium rooms and
        world-class services.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCtaClick}
        className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-3 rounded text-lg font-orbitron hover:bg-primary-accent transition"
      >
        Book Now
      </motion.button>
    </motion.section>
  );
}

export default Hero;
