'use client';

import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import { motion } from 'framer-motion';
import { Search, Calendar, Filter, TrendingUp, Clock } from 'lucide-react';
import { databaseService } from '../lib/database';
import { Noticia } from '../models/Noticia';
import { useState, useEffect } from 'react';

const NoticiasPage = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [recentNoticias, setRecentNoticias] = useState<Noticia[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const allNoticias = await databaseService.getAllNoticias();
        const recent = await databaseService.getRecentNoticias(3);
        setNoticias(allNoticias);
        setRecentNoticias(recent);
      } catch (error) {
        console.error('Error loading noticias:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const categories = ['Todos', 'Académico', 'Eventos', 'Infraestructura', 'Alianzas'];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-azul-oscuro flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-azul-brillante border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-azul-oscuro">
      <Navbar />
      
      {/* Hero Section personalizado */}
      <Hero
        title="NOTICIAS"
        subtitle="Actualizaciones y Novedades"
        description="Mantente informado sobre las últimas noticias y eventos de nuestra comunidad educativa."
        showButtons={false}
      />

      {/* Sección Principal */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-tecnologico opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Noticias Destacadas */}
          {recentNoticias.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Noticias <span className="texto-degradado">Destacadas</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {recentNoticias.map((noticia, index) => (
                  <NewsCard 
                    key={noticia.id} 
                    noticia={noticia} 
                    variant={index === 0 ? 'featured' : 'default'}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Filtros y Búsqueda */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="tarjeta-tecnologica p-6 rounded-2xl">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Búsqueda */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar noticias..."
                      className="w-full pl-10 pr-4 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-azul-brillante transition-colors"
                    />
                  </div>
                </div>
                
                {/* Filtros */}
                <div className="flex gap-4">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select className="pl-10 pr-8 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white focus:outline-none focus:border-azul-brillante transition-colors appearance-none">
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-azul-oscuro">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select className="pl-10 pr-8 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white focus:outline-none focus:border-azul-brillante transition-colors appearance-none">
                      <option value="recentes" className="bg-azul-oscuro">Más recientes</option>
                      <option value="antiguos" className="bg-azul-oscuro">Más antiguos</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lista de Noticias */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Todas las <span className="texto-degradado">Noticias</span>
              </h2>
              <div className="flex items-center text-gray-400">
                <Clock className="w-5 h-5 mr-2" />
                <span>{noticias.length} noticias</span>
              </div>
            </div>

            {noticias.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {noticias.map((noticia, index) => (
                  <NewsCard 
                    key={noticia.id} 
                    noticia={noticia} 
                    variant="default"
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-azul-electrico/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-azul-brillante" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  No se encontraron noticias
                </h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  No hay noticias disponibles en este momento. Vuelve pronto para ver las últimas actualizaciones.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Paginación */}
          {noticias.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mt-12"
            >
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-azul-electrico text-white rounded-lg hover:bg-azul-brillante transition-colors">
                  Anterior
                </button>
                <button className="px-4 py-2 bg-azul-oscuro border border-azul-electrico/30 text-white rounded-lg hover:bg-azul-electrico/20 transition-colors">
                  1
                </button>
                <button className="px-4 py-2 bg-azul-oscuro border border-azul-electrico/30 text-white rounded-lg hover:bg-azul-electrico/20 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-azul-oscuro border border-azul-electrico/30 text-white rounded-lg hover:bg-azul-electrico/20 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-azul-electrico text-white rounded-lg hover:bg-azul-brillante transition-colors">
                  Siguiente
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-gradient-to-b from-transparent to-azul-electrico/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Estadísticas de <span className="texto-degradado">Contenido</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: noticias.length, label: 'Noticias Publicadas', icon: Calendar },
              { number: categories.length - 1, label: 'Categorías', icon: Filter },
              { number: '15K', label: 'Lecturas Totales', icon: TrendingUp },
              { number: '89%', label: 'Engagement', icon: Clock }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-azul-electrico to-azul-brillante rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold texto-degradado mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NoticiasPage;
