import { useState } from "react";

function Products() {
  const [successMessage, setSuccessMessage] = useState(""); // state for success message

  const herbalProducts = [
    {
      id: 1,
      name: "Lagundi",
      description: "Used for coughs, colds, an asthma",
      price: "₱60",
      image: "lagundi.jpg?text=Herbal+Tea",
    },
    {
      id: 2,
      name: "Aloe Vera Gel",
      description: "Treats burns, wounds, and skin irritations",
      price: "₱99 ",
      image: "aloe powder.jpg?text=Aloe+Vera+Gel",
    },
    {
      id: 3,
      name: "Mint",
      description: "Eases headaches, and cold symptoms",
      price: "₱55",
      image: "mint.jpg?text=Mint",
    },
    {
      id: 4,
      name: "Lavender",
      description: "Pure lavender essential oil to calm your senses and promote better sleep.",
      price: "₱72",
      image: "lavender powder.jpg?text=Lavender",
    },
    {
      id: 5,
      name: "Oregano",
      description: "Treats respiratory issues and has antibacterial properties",
      price: "₱66",
      image: "oregano.jpg?text=Mint",
    },
    {
      id: 6,
      name: "Ginger",
      description: "Boost your health with our natural herbal tonic, rich in essential nutrients.",
      price: "₱87",
      image: "ginger.jpg?text=Ginger",
    },
  ];

  // Function to simulate an API call and add item to the cart
  const handleAddToCart = (productName) => {
    // Simulate an API call with a timeout
    setTimeout(() => {
      setSuccessMessage(`Successfully added ${productName} to cart!`);
      
      // Clear the message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }, 500); // simulate API delay
  };

  return (
    <section id="products" className="bg-green-50 py-5 ">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Our Herbal Products
        </h2>

        {/* Success Message */}
        {successMessage && (
          <div className="text-center text-green-600 text-xl mb-6">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {herbalProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4 transform transition-transform hover:scale-105 duration-300"
              />
              {/* Product Details */}
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-700 text-base mb-4">{product.description}</p>
              <div className="text-3xl font-bold text-green-800 mb-4">
                {product.price}
              </div>
              <button
                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                onClick={() => handleAddToCart(product.name)} // Trigger add to cart action
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
