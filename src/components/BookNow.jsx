import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function BookNow() {
  const { state } = useLocation();
  const initialRoom = state?.room || "";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    branch: "",
    room: initialRoom,
  });
  const [isLoading, setIsLoading] = useState(false);

  const branches = [
    "Downtown",
    "Beachfront",
    "Mountain Retreat",
    "City Center",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Booking Data:", formData);
    alert("Booking data logged to console!");
    setIsLoading(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      branch: "",
      room: initialRoom,
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-futuristic-gradient min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md border border-neon-blue/30"
      >
        <h2 className="text-3xl font-orbitron text-neon-blue text-center mb-6">
          Book Your Stay
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-orbitron text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 bg-transparent border border-neon-blue/50 rounded text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-orbitron text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 bg-transparent border border-neon-blue/50 rounded text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-orbitron text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 bg-transparent border border-neon-blue/50 rounded text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-orbitron text-gray-300">
              Check-In Date
            </label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
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
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 bg-transparent border border-neon-blue/50 rounded text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-orbitron text-gray-300">
              Hotel Branch
            </label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 bg-transparent border border-neon-blue/50 rounded text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
            >
              <option value="" disabled>
                Select a branch
              </option>
              {branches.map((branch) => (
                <option key={branch} value={branch} className="text-black">
                  {branch}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-orbitron text-gray-300">
              Room
            </label>
            <input
              type="text"
              name="room"
              value={formData.room}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-transparent border border-neon-blue/50 rounded text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="Enter room type (optional)"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white py-3 rounded font-orbitron hover:bg-primary-accent transition disabled:opacity-50"
          >
            {isLoading ? "Submitting..." : "Book Now"}
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
}

export default BookNow;
