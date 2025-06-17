import React, { useState } from "react";

const bestSellers = [
  { id: 1, name: "Kevin Levrone Gold Lean Mass", price: 54.99, image: "https://cdn.nutrabay.com/wp-content/uploads/2023/04/NB-KEV-1008-01-01.jpg", rating: 4.8, popularity: 95 },
  { id: 2, name: "C4", price: 29.99, image: "https://th.bing.com/th/id/R.d13efe8e5733e6fca1907e12d7ad5ffa?rik=os2coPrzbzGpMw&pid=ImgRaw&r=0", rating: 4.6, popularity: 85 },
  { id: 3, name: "Lipo 6", price: 29.99, image: "https://th.bing.com/th/id/R.0f1da6639be578767ba7a9cb7989568e?rik=%2bRpHnp4AGLcepA&pid=ImgRaw&r=0", rating: 4.5, popularity: 85 },
  { id: 4, name: "Kevin Levrone Creatine", price: 49.99, image: "https://drnutrition.com/storage/media/lROHCmiGVn53zrI90YqDtpZTWAGu3KVjo0tBgQ6W.jpg", rating: 4.8, popularity: 95 },
];

const BestSellers = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const contactOnWhatsApp = () => {
    if (!selectedProduct) return;
    const message = `Hello, I am interested in purchasing *${selectedProduct.name}*. Could you provide more details?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+94765794062&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
};


  return (
    <div className="bg-black min-h-screen text-white py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 uppercase">Best Sellers</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
  {bestSellers.map((product) => (
    <div
      key={product.id}
      className="bg-slate-900 p-2 md:p-4 shadow-lg flex flex-col items-center text-center"
      style={{ height: "360px", maxWidth: "100%" }} // Smaller card height in mobile
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-cover"
        style={{ height: "220px" }} // Smaller image in mobile
      />
      <h3 className="text-sm md:text-lg font-semibold mt-2 text-white">{product.name}</h3>
      {/* <p className="text-xs md:text-lg text-red-400">${product.price.toFixed(2)}</p> */}
      <button
        onClick={() => openModal(product)}
        className="mt-auto w-full bg-red-800 py-1 md:py-2 text-xs md:text-base text-white font-bold hover:bg-red-950 transition"
      >
        View Product
      </button>
    </div>
    
  ))}
</div>


        {/* Find More Button */}
        <div className="flex justify-center mt-8 mb-10">
          <a href="/shop" className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 flex items-center justify-center animate-pulse">
            Find More Products
          </a>
        </div>
      </div>

      {/* Left-Aligned Mobile-Optimized Modal */}
{selectedProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-start p-4 mb-10">
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
{/* Video Background Section */}
<section className="relative w-full h-[400px] flex items-center justify-center">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source
      src="https://res.cloudinary.com/dwf8ifbzs/video/upload/v1741417764/Pro_Nutrition_Video_gogxnr.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-70"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4">
    <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl uppercase tracking-wide">
      The Science of Nutrition
    </h2>
    <p className="mb-6 text-lg max-w-2xl mx-auto font-semibold uppercase tracking-wide">
      Experience the best in sports nutrition with our expertly formulated products.
    </p>
  </div>
</section>
    </div>
  );
};

export default BestSellers;
