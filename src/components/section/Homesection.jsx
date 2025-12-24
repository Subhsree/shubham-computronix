import React from "react";

function Homesection() {
  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Trust text */}
        <p className="text-sm md:text-base text-gray-600 mb-4">
          ⭐ Trusted by thousands of customers for <span className="font-semibold">33+ years</span>
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Premium Computer
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          Accessories & Cables
        </h1>

        {/* Description */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base md:text-lg">
          Your one-stop destination for high-quality computer peripherals, cables,
          and repair services in Nehru Place, Delhi.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+911234567890"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Browse Catalogue
          </a>

          <a
            href="tel:+911234567890"
            className="border border-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}

export default Homesection;
