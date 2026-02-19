import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Who We Are', path: '/about' },
    { name: 'Book a Call', path: '/book' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-black selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="container-custom mx-auto h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter uppercase">
            Legacy Scales
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-black/60 ${
                  location.pathname === link.path ? 'text-black' : 'text-black/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/book" className="btn-primary py-2 px-6">
              Start Scaling
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-black/5 overflow-hidden"
            >
              <div className="container-custom py-6 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-2xl font-medium tracking-tight ${
                      location.pathname === link.path ? 'text-black' : 'text-black/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container-custom mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter uppercase mb-6 block">
              Legacy Scales
            </Link>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed">
              We scale brands using AI-powered advertising and high-converting digital systems. 
              Built on performance, data, and scalable systems.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-widest text-xs text-white/40">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">Who We Are</Link></li>
              <li><Link to="/book" className="text-white/80 hover:text-white transition-colors">Book a Call</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-widest text-xs text-white/40">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="container-custom mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Legacy Scales. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Expand Your Legacy.</p>
        </div>
      </footer>
    </div>
  );
}
