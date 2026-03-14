'use client';

import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import NewsCard from '../../components/NewsCard';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { databaseService } from '../../lib/database';
import { Noticia } from '../../models/Noticia';
import { useState, useEffect } from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

const NoticiaPage = ({ params }: PageProps) => {
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [relatedNoticias, setRelatedNoticias] = useState<Noticia[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const noticiaData = await databaseService.getNoticiaBySlug(params.slug);
        const related = await databaseService.getRecentNoticias(3);
        
        if (!noticiaData) {
          notFound();
          return;
        }
        
        setNoticia(noticiaData);
        setRelatedNoticias(related.filter(n => n.id !== noticiaData.id).slice(0, 3));
      } catch (error) {
        console.error('Error loading noticia:', error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return `${readingTime} min de lectura`;
  };

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
      
      {/* Breadcrumb */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/noticias"
              className="inline-flex items-center text-azul-brillante hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Noticias
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Artículo */}
      <article className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header del artículo */}
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Categoría y Fecha */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {noticia?.category && (
                <span className="codigo-background px-3 py-1 rounded text-sm text-azul-brillante">
                  {noticia.category}
                </span>
              )}
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(noticia?.date || '')}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                {formatReadingTime(noticia?.content || '')}
              </div>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {noticia?.title}
            </h1>

            {/* Subtítulo */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {noticia?.subtitle}
            </p>

            {/* Meta información */}
            <div className="flex flex-wrap items-center justify-between pb-8 border-b border-azul-electrico/20">
              <div className="flex items-center text-gray-400">
                <User className="w-5 h-5 mr-3" />
                <span>Por {noticia?.author || 'Autor'}</span>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Tags */}
                {noticia?.tags && noticia.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {noticia.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs text-gray-400"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Botón de compartir */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-azul-electrico/20 hover:bg-azul-electrico/30 transition-colors"
                >
                  <Share2 className="w-5 h-5 text-azul-brillante" />
                </motion.button>
              </div>
            </div>
          </motion.header>

          {/* Imagen principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-azul-electrico/20 to-azul-brillante/20 rounded-2xl flex items-center justify-center border border-azul-electrico/30">
              <Calendar className="w-24 h-24 text-azul-brillante" />
            </div>
          </motion.div>

          {/* Contenido del artículo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-invert max-w-none"
          >
            <div className="text-gray-300 leading-relaxed space-y-6">
              {noticia?.content?.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Footer del artículo */}
          <motion.footer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-azul-electrico/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-white font-semibold mb-2">Compartir这篇文章</h3>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white"
                  >
                    f
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white"
                  >
                    𝕏
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white"
                  >
                    W
                  </motion.button>
                </div>
              </div>
              
              <Link 
                href="/noticias"
                className="inline-flex items-center boton-tecnologico px-6 py-3"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ver más noticias
              </Link>
            </div>
          </motion.footer>
        </div>
      </article>

      {/* Artículos Relacionados */}
      {relatedNoticias.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-transparent to-azul-electrico/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Noticias <span className="texto-degradado">Relacionadas</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Descubre más contenido relevante sobre nuestra comunidad educativa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNoticias
                .filter(n => n.id !== noticia?.id)
                .slice(0, 3)
                .map((relatedNoticia, index) => (
                  <motion.div
                    key={relatedNoticia.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NewsCard 
                      noticia={relatedNoticia} 
                      variant="compact"
                    />
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default NoticiaPage;
