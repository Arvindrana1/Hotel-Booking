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
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 relative">
        Our Services
        <span className="block w-24 h-1 bg-yellow-400 absolute bottom-[-10px] left-1/2 transform -translate-x-1/2"></span>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:-translate-y-2 transition-transform"
          >
            <div className="text-4xl text-yellow-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
