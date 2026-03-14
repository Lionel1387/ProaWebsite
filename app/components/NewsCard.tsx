'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Noticia } from '../models/Noticia';

interface NewsCardProps {
  noticia: Noticia;
  variant?: 'default' | 'compact' | 'featured';
}

const NewsCard = ({ noticia, variant = 'default' }: NewsCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        <Link href={`/noticias/${noticia.slug}`}>
          <div className="tarjeta-tecnologica p-6 rounded-xl cursor-pointer group">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-azul-electrico/20 to-azul-brillante/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-azul-electrico/30">
                <Calendar className="w-8 h-8 text-azul-brillante" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:texto-degradado transition-colors">
                  {noticia.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                  {truncateText(noticia.subtitle, 80)}
                </p>
                <div className="flex items-center text-gray-500 text-xs space-x-4">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {formatDate(noticia.date)}
                  </span>
                  {noticia.category && (
                    <span className="codigo-background px-2 py-1 rounded text-azul-brillante">
                      {noticia.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <Link href={`/noticias/${noticia.slug}`}>
          <div className="tarjeta-tecnologica rounded-2xl overflow-hidden cursor-pointer group h-full">
            <div className="h-48 bg-gradient-to-br from-azul-electrico/20 to-azul-brillante/20 flex items-center justify-center border-b border-azul-electrico/30">
              <Calendar className="w-16 h-16 text-azul-brillante" />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                {noticia.category && (
                  <span className="codigo-background px-3 py-1 rounded text-sm text-azul-brillante">
                    {noticia.category}
                  </span>
                )}
                <span className="text-gray-400 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatDate(noticia.date)}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:texto-degradado transition-colors">
                {noticia.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                {noticia.subtitle}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-400 text-sm">
                  <User className="w-4 h-4 mr-2" />
                  {noticia.author}
                </div>
                <div className="flex items-center text-azul-brillante group-hover:text-white transition-colors">
                  <span className="mr-2">Leer más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <Link href={`/noticias/${noticia.slug}`}>
        <div className="tarjeta-tecnologica rounded-2xl overflow-hidden cursor-pointer group h-full">
          <div className="h-40 bg-gradient-to-br from-azul-electrico/20 to-azul-brillante/20 flex items-center justify-center border-b border-azul-electrico/30">
            <Calendar className="w-12 h-12 text-azul-brillante" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              {noticia.category && (
                <span className="codigo-background px-2 py-1 rounded text-xs text-azul-brillante">
                  {noticia.category}
                </span>
              )}
              <span className="text-gray-400 text-xs flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {formatDate(noticia.date)}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:texto-degradado transition-colors">
              {noticia.title}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2">
              {noticia.subtitle}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-500 text-xs">
                <User className="w-3 h-3 mr-1" />
                {noticia.author}
              </div>
              <div className="flex items-center text-azul-brillante text-sm group-hover:text-white transition-colors">
                <span>Leer más</span>
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsCard;
