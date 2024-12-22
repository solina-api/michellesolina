import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#4CAF50] text-white text-center py-6">
      <p>&copy; 2024 Herbal Bliss. All Rights Reserved.</p>
      <p>
        <a href="#contact" className="text-yellow-400 hover:text-yellow-500">Contact Us</a>
        {" | "}
        <a href="#privacy" className="text-yellow-400 hover:text-yellow-500">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
