import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import placeholder from "../assets/placeholder.jpeg";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    price: "$199 / night",
    image: placeholder,
    features: [
      { icon: "👥", text: "2 Guests" },
      { icon: "🛏️", text: "King Bed" },
      { icon: "📶", text: "WiFi" },
    ],
  },
  {
    id: 2,
    name: "Premium Suite",
    price: "$299 / night",
    image: placeholder,
    features: [
      { icon: "👥", text: "3 Guests" },
      { icon: "🛏️", text: "King Bed" },
      { icon: "🏊", text: "Pool View" },
    ],
  },
  {
    id: 3,
    name: "Family Suite",
    price: "$349 / night",
    image: placeholder,
    features: [
      { icon: "👥", text: "4 Guests" },
      { icon: "🛏️", text: "2 Queen Beds" },
      { icon: "🌅", text: "Ocean View" },
    ],
  },
];

function Rooms() {
  const navigate = useNavigate();

  const handleBookClick = (room) => {
    navigate("/book-now", { state: { room: room.name } });
  };

  return (
    <section className="py-20 bg-futuristic-gradient min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-orbitron text-neon-blue text-center mb-12 relative"
      >
        Our Rooms
        <span className="block w-24 h-1 bg-primary-accent absolute bottom-[-10px] left-1/2 transform -translate-x-1/2"></span>
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: room.id * 0.1 }}
            className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition-transform border border-neon-blue/30"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-orbitron text-white mb-2">
                {room.name}
              </h3>
              <p className="text-primary-accent text-lg font-orbitron mb-4">
                {room.price}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                {room.features.map((feature, idx) => (
                  <span key={idx} className="flex items-center text-gray-300">
                    <span className="mr-2">{feature.icon}</span>
                    {feature.text}
                  </span>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBookClick(room)}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white py-3 rounded font-orbitron hover:bg-primary-accent transition"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;
