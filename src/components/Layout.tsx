import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebookF, FaArrowUp } from 'react-icons/fa';

// Import images
import logoImage from '../assets/images/logo.jpg';

interface LayoutProps {
  children: React.ReactNode;
}

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Scroll to top button component
const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-50"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Removed unused scroll functionality

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/team', label: 'Team' },
    { path: '/programs', label: 'Programs' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <ScrollToTop />
      <ScrollToTopButton />
      
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 bg-black border-b border-gray-800`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Hands of Help Logo" 
                  className="h-12 w-12 rounded-full object-cover border-2 border-white/10 group-hover:border-blue-500 transition-all duration-300 transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="gradient-text font-bold text-xl leading-tight">Hands of Help</span>
                <span className="text-xs text-gray-400 font-medium">Children's Organization</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 px-1 font-medium transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'text-white font-semibold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-modern rounded-full"></div>
                  )}
                </Link>
              ))}
              <Link
                to="/donate"
                className="btn btn-primary"
              >
                Donate Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-full hover:bg-white/10 transition-colors duration-300 text-white"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden nav-dark border-t border-white/10 animate-fade-in-up">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'text-transparent bg-gradient-modern bg-clip-text bg-white/10' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/donate"
                className="block mx-4 mt-6 bg-gradient-orange text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg glow-yellow"
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow pt-24 bg-black">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-gray-300 py-12">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img 
                    src="/gallery/logo.jpg" 
                    alt="Hands of Help Logo" 
                    className="h-14 w-14 rounded-full object-cover border-2 border-white/10 hover:border-blue-500 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-white">Hands of Help</span>
                  <span className="text-sm text-slate-400">Children's Organization</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                "Touch mind, heart, and life." - Unlocking the potential of children and young adults 
                in informal settlements through transformative education, digital empowerment, and 
                community-driven support.
              </p>
              <div className="flex space-x-4">
                <Link 
                  to="/donate" 
                  className="btn-modern bg-gradient-orange text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 glow-yellow"
                >
                  Support Our Mission
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-6 gradient-text-orange">Quick Links</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-6 gradient-text-orange">Contact Info</h3>
              <div className="text-gray-400 space-y-3">
                <p className="flex items-start">
                  <span className="font-medium text-white">Address:</span>
                  <span className="ml-2">Baba Dogo, Ruaraka<br />Nairobi, Kenya</span>
                </p>
                <p><span className="font-medium text-white">Phone:</span> +254 739 109 360</p>
                <p><span className="font-medium text-white">Email:</span> handsofhelpchildrenorg@gmail.com</p>
                
                <div className="pt-2">
                  <p className="font-medium text-white mb-2">Follow Us:</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/company/hands-of-help-children-s-organization/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#0077B5] hover:bg-white/10 p-2 rounded-full transition-colors duration-300"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/hhcokenya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#E1306C] hover:bg-white/10 p-2 rounded-full transition-colors duration-300"
                      aria-label="Instagram"
                      title="Instagram"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://x.com/hhcokenya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors duration-300"
                      aria-label="X (Twitter)"
                      title="X (Twitter)"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.facebook.com/hhcokenya/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#1877F2] hover:bg-white/10 p-2 rounded-full transition-colors duration-300"
                      aria-label="Facebook"
                      title="Facebook"
                    >
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hands of Help Children's Organization. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;