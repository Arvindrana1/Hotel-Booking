import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-futuristic-gradient text-white py-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-orbitron mb-4 relative">
            About Us
            <span className="block w-12 h-1 bg-primary-accent absolute bottom-[-8px]"></span>
          </h3>
          <p className="text-gray-300">
            LuxuryStays is a premier hotel chain dedicated to providing
            exceptional hospitality experiences with luxurious amenities and
            personalized service.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-orbitron mb-4 relative">
            Quick Links
            <span className="block w-12 h-1 bg-primary-accent absolute bottom-[-8px]"></span>
          </h3>
          <ul className="space-y-2">
            {[
              "Rooms & Suites",
              "Dining",
              "Spa & Wellness",
              "Events",
              "Special Offers",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-neon-blue transition font-orbitron"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-orbitron mb-4 relative">
            Contact Us
            <span className="block w-12 h-1 bg-primary-accent absolute bottom-[-8px]"></span>
          </h3>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center">
              <span className="text-primary-accent mr-2">📍</span> 123 Luxury
              Avenue, Resort City
            </p>
            <p className="flex items-center">
              <span className="text-primary-accent mr-2">📞</span> +1 (555)
              123-4567
            </p>
            <p className="flex items-center">
              <span className="text-primary-accent mr-2">✉️</span>{" "}
              info@luxurystays.com
            </p>
          </div>
          <div className="flex mt-6 space-x-4">
            {["fb", "tw", "ig"].map((social) => (
              <motion.a
                key={social}
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-neon-blue transition"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300"
      >
        <p>© 2025 LuxuryStays Hotel. All Rights Reserved.</p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
