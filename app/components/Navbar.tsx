'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'La Escuela', href: '/la-escuela' },
    { name: 'Formación', href: '/formacion' },
    { name: 'Vida Escolar', href: '/vida-escolar' },
    { name: 'Noticias', href: '/noticias' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-azul-oscuro/90 backdrop-blur-md border-b border-azul-electrico/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 bg-gradient-to-br from-azul-electrico to-azul-brillante rounded-lg flex items-center justify-center"
            >
              <Code2 className="w-6 h-6 text-white" />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">PROA</h1>
              <p className="text-xs text-azul-brillante">Proa Rebeca Guber</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <span className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-azul-electrico group-hover:w-full transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-azul-electrico/20 transition-colors duration-200"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block px-4 py-2 rounded-lg hover:bg-azul-electrico/20 transition-all duration-200"
                >
                  <span className="text-gray-300 hover:text-white font-medium">
                    {item.name}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
