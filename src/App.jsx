import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedRooms from "./components/FeaturedRooms";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Rooms from "./components/Rooms";
import BookNow from "./components/BookNow";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedRooms />
      <Services />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/book-now" element={<BookNow />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
