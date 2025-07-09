import React, { useState } from "react";
// Import the specific category data from product.js
import { creatineProducts } from "./product"; // Adjust the path based on your file structure

const Creatine = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("popularity");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = creatineProducts
    .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      switch (sortOption) {
        case "priceLowHigh":
          return a.price - b.price;
        case "priceHighLow":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "latest":
          return b.id - a.id;
        default:
          return b.popularity - a.popularity;
      }
    });

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleWhatsAppContact = () => {
    if (!selectedProduct) return;
    const message = `Hello, I am interested in purchasing *${selectedProduct.name}*. Could you provide more details?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+94765794062&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };


  return (
    <div className="bg-black min-h-screen text-white py-10">
      <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
  <input
    type="text"
    placeholder="Search Creatine Products..."
    className="px-4 py-3 w-full md:w-1/2 bg-gray-900 text-white border border-red-600 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <select
    className="px-4 py-3 bg-gray-900 text-white border border-red-600 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)}
  >
    <option value="popularity">Popularity</option>
    <option value="rating">Average Rating</option>
    <option value="latest">Latest</option>
    <option value="priceLowHigh">Price: Low to High</option>
    <option value="priceHighLow">Price: High to Low</option>
  </select>
</div>


        <h2 className="text-4xl font-bold text-center mb-6 uppercase">
          Creatine ({filteredProducts.length})
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md p-4 text-center"
    >
      {/* Zoom container */}
      <div className="overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover rounded-md h-[200px] md:h-[240px] lg:h-[260px] xl:h-[280px] transform transition-transform duration-300 hover:scale-110"
        />
      </div>

      <h3 className="text-sm md:text-base font-semibold mt-4 text-white">{product.name}</h3>

      <div className="mt-auto">
        <button
          className="w-full bg-red-600 hover:bg-red-800 transition py-2 text-sm font-semibold rounded mt-4"
          onClick={() => openModal(product)}
        >
          View Product
        </button>
      </div>
    </div>
  ))}
</div>



        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
  <div className="bg-gray-950 border border-red-600 text-white rounded-xl shadow-lg p-6 max-w-md w-full mx-4">
    <div className="flex flex-col items-center">
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-full h-64 object-cover rounded-md border border-gray-800 mb-4"
      />
      <h2 className="text-2xl font-bold uppercase text-red-500 text-center">{selectedProduct.name}</h2>
      <p className="text-white text-sm text-center mt-2 mb-6">{selectedProduct.description}</p>

      <div className="w-full flex flex-col gap-3">
        <button
          onClick={handleWhatsAppContact}
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md transition"
        >
          Contact on WhatsApp
        </button>
        <button
          onClick={handleCloseModal}
          className="bg-white hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded-md transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>
)}


      </div>
    </div>
  );
};

export default Creatine;
