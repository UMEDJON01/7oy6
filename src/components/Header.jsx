// src/components/Header.js
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-blue-600 text-2xl font-bold">C</div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700">
            Home
          </a>
          <a href="#" className="text-gray-700">
            About
          </a>
          <a href="#" className="text-gray-700">
            Products
          </a>
          <a href="#" className="text-gray-700">
            Cart
          </a>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-700">
            <i className="fas fa-phone-alt"></i>
          </button>
          <button className="text-gray-700 relative">
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
