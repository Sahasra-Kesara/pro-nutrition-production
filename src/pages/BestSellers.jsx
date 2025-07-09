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
    <div className="bg-black min-h-screen text-white py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 uppercase">Best Sellers</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {bestSellers.map((product) => (
    <div
      key={product.id}
      className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md p-4 text-center"
      style={{ height: "auto", maxWidth: "100%" }}
    >
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



        {/* Find More Button */}
        <div className="flex justify-center mt-8 mb-10">
          <a href="/shop" className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 flex items-center justify-center animate-pulse">
            Find More Products
          </a>
        </div>
      </div>

      {/* Left-Aligned Mobile-Optimized Modal */}
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
