import React from 'react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-playfair text-2xl font-bold mb-6">
              Musanna Doc <span className="text-primary">Services</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for all government and travel documentation needs. Fast, secure, and reliable services since 2022.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded bg-gray-700 hover:bg-primary transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 rounded bg-gray-700 hover:bg-primary transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 rounded bg-gray-700 hover:bg-primary transition-colors cursor-pointer"></div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">Passport Application</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">PAN Card Services</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">Birth Certificates</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">Flight Booking</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">ITR Filing</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">GST Registration</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">Home</a></li>
              <li><a href="#about" className="hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">About Us</a></li>
              <li><a href="#process" className="hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">Contact Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest updates and offers.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm focus:border-primary outline-none text-white"
              />
              <button className="bg-primary text-secondary font-bold py-2 rounded hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Musanna Doc Services. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-secondary rounded-full shadow-xl flex items-center justify-center font-bold text-xl hover:-translate-y-1 transition-transform z-40"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};
