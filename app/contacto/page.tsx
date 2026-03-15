'use client';

import { Metadata } from 'next';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User } from 'lucide-react';

// Metadatos SEO para esta página
export const metadata: Metadata = {
  title: 'Contacto | Proa Rebeca Guber',
  description: 'Contacta a Proa Rebeca Guber. Ubicados en Agustín Garzón 1221, Barrio San Vicente, Córdoba. Teléfono, email y formulario de contacto.',
  keywords: 'contacto Proa Rebeca Guber, teléfono escuela, dirección Córdoba, email contacto, formulario contacto',
  openGraph: {
    title: 'Contacto | Proa Rebeca Guber',
    description: 'Comunicate con nosotros para más información',
    url: '/contacto',
  },
};

const ContactoPage = () => {
  return (
    <div className="min-h-screen bg-azul-oscuro">
      <Navbar />
      
      {/* Hero Section personalizado */}
      <Hero
        title="CONTACTO"
        subtitle="Conéctate con Nosotros"
        description="Estamos aquí para responder tus preguntas y ayudarte en tu camino hacia el futuro tecnológico."
        showButtons={false}
      />

      {/* Sección Principal de Contacto */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-tecnologico opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Información de <span className="texto-degradado">Contacto</span>
              </h2>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="tarjeta-tecnologica p-6 rounded-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-azul-electrico to-azul-brillante rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Dirección</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Agustín Garzón 1221<br />
                        Barrio San Vicente<br />
                        Córdoba, Argentina<br />
                        CP 5000
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="tarjeta-tecnologica p-6 rounded-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Teléfono</h3>
                      <p className="text-gray-300 leading-relaxed">
                        +54 351 123-4567<br />
                        +54 351 890-1234
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="tarjeta-tecnologica p-6 rounded-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                      <p className="text-gray-300 leading-relaxed">
                        info@escuelaproa.edu.ar<br />
                        admisiones@escuelaproa.edu.ar<br />
                        soporte@escuelaproa.edu.ar
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="tarjeta-tecnologica p-6 rounded-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Horario de Atención</h3>
                      <p className="text-gray-300 leading-relaxed">
                        <strong>Lunes a Viernes:</strong> 7:30 - 17:30<br />
                        <strong>Sábados:</strong> 8:00 - 12:00<br />
                        <strong>Período escolar:</strong> Atención extendida hasta 18:00
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Formulario de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="tarjeta-tecnologica p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre Completo
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-azul-brillante transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-azul-brillante transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                      Teléfono (Opcional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        className="w-full pl-10 pr-4 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-azul-brillante transition-colors"
                        placeholder="+54 351 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-300 mb-2">
                      Asunto
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      required
                      className="w-full px-4 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white focus:outline-none focus:border-azul-brillante transition-colors"
                    >
                      <option value="" className="bg-azul-oscuro">Selecciona un asunto</option>
                      <option value="informacion" className="bg-azul-oscuro">Información Académica</option>
                      <option value="admisiones" className="bg-azul-oscuro">Admisiones</option>
                      <option value="visitas" className="bg-azul-oscuro">Visitas Guiadas</option>
                      <option value="soporte" className="bg-azul-oscuro">Soporte Técnico</option>
                      <option value="general" className="bg-azul-oscuro">Consulta General</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={6}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-azul-brillante transition-colors resize-none"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="w-4 h-4 bg-azul-oscuro/50 border-azul-electrico/30 rounded text-azul-electrico focus:ring-azul-brillante focus:ring-offset-azul-oscuro"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-400">
                      Deseo recibir información sobre eventos y novedades de la escuela
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full boton-tecnologico py-3 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-gradient-to-b from-transparent to-azul-electrico/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Encuéntranos en <span className="texto-degradado">Barrio San Vicente</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nuestra ubicación estratégica te permite fácil acceso desde cualquier punto de la ciudad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="tarjeta-tecnologica p-8 rounded-2xl"
          >
            <div className="w-full h-96 bg-gradient-to-br from-azul-electrico/20 to-azul-brillante/20 rounded-xl flex items-center justify-center border border-azul-electrico/30">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-azul-brillante mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Mapa Interactivo</h3>
                <p className="text-gray-400 mb-4">Agustín Garzón 1221, Córdoba</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="boton-tecnologico px-6 py-3"
                >
                  <span className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Abrir en Google Maps</span>
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Preguntas <span className="texto-degradado">Frecuentes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Resolvemos tus dudas más comunes sobre nuestra escuela y programas.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: '¿Cuáles son los requisitos para inscribirme?',
                answer: 'Para inscribirte necesitas: 1) Haber completado el nivel primario, 2) Presentar DNI y certificado de estudios, 3) Asistir a una entrevista informativa, 4) Completar el formulario de inscripción.'
              },
              {
                question: '¿La escuela ofrece becas o descuentos?',
                answer: 'Sí, contamos con un sistema de bebas basado en el rendimiento académico y situación económica. También ofrecemos descuentos por pago anticipado y para familias con múltiples estudiantes.'
              },
              {
                question: '¿Cuál es el horario de clases?',
                answer: 'Nuestro horario es de lunes a viernes de 7:30 a 17:30, con un intervalo para el almuerzo. Los talleres extracurriculares se realizan en horario vespertino.'
              },
              {
                question: '¿Qué tipo de título obtengo al egresar?',
                answer: 'Al finalizar obtienes el título de Bachiller con Orientación en Desarrollo de Software, reconocido oficialmente por el Ministerio de Educación de la provincia.'
              },
              {
                question: '¿Hay pasantías o prácticas profesionales?',
                answer: 'Sí, a partir de 4to año nuestros estudiantes realizan pasantías en empresas tecnológicas locales y nacionales, lo que les permite adquirir experiencia real.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="tarjeta-tecnologica p-6 rounded-xl"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactoPage;
