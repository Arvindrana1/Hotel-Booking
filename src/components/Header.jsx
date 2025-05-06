function Header() {
  const handleAuthClick = () => {
    alert("This would redirect to Google OAuth login in the full application");
  };

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50 py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">LuxuryStays</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-yellow-400 transition">
          Home
        </a>
        <a href="#" className="hover:text-yellow-400 transition">
          Rooms
        </a>
        <a href="#" className="hover:text-yellow-400 transition">
          Services
        </a>
        <a href="#" className="hover:text-yellow-400 transition">
          About
        </a>
        <a href="#" className="hover:text-yellow-400 transition">
          Contact
        </a>
      </nav>
      <button
        onClick={handleAuthClick}
        className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition"
      >
        Sign In
      </button>
    </header>
  );
}

export default Header;
