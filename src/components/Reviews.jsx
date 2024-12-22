import React from 'react';

const Reviews = () => {
  const reviews = [
    { content: "The Aloe Vera plant I purchased is thriving! Great quality and fast delivery.", name: "Emily R." },
    { content: "I love the mint plant! It adds a fresh flavor to my teas and dishes.", name: "Jake P." },
    { content: "This product has reduced my stress and anxiety levels noticeably.", name: "Ann G." },
    { content: "I love that these products are natural and free of harmful chemicals.", name: "Mika Lim." },
  ];

  return (
    <section id="reviews" className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-800 mb-4">{review.content}</p>
            <p className="font-semibold text-green-600">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
