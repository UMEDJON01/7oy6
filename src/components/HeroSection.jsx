// src/components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section className="container mx-auto p-8 flex flex-col md:flex-row items-center mt-10">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold mb-4">
          We are changing the way people shop
        </h1>
        <p className="text-gray-700 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <button className="btn btn-primary">OUR PRODUCTS</button>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
          alt="Hero"
          className="rounded-lg shadow-md w-96 h-96"
        />
      </div>
    </section>
  );
};

export default HeroSection;
