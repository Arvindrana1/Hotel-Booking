import { motion } from "framer-motion";

const services = [
  {
    icon: "🍽️",
    title: "Fine Dining",
    description:
      "Experience gourmet cuisine prepared by our world-class chefs.",
  },
  {
    icon: "💆",
    title: "Luxury Spa",
    description: "Rejuvenate your senses with our premium spa treatments.",
  },
  {
    icon: "🏊",
    title: "Infinity Pool",
    description: "Relax in our stunning infinity pool with panoramic views.",
  },
  {
    icon: "🚗",
    title: "Airport Pickup",
    description:
      "Complimentary airport pickup and drop service for all guests.",
  },
];

function Services() {
  return (
    <section className="py-20 bg-futuristic-gradient">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-orbitron text-neon-blue text-center mb-12 relative"
      >
        Our Services
        <span className="block w-24 h-1 bg-primary-accent absolute bottom-[-10px] left-1/2 transform -translate-x-1/2"></span>
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 text-center hover:-translate-y-2 transition-transform border border-neon-blue/30"
          >
            <div className="text-4xl text-primary-accent mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-orbitron text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
