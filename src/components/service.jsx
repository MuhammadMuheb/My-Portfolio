import React from 'react';

const Service = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My Services
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          I offer comprehensive web development solutions tailored to meet your
          specific needs and goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Responsive Web Design */}
          <div className="service-card bg-white p-8 rounded-lg shadow-md">
            <div
              className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6"
            >
              <i className="ri-responsive-line ri-xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Responsive Web Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I create websites that look and function beautifully across all
              devices, from desktop computers to smartphones. My responsive
              designs ensure optimal user experience regardless of screen size.
            </p>
          </div>

          {/* Front-End Development */}
          <div className=" service-card bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6">
              <i className="ri-code-s-slash-line ri-xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Front-End Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Using the latest technologies like HTML5, CSS3, and JavaScript
              frameworks, I build interactive and dynamic user interfaces that
              engage visitors and provide seamless navigation experiences.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="service-card bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6">
              <i className="ri-layout-4-line ri-xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              UI/UX Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I design intuitive user interfaces with a focus on user
              experience, ensuring that your website not only looks great but
              also provides a logical flow that guides visitors toward their
              goals.
            </p>
          </div>

          {/* Website Optimization */}
          <div className="service-card bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6">
              <i className="ri-speed-line ri-xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Website Optimization
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I optimize websites for speed and performance, implementing best
              practices for faster loading times, improved SEO rankings, and
              enhanced user experience across all browsers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
