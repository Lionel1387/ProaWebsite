'use client';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Code2, Users, Award, BookOpen, Rocket, Target } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Code2,
      title: 'Desarrollo de Software',
      description: 'Aprendizaje práctico de lenguajes modernos como JavaScript, Python, Java y más.',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Metodologías ágiles y colaborativas para desarrollar proyectos reales.',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      icon: Award,
      title: 'Certificación Oficial',
      description: 'Título de Bachiller con orientación en Desarrollo de Software reconocido oficialmente.',
      gradient: 'from-green-600 to-emerald-500'
    },
    {
      icon: BookOpen,
      title: 'Aprendizaje Continuo',
      description: 'Actualización constante con las últimas tecnologías y tendencias del mercado.',
      gradient: 'from-orange-600 to-red-500'
    },
    {
      icon: Rocket,
      title: 'Proyectos Innovadores',
      description: 'Desarrollo de aplicaciones web, móviles y sistemas de gestión empresarial.',
      gradient: 'from-indigo-600 to-blue-500'
    },
    {
      icon: Target,
      title: 'Orientación Profesional',
      description: 'Preparación para insertarse en el mercado laboral tecnológico.',
      gradient: 'from-teal-600 to-cyan-500'
    }
  ];

  const stats = [
    { number: '95%', label: 'Egresados empleados' },
    { number: '50+', label: 'Proyectos desarrollados' },
    { number: '200+', label: 'Estudiantes activos' },
    { number: '15+', label: 'Empresas socias' }
  ];

  const technologies = [
    'JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 
    'MongoDB', 'SQL', 'Git', 'Docker', 'AWS', 'Vue.js', 'Java'
  ];

  return (
    <div className="min-h-screen bg-azul-oscuro">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Sección de Presentación */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-tecnologico opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bienvenidos al <span className="texto-degradado">Futuro Tecnológico</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              En la Escuela Técnica PROA formamos los próximos líderes del mundo digital. 
              Nuestro programa intensivo de Desarrollo de Software combina teoría avanzada 
              con práctica constante, preparándote para los desafíos reales de la industria.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold texto-degradado mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="tarjeta-tecnologica p-8 rounded-2xl h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section className="py-20 bg-gradient-to-b from-transparent to-azul-electrico/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tecnologías que <span className="texto-degradado">Dominarás</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aprende las herramientas y lenguajes más demandados por el mercado laboral tecnológico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="codigo-background px-6 py-3 rounded-lg border border-azul-electrico/30 hover:border-azul-electrico/60 transition-all duration-300"
              >
                <code className="text-azul-brillante font-mono text-sm">{tech}</code>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sección de Proyectos Destacados */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proyectos <span className="texto-degradado">Destacados</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conoce algunos de los proyectos desarrollados por nuestros estudiantes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Plataforma completa de comercio electrónico con carrito de compras y pasarela de pago.',
                tech: ['React', 'Node.js', 'MongoDB'],
                gradient: 'from-blue-600 to-purple-600'
              },
              {
                title: 'Task Management App',
                description: 'Aplicación web para gestión de tareas con colaboración en tiempo real.',
                tech: ['Vue.js', 'Express', 'PostgreSQL'],
                gradient: 'from-green-600 to-teal-600'
              },
              {
                title: 'AI Chat Assistant',
                description: 'Asistente virtual con inteligencia artificial para atención al cliente.',
                tech: ['Python', 'TensorFlow', 'FastAPI'],
                gradient: 'from-orange-600 to-red-600'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="tarjeta-tecnologica rounded-2xl overflow-hidden h-full">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:texto-degradado transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="codigo-background px-3 py-1 rounded text-xs text-azul-brillante"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ¿Listo para <span className="texto-degradado">Transformar</span> tu Futuro?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Únete a la próxima generación de desarrolladores de software. 
              Comienza tu viaje en el mundo tecnológico con nosotros.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="boton-tecnologico text-lg px-8 py-4"
            >
              <span className="flex items-center space-x-2">
                <span>Postulate Ahora</span>
                <Rocket className="w-5 h-5" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
