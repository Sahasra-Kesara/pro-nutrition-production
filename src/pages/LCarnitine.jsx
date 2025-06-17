import React, { useState } from "react";
// Import the specific category data from product.js
import { lCarnitineProducts } from "./product"; // Adjust the path based on your file structure

const LCarnitine = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("popularity");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = lCarnitineProducts
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
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const contactOnWhatsApp = () => {
    if (!selectedProduct) return;
    const message = `Hello, I am interested in purchasing *${selectedProduct.name}*. Could you provide more details?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+94765794062&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
};


  return (
    <div className="bg-black min-h-screen text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-black p-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 w-full md:w-1/3 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-4 py-2 mt-2 md:mt-0 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
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
          L-Carnitine ({filteredProducts.length})
        </h2>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="bg-slate-900 p-3 md:p-4 transform hover:scale-105 transition flex flex-col items-center text-center"
      style={{ height: "330px", maxWidth: "100%" }} // Smaller card height in mobile
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-cover"
        style={{ height: "200px", width: "100%" }} // Smaller image in mobile
      />
      <h3 className="text-sm md:text-l font-semibold mt-2 md:mt-4">{product.name}</h3> 
      {/* <p className="text-xs md:text-lg text-red-400">${product.price.toFixed(2)}</p>  */}
      <button
        className="mt-auto w-full bg-red-800 py-1 md:py-2 text-xs md:text-base font-bold hover:bg-red-950 transition"
        onClick={() => openModal(product)} // Open modal on click
      >
        View Product
      </button>
    </div>
  ))}
</div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-start p-4">
    <div className="bg-gray-900 p-5 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md text-center ml-4 mt-10">
      <img 
        src={selectedProduct.image} 
        alt={selectedProduct.name} 
        className="w-full max-h-48 object-cover rounded-md mb-3" 
      />
      <h2 className="text-lg sm:text-xl font-bold">{selectedProduct.name}</h2>
      {/* <p className="text-red-400 text-md sm:text-lg">${selectedProduct.price.toFixed(2)}</p> */}
      <p className="text-gray-300 mt-2 text-sm sm:text-base">
        ⭐ {selectedProduct.rating} | Popularity: {selectedProduct.popularity}%
      </p>

      <div className="mt-4 flex flex-col gap-3">
        <button 
          onClick={contactOnWhatsApp} 
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white font-bold w-full"
        >
          Contact on WhatsApp
        </button>
        <button 
          onClick={closeModal} 
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-white font-bold w-full"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default LCarnitine;
