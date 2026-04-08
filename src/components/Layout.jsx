
File 9: src/components/Layout.jsx
Main page → "Add file" → "Create new file"
Filename: src/components/Layout.jsx
Copy-paste:
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/membership", label: "Membership" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_consultants-hub-1/artifacts/419umebr_image__2_-removebg-preview.png"
              alt="GECA Logo"
              className="h-14 sm:h-16 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium ${
                  isActive(link.path) ? "text-blue-500" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary px-5 py-2.5 rounded-full text-sm font-medium">
              Join GECA
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-3 px-4 text-base font-medium text-slate-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="footer-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_consultants-hub-1/artifacts/l8m93qe1_13%20X%2019%20Card%20Actual%20Size%20GECA%20Logo%20.jpg.jpeg"
              alt="GECA Logo"
              className="h-14 w-auto rounded-lg mb-6"
            />
            <p className="text-slate-300 text-sm mb-6 max-w-md">
              Global Education Consultants Association - Uniting overseas education consultants in India.
            </p>
            <p className="text-slate-300 text-sm">
              📍 #302, Surya Castle, Opposite Mini Shilparamam, Uppal, Hyderabad, Telangana 500039
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-300 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/membership" className="text-slate-300 hover:text-white text-sm">Membership</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>📧 info@geca.org</li>
              <li>📧 gecaindia@gmail.com</li>
              <li>🌐 www.geca.org</li>
              <li>📞 Surender Varma: +91-9246580966</li>
              <li>📞 Dr. Swamy Narayana: +91-9849520577</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">© 2025 Global Education Consultants Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
};
