import placeholder from "../assets/placeholder.jpeg";

function Hero() {
  const handleCtaClick = () => {
    alert("This would redirect to the booking page in the full application");
  };

  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${placeholder})`,
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Experience Luxury Like Never Before
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">
        Indulge in the ultimate relaxation with our premium rooms and
        world-class services.
      </p>
      <button
        onClick={handleCtaClick}
        className="bg-yellow-400 text-gray-900 px-6 py-3 rounded text-lg font-semibold hover:bg-yellow-500 transition"
      >
        Book Now
      </button>
    </section>
  );
}

export default Hero;
