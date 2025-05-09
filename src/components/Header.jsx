import { motion } from "framer-motion";

function Header() {
  const handleAuthClick = () => {
    alert("This would redirect to Google OAuth login in the full application");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-futuristic-gradient text-white fixed w-full z-50 py-4 px-6 flex justify-between items-center shadow-lg"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-orbitron"
      >
        LuxuryStays
      </motion.div>
      <nav className="hidden md:flex space-x-6">
        {["Home", "Rooms", "Services", "About", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            whileHover={{ color: "#00f0ff" }}
            className="text-gray-300 font-orbitron transition"
          >
            {item}
          </motion.a>
        ))}
      </nav>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAuthClick}
        className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2 rounded font-orbitron hover:bg-primary-accent transition"
      >
        Sign In
      </motion.button>
    </motion.header>
  );
}

export default Header;
