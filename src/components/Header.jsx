import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#4CAF50] text-white p-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Herbal Bliss 🌿</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-yellow-400">Home</a>
          <a href="#products" className="hover:text-yellow-400">Products</a>
          <a href="#benefits" className="hover:text-yellow-400">Benefits</a>
          <a href="#reviews" className="hover:text-yellow-400">Reviews</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
