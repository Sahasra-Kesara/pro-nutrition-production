import React from "react";
import BestSellers from "./BestSellers";

const Home = () => {
  return (
    <>
      <section
        className="w-full flex items-center justify-center min-h-screen overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwf8ifbzs/image/upload/v1741281870/pro_nutritions_abanhk.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-bold uppercase tracking-wide">
            Power Up Your Body
          </h1>
          <p className="mb-6 text-lg max-w-2xl mx-auto font-bold uppercase tracking-wide">
            Discover high-quality supplements to fuel your workouts and boost your energy.
          </p>

          <a
            href="/shop"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 animate-pulse"
          >
            Shop Now
          </a>
        </div>
      </section>

      <BestSellers />
    </>
  );
};

export default Home;
