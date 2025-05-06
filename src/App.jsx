import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedRooms from "./components/FeaturedRooms";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <FeaturedRooms />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
