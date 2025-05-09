import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleBookClick = (room) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
      return;
    }
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Mock API call
      // const response = await axios.post('/api/bookings', {
      //   roomId: selectedRoom.id,
      //   checkIn,
      //   checkOut,
      //   guests,
      // });
      const response = { data: { bookingId: "12345" } }; // Mock response
      alert(
        `Booking confirmed for ${selectedRoom.name}! Booking ID: ${response.data.bookingId}`
      );
      setIsModalOpen(false);
      setCheckIn("");
      setCheckOut("");
      setGuests(1);
    } catch (err) {
      alert("Booking failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
              <p className="text-primary-accent text-lg font-semibold mb-4">
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

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-lg w-full max-w-md border border-neon-blue/30"
          >
            <h3 className="text-2xl font-orbitron text-neon-blue mb-6">
              Book {selectedRoom?.name}
            </h3>
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-orbitron text-gray-300">
                  Check-In Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  required
                  className="w-full mt-1 p-3 bg-transparent border border-neon-blue/50 rounded text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-orbitron text-gray-300">
                  Check-Out Date
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                  className="w-full mt-1 p-3 bg-transparent border border-neon-blue/50 rounded text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-orbitron text-gray-300">
                  Guests
                </label>
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                  className="w-full mt-1 p-3 bg-transparent border border-neon-blue/50 rounded text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-700 text-white rounded font-orbitron hover:bg-gray-600"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded font-orbitron hover:bg-primary-accent disabled:opacity-50"
                >
                  {isLoading ? "Booking..." : "Confirm Booking"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Rooms;
