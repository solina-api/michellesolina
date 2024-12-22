import {Outlet } from "react-router";

function MainLayout () {
  return (
    <div>
    <header className="bg-[#4CAF50] text-white p-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Herbal Bliss 🌿</h1>
        <ul className="hidden md:flex space-x-6">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/products">Products</a>
            </li>
            <li>
                <a href="/reviews">Reviews</a>        
            </li>
            <li>
                <a href="/benefits">Benefits</a>        
            </li>
        </ul>
      </div>
    </header>

    <main>
        <Outlet />
    </main>

    <footer id="contact" className="bg-[#4CAF50] text-white text-center py-6">
      <p>&copy; 2024 Herbal Bliss. All Rights Reserved.</p>
      <p>
        <a href="#contact" className="text-yellow-400 hover:text-yellow-500">Contact Us</a>
        {" | "}
        <a href="#privacy" className="text-yellow-400 hover:text-yellow-500">Privacy Policy</a>
      </p>
    </footer>
    </div>
  );
};

export default MainLayout;
