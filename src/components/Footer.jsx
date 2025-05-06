function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 relative">
            About Us
            <span className="block w-12 h-1 bg-yellow-400 absolute bottom-[-8px]"></span>
          </h3>
          <p>
            LuxuryStays is a premier hotel chain dedicated to providing
            exceptional hospitality experiences with luxurious amenities and
            personalized service.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 relative">
            Quick Links
            <span className="block w-12 h-1 bg-yellow-400 absolute bottom-[-8px]"></span>
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Rooms & Suites
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Dining
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Spa & Wellness
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Special Offers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 relative">
            Contact Us
            <span className="block w-12 h-1 bg-yellow-400 absolute bottom-[-8px]"></span>
          </h3>
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="text-yellow-400 mr-2">📍</span> 123 Luxury
              Avenue, Resort City
            </p>
            <p className="flex items-center">
              <span className="text-yellow-400 mr-2">📞</span> +1 (555) 123-4567
            </p>
            <p className="flex items-center">
              <span className="text-yellow-400 mr-2">✉️</span>{" "}
              info@luxurystays.com
            </p>
          </div>
          <div className="flex mt-6 space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 transition"
            >
              fb
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 transition"
            >
              tw
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 transition"
            >
              ig
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>© 2025 LuxuryStays Hotel. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
