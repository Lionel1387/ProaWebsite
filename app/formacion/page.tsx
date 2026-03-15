'use client';

import { Metadata } from 'next';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Code2, Target, Award, BookOpen, Rocket, Users, Zap, TrendingUp, CheckCircle } from 'lucide-react';

// Metadatos SEO para esta página
export const metadata: Metadata = {
  title: 'Formación en Desarrollo de Software | Proa Rebeca Guber',
  description: 'Conoce nuestro programa integral de 5 años para formarte como desarrollador de software profesional. Curriculum completo, tecnologías modernas y práctica intensiva.',
  keywords: 'formación desarrollo software, bachiller programación, curriculum programación, aprender a programar Córdoba, escuela software',
  openGraph: {
    title: 'Formación en Desarrollo de Software | Proa Rebeca Guber',
    description: 'Programa integral de 5 años para desarrolladores profesionales',
    url: '/formacion',
  },
};

const FormacionPage = () => {
  const curriculum = [
    {
      year: '1er Año',
      title: 'Fundamentos de Programación',
      description: 'Introducción al mundo del desarrollo de software y algoritmos básicos.',
      subjects: [
        'Introducción a la Programación',
        'Lógica y Algoritmos',
        'Matemática Discreta',
        'Inglés Técnico',
        'Sistemas Operativos',
        'Ofimática'
      ],
      technologies: ['Python', 'C', 'Git', 'Linux'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      year: '2do Año',
      title: 'Desarrollo Web Básico',
      description: 'Creación de sitios web dinámicos y fundamentos de bases de datos.',
      subjects: [
        'Programación Web I',
        'Bases de Datos I',
        'Estructura de Datos',
        'Inglés Técnico II',
        'Redes y Comunicaciones',
        'Ética Profesional'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'PHP'],
      color: 'from-green-600 to-emerald-500'
    },
    {
      year: '3er Año',
      title: 'Desarrollo Web Avanzado',
      description: 'Aplicaciones complejas y frameworks modernos de desarrollo.',
      subjects: [
        'Programación Web II',
        'Bases de Datos II',
        'Ingeniería de Software',
        'Inglés Técnico III',
        'Seguridad Informática',
        'Gestión de Proyectos'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
      color: 'from-purple-600 to-pink-500'
    },
    {
      year: '4to Año',
      title: 'Especialización y Proyectos',
      description: 'Proyectos reales y especialización en tecnologías emergentes.',
      subjects: [
        'Desarrollo Móvil',
        'Inteligencia Artificial',
        'DevOps',
        'Emprendimiento Tecnológico',
        'Proyecto Integrador',
        'Pasantías'
      ],
      technologies: ['React Native', 'Python ML', 'Kubernetes', 'CI/CD', 'Agile'],
      color: 'from-orange-600 to-red-500'
    },
    {
      year: '5to Año',
      title: 'Proyecto Final y Egresa',
      description: 'Proyecto final de carrera y preparación para el mundo laboral.',
      subjects: [
        'Proyecto Final',
        'Portafolio Profesional',
        'Orientación Laboral',
        'Legislación Informática',
        'Tesis de Grado',
        'Práctica Profesional'
      ],
      technologies: ['Full Stack', 'Cloud', 'Microservicios', 'API Design', 'Testing'],
      color: 'from-indigo-600 to-blue-500'
    }
  ];

  const skills = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Vue.js', 'TypeScript', 'TailwindCSS', 'Next.js'],
      level: 95
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'Java', 'PHP', 'Express.js', 'Django', 'Spring Boot', 'REST APIs'],
      level: 90
    },
    {
      category: 'Bases de Datos',
      icon: '🗄️',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'SQL Server', 'Oracle', 'DynamoDB'],
      level: 85
    },
    {
      category: 'DevOps & Cloud',
      icon: '☁️',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Azure', 'CI/CD', 'Linux', 'Git'],
      level: 80
    },
    {
      category: 'Mobile',
      icon: '📱',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Progressive Web Apps', 'Ionic'],
      level: 75
    },
    {
      category: 'Soft Skills',
      icon: '🤝',
      skills: ['Trabajo en Equipo', 'Comunicación', 'Liderazgo', 'Resolución de Problemas', 'Creatividad', 'Adaptabilidad'],
      level: 90
    }
  ];

  const graduateProfile = [
    'Desarrollar aplicaciones web y móviles completas',
    'Diseñar y implementar arquitecturas de software escalables',
    'Trabajar con metodologías ágiles y equipos multidisciplinarios',
    'Administrar bases de datos y sistemas en la nube',
    'Implementar medidas de seguridad y buenas prácticas',
    'Mantenerse actualizado con las últimas tecnologías',
    'Resolver problemas complejos de manera creativa',
    'Comunicarse efectivamente en equipos técnicos y no técnicos'
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      type: 'Proyecto Integrador 3er Año',
      description: 'Plataforma completa de comercio electrónico con carrito, pasarela de pago y panel de administración.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      duration: '4 meses',
      team: '4 estudiantes'
    },
    {
      title: 'Social Network App',
      type: 'Proyecto Final 4to Año',
      description: 'Red social con mensajería en tiempo real, publicaciones y sistema de notificaciones.',
      tech: ['React Native', 'Firebase', 'WebSockets', 'Redux'],
      duration: '6 meses',
      team: '5 estudiantes'
    },
    {
      title: 'AI-Powered Analytics',
      type: 'Proyecto de Especialización',
      description: 'Sistema de análisis de datos con machine learning para predicciones de negocio.',
      tech: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker'],
      duration: '8 meses',
      team: '6 estudiantes'
    }
  ];

  return (
    <div className="min-h-screen bg-azul-oscuro">
      <Navbar />
      
      {/* Hero Section personalizado */}
      <Hero
        title="FORMACIÓN"
        subtitle="Bachiller en Desarrollo de Software"
        description="Un programa integral de 5 años para formarte como desarrollador profesional del mundo digital."
        showButtons={false}
      />

      {/* Orientación en Desarrollo de Software */}
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
              Orientación en <span className="texto-degradado">Desarrollo de Software</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Nuestro bachillerato técnico te prepara para ser un desarrollador de software completo, 
              capaz de crear soluciones digitales innovadoras y adaptarte a las necesidades del mercado laboral.
            </p>
          </motion.div>

          {/* Características principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: 'Enfoque Práctico',
                description: '70% práctica y 30% teoría con proyectos reales desde el primer año.',
                gradient: 'from-blue-600 to-cyan-500'
              },
              {
                icon: TrendingUp,
                title: 'Tecnología Actual',
                description: 'Curriculum actualizado constantemente con las últimas tendencias del mercado.',
                gradient: 'from-green-600 to-emerald-500'
              },
              {
                icon: Users,
                title: 'Experiencia Laboral',
                description: 'Pasantías y proyectos con empresas desde 4to año.',
                gradient: 'from-purple-600 to-pink-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="tarjeta-tecnologica p-8 rounded-2xl h-full text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-6`}>
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

      {/* Plan de Estudios */}
      <section id="plan" className="py-20 bg-gradient-to-b from-transparent to-azul-electrico/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Plan de <span className="texto-degradado">Estudios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un curriculum progresivo que te lleva desde los fundamentos hasta la especialización.
            </p>
          </motion.div>

          <div className="space-y-8">
            {curriculum.map((year, index) => (
              <motion.div
                key={year.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              >
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="tarjeta-tecnologica p-8 rounded-2xl">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${year.color} rounded-lg flex items-center justify-center mr-4`}>
                        <span className="text-white font-bold">{year.year.split(' ')[0]}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{year.title}</h3>
                        <p className="text-gray-400">{year.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{year.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-azul-brillante font-semibold mb-3">Materias Principales</h4>
                        <ul className="space-y-2">
                          {year.subjects.slice(0, 3).map((subject) => (
                            <li key={subject} className="flex items-center text-gray-400 text-sm">
                              <CheckCircle className="w-4 h-4 text-azul-brillante mr-2 flex-shrink-0" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-azul-brillante font-semibold mb-3">Tecnologías</h4>
                        <div className="flex flex-wrap gap-2">
                          {year.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="codigo-background px-2 py-1 rounded text-xs text-azul-brillante"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="tarjeta-tecnologica p-6 rounded-2xl text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${year.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{year.year}</h4>
                    <div className="space-y-1">
                      {year.subjects.slice(3).map((subject) => (
                        <p key={subject} className="text-gray-400 text-sm">{subject}</p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades Técnicas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Habilidades que <span className="texto-degradado">Desarrollarás</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un conjunto completo de competencias técnicas y blandas para destacar en la industria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="tarjeta-tecnologica p-8 rounded-2xl h-full">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{skill.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                      <div className="flex items-center mt-2">
                        <div className="flex-1 bg-azul-oscuro rounded-full h-2 mr-3">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-azul-electrico to-azul-brillante rounded-full"
                          />
                        </div>
                        <span className="text-azul-brillante text-sm font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((s) => (
                      <span
                        key={s}
                        className="codigo-background px-2 py-1 rounded text-xs text-azul-brillante"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfil del Egresado */}
      <section id="egresados" className="py-20 bg-gradient-to-b from-transparent to-azul-electrico/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfil del <span className="texto-degradado">Egresado</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Al finalizar tus estudios, estarás preparado para enfrentar los desafíos del mundo tecnológico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="tarjeta-tecnologica p-12 rounded-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="w-8 h-8 text-azul-brillante mr-3" />
                  Competencias Principales
                </h3>
                <ul className="space-y-3">
                  {graduateProfile.map((profile, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start text-gray-300"
                    >
                      <CheckCircle className="w-5 h-5 text-azul-brillante mr-3 flex-shrink-0 mt-0.5" />
                      <span>{profile}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-64 bg-gradient-to-br from-azul-electrico/20 to-azul-brillante/20 rounded-xl flex items-center justify-center border border-azul-electrico/30"
                >
                  <div className="text-center">
                    <Rocket className="w-16 h-16 text-azul-brillante mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-2">Listo para el Futuro</h4>
                    <p className="text-azul-brillante">100% empleable</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section id="proyectos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proyectos <span className="texto-degradado">Reales</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Algunos de los proyectos desarrollados por nuestros estudiantes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="tarjeta-tecnologica rounded-2xl overflow-hidden h-full">
                  <div className="h-2 bg-gradient-to-r from-azul-electrico to-azul-brillante" />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-azul-brillante text-sm font-semibold">{project.type}</span>
                      <span className="text-gray-400 text-sm">{project.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="codigo-background px-2 py-1 rounded text-xs text-azul-brillante"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        {project.team}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormacionPage;
