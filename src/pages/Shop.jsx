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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectedProducts = selectedCategory === "All"
    ? [
        ...creatineProducts, ...wheyProducts, ...preWorkoutProducts, 
        ...fatBurnerProducts, ...lCarnitineProducts, ...claProducts, 
        ...multiVitaminProducts, ...massGainersProducts
      ]
    : categories.find(category => category.name === selectedCategory)?.products || [];

  const filteredProducts = selectedProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const handleWhatsAppContact = () => {
    if (!selectedProduct) return;
    const message = `Hello, I am interested in purchasing *${selectedProduct.name}*. Could you provide more details?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+94765794062&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-950 p-6 space-y-6">
        <h2 className="text-2xl font-bold tracking-wide text-red-500">Filters</h2>

        <div>
          <h3 className="text-lg font-semibold text-gray-300">Categories</h3>
          <ul className="space-y-2 mt-3">
            {categories.map((category) => (
              <li
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`cursor-pointer px-4 py-2 rounded-md border-l-4 transition-all duration-150 ${
                  selectedCategory === category.name
                    ? "bg-red-700 border-red-500 text-white"
                    : "hover:bg-gray-800 border-transparent text-gray-300"
                }`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300 mt-4">Search</h3>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder:text-gray-400"
          />
        </div>
      </aside>

      {/* Product Grid */}
      <div className="flex-1 p-4 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md p-4 text-center"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover rounded-md h-[200px] md:h-[240px] lg:h-[260px] xl:h-[280px] transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-sm md:text-base font-semibold mt-4 text-white">
                {product.name}
              </h3>
              <div className="mt-auto">
                <button
                  className="w-full bg-red-600 hover:bg-red-800 transition py-2 text-sm font-semibold rounded mt-4"
                  onClick={() => openModal(product)}
                >
                  View Product
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-red-400">No products found</p>
        )}
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
  );
};

export default Shop;