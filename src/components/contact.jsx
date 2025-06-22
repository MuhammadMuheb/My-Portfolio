import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="bg-blue-600 text-white p-8 md:w-2/7">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="mb-8">
                Feel free to reach out to me using the form or contact details below.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center mt-1">
                    <i className="ri-mail-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-blue-100">muhebriaz2003@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center mt-1">
                    <i className="ri-phone-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-blue-100">+92 340 871-5021</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center mt-1">
                    <i className="ri-map-pin-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-blue-100">Azeempura Shah Faisal Colony, Shah Faisal Town </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300">
                    <i className="ri-linkedin-fill ri-lg"></i>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-900 transition-colors duration-300">
                    <i className="ri-github-fill ri-lg"></i>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded-full hover:bg-blue-500 transition-colors duration-300">
                    <i className="ri-twitter-fill ri-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:w-3/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-blue-600 bg-white text-gray-800"
                    placeholder="Your Name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-blue-600 bg-white text-gray-800"
                    placeholder="Your Email"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-blue-600 bg-white text-gray-800"
                    placeholder="Subject"
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-blue-600 bg-white text-gray-800"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-8 py-3 rounded font-medium transition-all duration-300 hover:bg-blue-700"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin mr-2 w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}