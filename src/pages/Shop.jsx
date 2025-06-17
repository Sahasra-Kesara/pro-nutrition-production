import React, { useState } from "react";
import { 
  creatineProducts, wheyProducts, preWorkoutProducts, fatBurnerProducts, 
  lCarnitineProducts, claProducts, multiVitaminProducts, massGainersProducts 
} from "./product";

const categories = [
  { name: "All", products: [] },
  { name: "Creatine", products: creatineProducts },
  { name: "Whey Protein", products: wheyProducts },
  { name: "Pre-Workout", products: preWorkoutProducts },
  { name: "Fat Burner", products: fatBurnerProducts },
  { name: "L-Carnitine", products: lCarnitineProducts },
  { name: "CLA", products: claProducts },
  { name: "Multivitamins", products: multiVitaminProducts },
  { name: "Mass Gainers", products: massGainersProducts },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectedProducts = selectedCategory === "All" 
    ? [
        ...creatineProducts, ...wheyProducts, ...preWorkoutProducts, 
        ...fatBurnerProducts, ...lCarnitineProducts, ...claProducts, 
        ...multiVitaminProducts, ...massGainersProducts
      ]
    : categories.find(category => category.name === selectedCategory)?.products || [];

  const filteredProducts = selectedProducts
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Open Modal Function
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close Modal Function
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // WhatsApp Contact Function
  const contactOnWhatsApp = () => {
    if (!selectedProduct) return;
    const message = `Hello, I am interested in purchasing *${selectedProduct.name}*. Could you provide more details?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+94765794062&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
};


  return (
    <div className="bg-black min-h-screen text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-900 p-6 md:min-h-screen">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        
        {/* Category Selection */}
        <h3 className="font-semibold">Categories</h3>
        <ul className="space-y-2 mt-2">
          {categories.map((category) => (
            <li 
              key={category.name} 
              className={`cursor-pointer p-2 rounded-md hover:bg-gray-700 ${selectedCategory === category.name ? "bg-red-700" : ""}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <h3 className="font-semibold mt-4">Search</h3>
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 rounded-md mt-2 bg-gray-800 border border-gray-600 text-white"
        />
      </aside>

      {/* Product Grid */}
      <div className="flex-1 p-2 grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-slate-900 p-4 transform hover:scale-105 transition flex flex-col items-center text-center 
                         shadow-lg hover:shadow-xl"
              style={{ height: "360px" }} // Adjusted card height
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover"
                style={{ height: "200px", width: "110%" }} // Adjusted image height
              />
              <h3 className="text-sm md:text-l font-semibold font-semibold mt-4 text-white">{product.name}</h3>
              {/* <p className="text-sm sm:text-lg text-red-400">${product.price.toFixed(2)}</p> */}
              <button 
                className="mt-auto w-full bg-red-800 py-2 font-bold hover:bg-red-950 transition 
                           text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => openModal(product)} // Open modal with the clicked product
              >
                View Product
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-red-400">No products found</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-slate-900 p-6 rounded-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover mb-4"
            />
            {/* <p className="text-lg text-red-400">${selectedProduct.price.toFixed(2)}</p> */}
            <p className="text-gray-300 mt-4">{selectedProduct.description}</p>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-red-800 py-2 px-4 font-bold text-white hover:bg-red-950 transition"
                onClick={contactOnWhatsApp}
              >
                Contact on WhatsApp
              </button>
              <button
                className="bg-gray-700 py-2 px-4 font-bold text-white hover:bg-gray-800 transition"
                onClick={closeModal}
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

export default Shop;
