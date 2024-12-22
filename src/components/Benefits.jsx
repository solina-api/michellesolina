import React from 'react';

const Benefits = () => {
  const benefits = [
    { title: 'Boost Immunity', description: 'Herbal plants are packed with natural nutrients that strengthen your immune system.' },
    { title: 'Enhance Mental Clarity', description: 'Experience better focus and reduced stress with calming herbal remedies.' },
    { title: 'Rich in Nutrients', description: 'Many herbs, like parsley and basil, are rich in vitamins, minerals, and antioxidants.' },
    { title: 'Anti-Inflammatory', description: 'Turmeric, ginger, and aloe vera help reduce inflammation and pain.' },
    { title: 'Natural Remedies', description: 'Used in traditional medicine to treat ailments like colds, headaches, and wounds.' },
    { title: 'Stress Relief', description: 'Herbs like chamomile and lavender promote relaxation and reduce anxiety.' },
  ];

  return (
    <section id="benefits" className="bg-[#E6F5E1] py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">Benefits of Herbal Plants</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {benefits.map((benefit, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
