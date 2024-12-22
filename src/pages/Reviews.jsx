import { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newReview, setNewReview] = useState({
    content: "",
    name: "",
    rating: 0,
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        const data = await response.json();

        const fetchedReviews = data.results.map((user, index) => ({
          content: `I love that these products are natural and free of harmful chemicals. ${index % 2 === 0 ? "Aloe Vera Gel" : "Mint Leaves"}! They’ve improved my daily routine.`,
          name: `${user.name.first} ${user.name.last}`,
          img: user.picture.medium,
          rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1-5
        }));

        setReviews(fetchedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);

        // Fallback reviews
        setReviews([
          {
            content: "The Aloe Vera Gel has been a lifesaver for my skin. Highly recommend!",
            name: "Emily R.",
            img: "https://via.placeholder.com/64",
            rating: 5,
          },
          {
            content: "I love that these products are natural and free of harmful chemicals.",
            name: "Jake P.",
            img: "https://via.placeholder.com/64",
            rating: 4,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setNewReview((prevReview) => ({ ...prevReview, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.content && newReview.name && newReview.rating) {
      setReviews((prevReviews) => [
        ...prevReviews,
        { ...newReview, img: "https://via.placeholder.com/64" },
      ]);
      setNewReview({ content: "", name: "", rating: 0 });
    } else {
      alert("Please fill in all fields and select a rating.");
    }
  };

  return (
    <section id="reviews" className="py-16 px-6 bg-green-50">
      <h2 className="text-3xl font-semibold text-center mb-12 text-green-700">
        What Our Customers Say
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {loading ? (
          <p className="text-center text-gray-600">
            Fetching customer stories about our herbal products...
          </p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg flex items-center"
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-800 mb-4">{review.content}</p>
                <p className="font-semibold text-green-600">- {review.name}</p>
                <div className="text-yellow-400">
                  {"★".repeat(review.rating)}{" "}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="text-2xl font-semibold text-green-700 mb-6">
          Submit Your Review
        </h3>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Review</label>
            <textarea
              name="content"
              value={newReview.content}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Write your review here..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Rating</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={`w-10 h-10 text-lg ${
                    newReview.rating >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => handleRatingChange(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}

export default Reviews;
