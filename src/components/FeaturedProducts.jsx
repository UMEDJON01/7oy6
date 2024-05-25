// src/components/FeaturedProducts.js
import React from "react";

const products = [
  {
    id: 1,
    name: "Avant-Garde Lamp",
    price: "$179.99",
    image:
      "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    name: "Coffee Table",
    price: "$179.99",
    image:
      "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Comfy Bed",
    price: "$129.99",
    image:
      "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="card bg-white shadow-md">
            <figure className="px-10 pt-10">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl h-80 w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
