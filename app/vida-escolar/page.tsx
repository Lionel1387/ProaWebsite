'use client';

import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, Heart, Gamepad2, Music, Palette, BookOpen, Target, Star, MessageCircle } from 'lucide-react';

const VidaEscolarPage = () => {
  const events = [
    {
      title: 'Semana de la Tecnología',
      date: 'Mayo 15-19',
      description: 'Una semana completa de talleres, hackathons y charlas sobre las últimas tecnologías.',
      type: 'Académico',
      image: '/images/events/tech-week.jpg',
      activities: ['Talleres de programación', 'Hackathon 48hs', 'Charlas de expertos', 'Concurso de proyectos']
    },
    {
      title: 'Campamento de Integración',
      date: 'Abril 7-9',
      description: 'Tres días de actividades al aire libre para fortalecer los lazos entre compañeros.',
      type: 'Convivencia',
      image: '/images/events/campamento.jpg',
      activities: ['Juegos de equipo', 'Talleres de liderazgo', 'Noches de fogata', 'Actividades deportivas']
    },
    {
      title: 'Feria de Ciencias y Tecnología',
      date: 'Septiembre 20-22',
      description: 'Presentación de proyectos innovadores desarrollados por los estudiantes.',
      type: 'Académico',
      image: '/images/events/feria-ciencias.jpg',
      activities: ['Exposición de proyectos', 'Demostraciones en vivo', 'Premiación', 'Networking']
    },
    {
      title: 'Fiesta de Fin de Año',
      date: 'Diciembre 15',
      description: 'Celebración anual para despedir el año y reconocer los logros alcanzados.',
      type: 'Social',
      image: '/images/events/fiesta-fin.jpg',
      activities: ['Cena especial', 'Entrega de premios', 'Música en vivo', 'Baile']
    }
  ];

  const activities = [
    {
      category: 'Deportes',
      icon: '⚽',
      description: 'Fútbol, básquetbol, vóley y más actividades deportivas para mantenerse activos.',
      activities: ['Fútbol sala', 'Básquetbol', 'Vóley', 'Atletismo', 'Ajedrez'],
      schedule: 'Lunes y Miércoles 16:00 - 18:00',
      color: 'from-green-600 to-emerald-500'
    },
    {
      category: 'Música',
      icon: '🎵',
      description: 'Banda escolar, coro y clases de instrumentos para expresar tu talento musical.',
      activities: ['Banda escolar', 'Coro', 'Guitarra', 'Piano', 'Percusión'],
      schedule: 'Martes y Jueves 17:00 - 19:00',
      color: 'from-purple-600 to-pink-500'
    },
    {
      category: 'Arte',
      icon: '🎨',
      description: 'Talleres de dibujo, pintura y diseño digital para desarrollar tu creatividad.',
      activities: ['Dibujo técnico', 'Pintura', 'Diseño digital', 'Fotografía', 'Escultura'],
      schedule: 'Miércoles 16:00 - 18:00',
      color: 'from-orange-600 to-red-500'
    },
    {
      category: 'Gaming',
      icon: '🎮',
      description: 'Club de gaming y torneos de eSports para compartir tu pasión por los videojuegos.',
      activities: ['Torneos de LOL', 'Club de gaming', 'Desarrollo de juegos', 'Streaming', 'E-Sports'],
      schedule: 'Viernes 16:00 - 20:00',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      category: 'Robótica',
      icon: '🤖',
      description: 'Club de robótica para construir y programar robots competidores.',
      activities: ['Lego Mindstorms', 'Arduino', 'Programación', 'Competencias', 'Innovación'],
      schedule: 'Sábados 10:00 - 13:00',
      color: 'from-indigo-600 to-purple-500'
    },
    {
      category: 'Literatura',
      icon: '📚',
      description: 'Club de lectura y taller de escritura para explorar el mundo de las palabras.',
      activities: ['Club de lectura', 'Taller de escritura', 'Debates', 'Poesía', 'Periodismo escolar'],
      schedule: 'Lunes 17:00 - 18:30',
      color: 'from-teal-600 to-green-500'
    }
  ];

  const convivencia = [
    {
      title: 'Respeto y Diversidad',
      description: 'Fomentamos un ambiente inclusivo donde cada persona se sienta valorada y respetada.',
      icon: Heart,
      color: 'from-red-600 to-pink-500'
    },
    {
      title: 'Trabajo en Equipo',
      description: 'Promovemos la colaboración y el apoyo mutuo como base del aprendizaje.',
      icon: Users,
      color: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'Responsabilidad',
      description: 'Desarrollamos el compromiso y la responsabilidad en todas las actividades.',
      icon: Target,
      color: 'from-green-600 to-emerald-500'
    },
    {
      title: 'Liderazgo',
      description: 'Formamos líderes positivos que inspiren y guíen a sus compañeros.',
      icon: Trophy,
      color: 'from-purple-600 to-indigo-500'
    }
  ];

  const tutorias = [
    {
      title: 'Tutorías Académicas',
      description: 'Apoyo personalizado en las materias de mayor dificultad.',
      schedule: 'Lunes a Viernes 14:00 - 16:00',
      topics: ['Matemática', 'Programación', 'Bases de datos', 'Inglés'],
      icon: BookOpen
    },
    {
      title: 'Tutorías de Proyectos',
      description: 'Asesoramiento para el desarrollo de proyectos integradores.',
      schedule: 'Martes y Jueves 16:00 - 18:00',
      topics: ['Desarrollo web', 'Apps móviles', 'Base de datos', 'Testing'],
      icon: Target
    },
    {
      title: 'Tutorías de Orientación',
      description: 'Guía vocacional y preparación para el mundo laboral.',
      schedule: 'Miércoles 17:00 - 19:00',
      topics: ['CV y portafolio', 'Entrevistas', 'Elección de carrera', 'Emprendimiento'],
      icon: Star
    },
    {
      title: 'Tutorías Psicológicas',
      description: 'Apoyo emocional y desarrollo de habilidades socioemocionales.',
      schedule: 'Lunes y Viernes 15:00 - 17:00',
      topics: ['Manejo del estrés', 'Habilidades sociales', 'Autoestima', 'Resolución de conflictos'],
      icon: Heart
    }
  ];

  const salidas = [
    {
      title: 'Visita a Empresas Tecnológicas',
      destination: 'Córdoba Technology Park',
      date: 'Junio 10',
      description: 'Recorrido por las principales empresas de software de Córdoba.',
      activities: ['Visita a startups', 'Charlas con profesionales', 'Networking', 'Demostraciones'],
      image: '/images/outings/tech-park.jpg'
    },
    {
      title: 'Campamento de Programación',
      destination: 'Sierras de Córdoba',
      date: 'Octubre 20-22',
      description: 'Tres días inmersivos de coding y naturaleza en las sierras.',
      activities: ['Hackathon', 'Talleres', 'Trekking', 'Team building'],
      image: '/images/outings/camping.jpg'
    },
    {
      title: 'Viaje Educativo a Buenos Aires',
      destination: 'Buenos Aires',
      date: 'Noviembre 5-8',
      description: 'Visita a universidades y empresas líderes en tecnología.',
      activities: ['Tour universitario', 'Visita a Google Argentina', 'Museos de ciencia', 'Cultural'],
      image: '/images/outings/buenos-aires.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-azul-oscuro">
      <Navbar />
      
      {/* Hero Section personalizado */}
      <Hero
        title="VIDA ESCOLAR"
        subtitle="Experiencias y Comunidad"
        description="Más que estudios, una experiencia completa de crecimiento, amistad y descubrimiento."
        showButtons={false}
      />

      {/* Galería de Imágenes */}
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
              Nuestra <span className="texto-degradado">Comunidad</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un espacio donde el aprendizaje se combina con la amistad y el crecimiento personal.
            </p>
          </motion.div>

          {/* Galería de imágenes placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: item * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gradient-to-br from-azul-electrico/20 to-azul-brillante/20 rounded-lg flex items-center justify-center border border-azul-electrico/30"
              >
                <div className="text-center">
                  <Users className="w-8 h-8 text-azul-brillante mx-auto mb-2" />
                  <p className="text-azul-brillante text-xs">Foto {item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos */}
      <section id="eventos" className="py-20 bg-gradient-to-b from-transparent to-azul-electrico/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Eventos <span className="texto-degradado">Destacados</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Actividades especiales que enriquecen nuestra experiencia educativa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="tarjeta-tecnologica rounded-2xl overflow-hidden h-full">
                  <div className="h-48 bg-gradient-to-br from-azul-electrico/20 to-azul-brillante/20 flex items-center justify-center border-b border-azul-electrico/30">
                    <Calendar className="w-16 h-16 text-azul-brillante" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="codigo-background px-3 py-1 rounded text-sm text-azul-brillante">
                        {event.type}
                      </span>
                      <span className="text-gray-400 text-sm">{event.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{event.description}</p>
                    <div>
                      <h4 className="text-azul-brillante font-semibold mb-3">Actividades:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {event.activities.map((activity) => (
                          <div key={activity} className="flex items-center text-gray-400 text-sm">
                            <Star className="w-4 h-4 text-azul-brillante mr-2 flex-shrink-0" />
                            {activity}
                          </div>
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

      {/* Actividades Extracurriculares */}
      <section id="actividades" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Actividades <span className="texto-degradado">Extracurriculares</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre tu pasión más allá del aula con nuestras actividades especiales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="tarjeta-tecnologica p-8 rounded-2xl h-full">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{activity.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{activity.category}</h3>
                      <p className="text-gray-400 text-sm">{activity.schedule}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{activity.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-azul-brillante font-semibold text-sm">Actividades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.activities.map((act) => (
                        <span
                          key={act}
                          className="codigo-background px-2 py-1 rounded text-xs text-azul-brillante"
                        >
                          {act}
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

      {/* Convivencia */}
      <section id="convivencia" className="py-20 bg-gradient-to-b from-transparent to-azul-electrico/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Valores de <span className="texto-degradado">Convivencia</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Los principios que guian nuestra comunidad escolar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {convivencia.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="tarjeta-tecnologica p-8 rounded-2xl text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salidas Escolares */}
      <section id="salidas" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Salidas <span className="texto-degradado">Educativas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experiencias únicas que complementan nuestro aprendizaje.
            </p>
          </motion.div>

          <div className="space-y-8">
            {salidas.map((trip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              >
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="tarjeta-tecnologica p-8 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{trip.title}</h3>
                      <span className="text-gray-400 text-sm">{trip.date}</span>
                    </div>
                    <p className="text-azul-brillante font-semibold mb-3">{trip.destination}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{trip.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {trip.activities.map((activity) => (
                        <div key={activity} className="flex items-center text-gray-400 text-sm">
                          <Star className="w-4 h-4 text-azul-brillante mr-2 flex-shrink-0" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="h-64 bg-gradient-to-br from-azul-electrico/20 to-azul-brillante/20 rounded-xl flex items-center justify-center border border-azul-electrico/30"
                  >
                    <div className="text-center">
                      <Calendar className="w-12 h-12 text-azul-brillante mx-auto mb-2" />
                      <p className="text-azul-brillante font-semibold">Viaje Especial</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorías */}
      <section id="tutorias" className="py-20 bg-gradient-to-b from-transparent to-azul-electrico/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sistema de <span className="texto-degradado">Tutorías</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Apoyo personalizado para garantizar tu éxito académico y personal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorias.map((tutoria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="tarjeta-tecnologica p-8 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-azul-electrico to-azul-brillante rounded-xl flex items-center justify-center flex-shrink-0">
                      <tutoria.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{tutoria.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{tutoria.description}</p>
                      <p className="text-azul-brillante text-sm mb-3">{tutoria.schedule}</p>
                      <div className="flex flex-wrap gap-2">
                        {tutoria.topics.map((topic) => (
                          <span
                            key={topic}
                            className="codigo-background px-2 py-1 rounded text-xs text-azul-brillante"
                          >
                            {topic}
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

      {/* Testimonios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Voces de <span className="texto-degradado">Nuestra Comunidad</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experiencias compartidas por estudiantes y docentes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'María González',
                role: 'Estudiante 4to Año',
                testimonial: 'La escuela no solo me enseñó a programar, sino a trabajar en equipo y a nunca rendirme ante los desafíos.',
                avatar: '👩‍💻'
              },
              {
                name: 'Carlos Rodríguez',
                role: 'Docente',
                testimonial: 'Ver el crecimiento de los estudiantes es mi mayor satisfacción. Cada día aprendo tanto como enseño.',
                avatar: '👨‍🏫'
              },
              {
                name: 'Ana Martínez',
                role: 'Egresada',
                testimonial: 'Gracias a PROA, hoy trabajo en una empresa líder en tecnología. La formación que recibí fue excepcional.',
                avatar: '👩‍💼'
              }
            ].map((testimony, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="tarjeta-tecnologica p-8 rounded-2xl text-center h-full">
                  <div className="text-4xl mb-4">{testimony.avatar}</div>
                  <MessageCircle className="w-8 h-8 text-azul-brillante mx-auto mb-4" />
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimony.testimonial}"
                  </p>
                  <h4 className="text-xl font-bold text-white mb-1">{testimony.name}</h4>
                  <p className="text-azul-brillante text-sm">{testimony.role}</p>
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

export default VidaEscolarPage;
