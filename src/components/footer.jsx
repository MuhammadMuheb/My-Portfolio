import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 font-['Poppins']">
              M. Muheb Riaz
            </h3>
            <p className="text-gray-400 max-w-xs">
              Transforming your vision into engaging and elegant web experiences.
            </p>
            <div className="mt-4 flex space-x-4">
              {['linkedin-fill', 'github-fill', 'twitter-fill', 'instagram-fill'].map(icon => (
                <a
                  key={icon}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`ri-${icon} ri-lg`}></i>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line"></i>
                </div>
                <span className="text-gray-400">muhebriaz2003@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <span className="text-gray-400">+92 340 871-5021</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span className="text-gray-400">Azeempura Shah Faisal Colony, Shah Faisal Town</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 M.Muheb Riaz . All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      
    </footer>
    
  );
};

export default Footer;