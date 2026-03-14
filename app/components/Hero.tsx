'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Zap, Cpu } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showButtons?: boolean;
  backgroundImage?: string;
}

const Hero = ({
  title = "ESCUELA TÉCNICA PROA",
  subtitle = "Bachiller con Orientación en Desarrollo de Software",
  description = "Formamos los desarrolladores del futuro con educación técnica de excelencia. Programa Escuelas ProA en Barrio San Vicente, Córdoba.",
  showButtons = true,
  backgroundImage
}: HeroProps) => {
  const floatingIcons = [
    { icon: Code2, delay: 0, x: -100, y: -50 },
    { icon: Terminal, delay: 0.5, x: 100, y: -80 },
    { icon: Zap, delay: 1, x: -80, y: 60 },
    { icon: Cpu, delay: 1.5, x: 120, y: 40 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con gradiente animado */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Grid tecnológico de fondo */}
      <div className="absolute inset-0 grid-tecnologico opacity-20" />
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              x: item.x,
              y: item.y,
            }}
            animate={{
              x: [item.x, item.x + 20, item.x],
              y: [item.y, item.y - 20, item.y],
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <item.icon className="w-8 h-8 text-azul-brillante/20" />
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="bg-azul-electrico/20 backdrop-blur-sm border border-azul-electrico/30 rounded-full px-4 py-2">
              <span className="text-azul-brillante text-sm font-semibold">
                🚀 Programa Escuelas ProA
              </span>
            </div>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            <span className="block mb-2">{title}</span>
            <span className="texto-degradado text-3xl md:text-5xl">
              {subtitle}
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Botones */}
          {showButtons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="boton-tecnologico group"
              >
                <span className="flex items-center space-x-2">
                  <span>Conocer Más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-azul-electrico text-azul-brillante rounded-lg font-semibold hover:bg-azul-electrico/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center space-x-2">
                  <Code2 className="w-4 h-4" />
                  <span>Ver Proyectos</span>
                </span>
              </motion.button>
            </motion.div>
          )}

          {/* Características destacadas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { icon: Code2, title: 'Programación', desc: 'Aprendizaje práctico de lenguajes modernos' },
              { icon: Terminal, title: 'Tecnología', desc: 'Herramientas y metodologías actuales' },
              { icon: Zap, title: 'Innovación', desc: 'Proyectos reales y creatividad' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="tarjeta-tecnologica p-6 rounded-xl"
              >
                <feature.icon className="w-10 h-10 text-azul-brillante mb-4" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-azul-brillante rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-azul-brillante rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
