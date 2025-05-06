import placeholder from "../assets/placeholder.jpeg";

const rooms = [
  {
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

function FeaturedRooms() {
  const handleBookClick = () => {
    alert("This would redirect to the booking page in the full application");
  };

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 relative">
        Our Featured Rooms
        <span className="block w-24 h-1 bg-yellow-400 absolute bottom-[-10px] left-1/2 transform -translate-x-1/2"></span>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition-transform"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
              <p className="text-yellow-400 text-lg font-semibold mb-4">
                {room.price}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                {room.features.map((feature, idx) => (
                  <span key={idx} className="flex items-center">
                    <span className="mr-2">{feature.icon}</span>
                    {feature.text}
                  </span>
                ))}
              </div>
              <button
                onClick={handleBookClick}
                className="bg-gray-900 text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedRooms;
