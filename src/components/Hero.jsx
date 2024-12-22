import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-[url('herbs.jpg')] bg-cover bg-center text-white text-center h-screen w-full py-36 mt-10"
    >

      <h2 className="text-5xl font-extrabold mb-4">Nature's Healing Wonders</h2>
      <p className="text-lg mb-8">Discover the power of herbal plants for a healthier lifestyle.</p>
      <a
        href="#products"
        className="inline-block px-8 py-3 bg-yellow-400 text-green-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
      >
        Shop Now
      </a>
    </section>
  );
};

export default Hero;
