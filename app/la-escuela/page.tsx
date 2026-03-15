'use client';

import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen, Target, MapPin, Clock, Star, MessageCircle, Calendar } from 'lucide-react';

const LaEscuelaPage = () => {
  const teamMembers = [
    {
      name: 'Dra. María González',
      role: 'Directora',
      description: 'Licenciada en Educación con más de 15 años de experiencia en gestión educativa tecnológica.',
      image: '/images/team/directora.jpg'
    },
    {
      name: 'Ing. Carlos Rodríguez',
      role: 'Coordinador Técnico',
      description: 'Ingeniero en Software especializado en curriculum académico tecnológico.',
      image: '/images/team/coordinador.jpg'
    },
    {
      name: 'Prof. Laura Martínez',
      role: 'Jefa de Departamento',
      description: 'Profesora de Informática con experiencia en desarrollo de proyectos educativos.',
      image: '/images/team/jefa-departamento.jpg'
    },
    {
      name: 'Lic. Diego Silva',
      role: 'Secretario Académico',
      description: 'Licenciado en Administración Educativa especializado en instituciones técnicas.',
      image: '/images/team/secretario.jpg'
    }
  ];

  const teachers = [
    {
      name: 'Ing. Ana Fernández',
      specialty: 'Desarrollo Web Full Stack',
      experience: '8 años',
      courses: ['JavaScript Avanzado', 'React & Next.js', 'Node.js']
    },
    {
      name: 'Lic. Martín Pérez',
      specialty: 'Bases de Datos y Backend',
      experience: '10 años',
      courses: ['SQL & NoSQL', 'Python & Django', 'API Development']
    },
    {
      name: 'Ing. Sofía López',
      specialty: 'Desarrollo Móvil',
      experience: '6 años',
      courses: ['React Native', 'Flutter', 'iOS & Android']
    },
    {
      name: 'Prof. Lucas García',
      specialty: 'Algoritmos y Estructuras',
      experience: '12 años',
      courses: ['Algoritmos', 'Estructuras de Datos', 'Complejidad']
    }
  ];

  const facilities = [
    {
      name: 'Laboratorio de Computación',
      description: '40 equipos de última generación con software de desarrollo profesional.',
      icon: '💻',
      features: ['Computadoras Core i7', 'Monitores 4K', 'Software licenciado', 'Internet fibra óptica']
    },
    {
      name: 'Aula de Proyectos',
      description: 'Espacio colaborativo diseñado para trabajo en equipo y desarrollo de proyectos.',
      icon: '🚀',
      features: ['Pizarras interactivas', 'Mesas de trabajo', 'Sistema de videoconferencias', 'Impresora 3D']
    },
    {
      name: 'Biblioteca Digital',
      description: 'Acceso a miles de recursos digitales y libros técnicos especializados.',
      icon: '📚',
      features: ['Libros digitales', 'Plataformas online', 'Sala de estudio', 'Acceso 24/7']
    },
    {
      name: 'Sala de Servidores',
      description: 'Infraestructura propia para hosting y aprendizaje de administración de sistemas.',
      icon: '🖥️',
      features: ['Servidores dedicados', 'Virtualización', 'Cloud computing', 'Monitoreo 24/7']
    }
  ];

  const achievements = [
    { number: '15+', label: 'Años de trayectoria' },
    { number: '500+', label: 'Egresados' },
    { number: '95%', label: 'Empleabilidad' },
    { number: '50+', label: 'Empresas socias' }
  ];

  return (
    <div className="min-h-screen bg-azul-oscuro">
      <Navbar />
      
      {/* Hero Section personalizado */}
      <Hero
        title="LA ESCUELA"
        subtitle="Conoce Nuestra Institución"
        description="Proa Rebeca Guber comprometida con la excelencia educativa y la formación de los profesionales del mañana."
        showButtons={false}
      />

      {/* Sección Acerca de la Escuela */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-tecnologico opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sobre <span className="texto-degradado">PROA</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Proa Rebeca Guber es una institución educativa de vanguardia dedicada a la formación 
                  de desarrolladores de software de alto nivel. Formamos parte del programa Escuelas ProA, 
                  una iniciativa nacional que busca transformar la educación técnica en Argentina.
                </p>
                <p>
                  Ubicados en Barrio San Vicente, Córdoba, ofrecemos un Bachiller con orientación en 
                  Desarrollo de Software que combina teoría fundamental con práctica intensiva, 
                  preparando a nuestros estudiantes para los desafíos reales del mercado laboral tecnológico.
                </p>
                <p>
                  Nuestra misión es formar profesionales capaces de crear soluciones innovadoras, 
                  adaptarse rápidamente a las nuevas tecnologías y contribuir al desarrollo digital 
                  de nuestra sociedad.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="tarjeta-tecnologica p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold texto-degradado mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {achievement.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Equipo de Gestión */}
      <section id="equipo" className="py-20 bg-gradient-to-b from-transparent to-azul-electrico/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Equipo de <span className="texto-degradado">Gestión</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conoce a los profesionales que lideran nuestra institución educativa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="tarjeta-tecnologica rounded-2xl overflow-hidden h-full">
                  <div className="h-48 bg-gradient-to-br from-azul-electrico to-azul-brillante flex items-center justify-center">
                    <Users className="w-20 h-20 text-white/50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-azul-brillante font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Docentes */}
      <section id="docentes" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestros <span className="texto-degradado">Docentes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Profesionales con amplia experiencia en la industria tecnológica y vocación educativa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="tarjeta-tecnologica p-8 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-azul-electrico to-azul-brillante rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{teacher.name}</h3>
                      <p className="text-azul-brillante font-semibold mb-2">{teacher.specialty}</p>
                      <p className="text-gray-400 text-sm mb-3">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {teacher.experience} de experiencia
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {teacher.courses.map((course) => (
                          <span
                            key={course}
                            className="codigo-background px-3 py-1 rounded text-xs text-azul-brillante"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section id="instalaciones" className="py-20 bg-gradient-to-b from-transparent to-azul-electrico/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestras <span className="texto-degradado">Instalaciones</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Espacios modernos y tecnológicos diseñados para el aprendizaje óptimo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="tarjeta-tecnologica p-8 rounded-2xl h-full">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{facility.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{facility.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{facility.description}</p>
                  <div className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-400 text-sm">
                        <Star className="w-4 h-4 text-azul-brillante mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="tarjeta-tecnologica p-12 rounded-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Visítanos en <span className="texto-degradado">Barrio San Vicente</span>
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-azul-brillante" />
                    <span>Agustín Garzón 1221</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-azul-brillante" />
                    <span>Lunes a Viernes: 7:30 - 17:30</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-azul-brillante" />
                    <span>Córdoba Capital, Argentina</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-48 bg-gradient-to-br from-azul-electrico/20 to-azul-brillante/20 rounded-xl flex items-center justify-center border border-azul-electrico/30"
                >
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-azul-brillante mx-auto mb-2" />
                    <p className="text-azul-brillante font-semibold">Ubicación Estratégica</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaEscuelaPage;
