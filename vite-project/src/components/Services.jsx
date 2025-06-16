import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and high-performance web applications using modern technologies like React, Node.js, and more.',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces and experiences that align with user needs and business goals.',
    },
    {
      title: 'API Integration',
      description: 'Integrating third-party APIs, building RESTful services, and ensuring seamless data flow.',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support, performance optimization, and quick resolution of technical issues.',
    },
  ];

  return (
    <section className="p-6 md:p-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Services</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-purple-600">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
