'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code2, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    escuela: [
      { name: 'Nosotros', href: '/la-escuela' },
      { name: 'Historia', href: '/la-escuela#historia' },
      { name: 'Equipo', href: '/la-escuela#equipo' },
      { name: 'Instalaciones', href: '/la-escuela#instalaciones' },
    ],
    formacion: [
      { name: 'Bachiller en Software', href: '/formacion' },
      { name: 'Plan de Estudios', href: '/formacion#plan' },
      { name: 'Proyectos', href: '/formacion#proyectos' },
      { name: 'Egresados', href: '/formacion#egresados' },
    ],
    vidaEscolar: [
      { name: 'Eventos', href: '/vida-escolar' },
      { name: 'Actividades', href: '/vida-escolar#actividades' },
      { name: 'Convivencia', href: '/vida-escolar#convivencia' },
      { name: 'Tutorías', href: '/vida-escolar#tutorias' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-azul-oscuro border-t border-azul-electrico/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-gradient-to-br from-azul-electrico to-azul-brillante rounded-lg flex items-center justify-center"
              >
                <Code2 className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white">PROA</h3>
                <p className="text-sm text-azul-brillante">Proa Rebeca Guber</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Formando los desarrolladores de software del futuro con educación técnica de excelencia. 
              Bachiller con orientación en Desarrollo de Software.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-azul-electrico" />
                <span className="text-sm">Agustín Garzón 1221, Barrio San Vicente</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-azul-electrico" />
                <span className="text-sm">Córdoba, Argentina</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-azul-electrico" />
                <span className="text-sm">info@escuelaproa.edu.ar</span>
              </div>
            </div>
          </motion.div>

          {/* Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">La Escuela</h4>
            <ul className="space-y-2">
              {footerLinks.escuela.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-azul-brillante transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Formación</h4>
            <ul className="space-y-2">
              {footerLinks.formacion.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-azul-brillante transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Vida Escolar</h4>
            <ul className="space-y-2">
              {footerLinks.vidaEscolar.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-azul-brillante transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-azul-electrico/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Proa Rebeca Guber. Todos los derechos reservados.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-azul-electrico/20 rounded-lg flex items-center justify-center hover:bg-azul-electrico/30 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-azul-brillante" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
