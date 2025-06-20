import React, { useState } from "react";
import { claProducts } from "./product"; // Adjust the path based on your file structure

const Cla = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("popularity");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = claProducts
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
          CLA ({filteredProducts.length})
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

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-900 p-6 rounded-lg text-white max-w-md w-full text-center">
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover my-4"
            />
            {/* <p className="text-lg text-red-400">Price: ${selectedProduct.price.toFixed(2)}</p> */}
            <p className="mt-2">{selectedProduct.description}</p>
            <div className="mt-4 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppContact}
                className="bg-green-600 w-full py-2 font-bold hover:bg-green-700 transition"
              >
                Contact on WhatsApp
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-700 w-full py-2 font-bold hover:bg-gray-800 transition"
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

export default Cla;
