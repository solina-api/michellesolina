function Benefits() {
  const benefits = [
    { title: 'Boost Immunity', description: 'Herbal plants are packed with natural nutrients that strengthen your immune system.' },
    { title: 'Enhance Mental Clarity', description: 'Experience better focus and reduced stress with calming herbal remedies.' },
    { title: 'Rich in Nutrients', description: 'Many herbs, like parsley and basil, are rich in vitamins, minerals, and antioxidants.' },
    { title: 'Anti-Inflammatory', description: 'Turmeric, ginger, and aloe vera help reduce inflammation and pain.' },
    { title: 'Natural Remedies', description: 'Used in traditional medicine to treat ailments like colds, headaches, and wounds.' },
    { title: 'Stress Relief', description: 'Herbs like chamomile and lavender promote relaxation and reduce anxiety.' },
  ];

  return (
    <>
      <section id="benefits" className="bg-[#E6F5E1] py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Benefits of Herbal Plants</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <form className="grid gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Benefits;
