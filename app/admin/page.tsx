'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Filter, 
  Eye, 
  EyeOff, 
  Calendar, 
  User, 
  LogOut,
  Shield,
  FileText,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
import { databaseService } from '../lib/database';
import { Noticia } from '../models/Noticia';

const AdminDashboard = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [filteredNoticias, setFilteredNoticias] = useState<Noticia[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Todos');
  const [isLoading, setIsLoading] = useState(true);
  const [showStats, setShowStats] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verificar autenticación
    const session = localStorage.getItem('admin_session');
    if (!session) {
      router.push('/admin/login');
      return;
    }

    // Cargar noticias
    loadNoticias();
  }, [router]);

  const loadNoticias = async () => {
    try {
      const data = await databaseService.getAllNoticiasAdmin();
      setNoticias(data);
      setFilteredNoticias(data);
    } catch (error) {
      console.error('Error loading noticias:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Filtrar noticias
    let filtered = noticias;

    if (searchTerm) {
      filtered = filtered.filter(noticia =>
        noticia.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        noticia.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        noticia.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCategory !== 'Todos') {
      filtered = filtered.filter(noticia => noticia.category === filterCategory);
    }

    setFilteredNoticias(filtered);
  }, [searchTerm, filterCategory, noticias]);

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar esta noticia?')) {
      try {
        await databaseService.deleteNoticia(id);
        await loadNoticias();
      } catch (error) {
        console.error('Error deleting noticia:', error);
        alert('Error al eliminar la noticia');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_session');
    localStorage.removeItem('admin_username');
    router.push('/admin/login');
  };

  const togglePublishStatus = async (noticia: Noticia) => {
    try {
      await databaseService.updateNoticia({
        id: noticia.id,
        published: !noticia.published
      });
      await loadNoticias();
    } catch (error) {
      console.error('Error updating noticia:', error);
      alert('Error al actualizar la noticia');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const categories = ['Todos', 'Académico', 'Eventos', 'Infraestructura', 'Alianzas'];
  const stats = {
    total: noticias.length,
    published: noticias.filter(n => n.published).length,
    draft: noticias.filter(n => !n.published).length,
    thisMonth: noticias.filter(n => {
      const noticiaDate = new Date(n.createdAt);
      const thisMonth = new Date();
      return noticiaDate.getMonth() === thisMonth.getMonth() && 
             noticiaDate.getFullYear() === thisMonth.getFullYear();
    }).length
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
      {/* Header */}
      <header className="bg-azul-oscuro/90 backdrop-blur-sm border-b border-azul-electrico/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 bg-gradient-to-br from-azul-electrico to-azul-brillante rounded-lg flex items-center justify-center"
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-white">Panel Administrador</h1>
                <p className="text-xs text-azul-brillante">Proa Rebeca Guber</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                Admin: {localStorage.getItem('admin_username') || 'Usuario'}
              </span>
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-azul-electrico/20 transition-colors"
              >
                <LogOut className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="tarjeta-tecnologica p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Noticias</p>
                <p className="text-3xl font-bold text-white">{stats.total}</p>
              </div>
              <FileText className="w-8 h-8 text-azul-brillante" />
            </div>
          </div>
          
          <div className="tarjeta-tecnologica p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Publicadas</p>
                <p className="text-3xl font-bold text-white">{stats.published}</p>
              </div>
              <Eye className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="tarjeta-tecnologica p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Borradores</p>
                <p className="text-3xl font-bold text-white">{stats.draft}</p>
              </div>
              <EyeOff className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          
          <div className="tarjeta-tecnologica p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Este Mes</p>
                <p className="text-3xl font-bold text-white">{stats.thisMonth}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </motion.div>

        {/* Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="tarjeta-tecnologica p-6 rounded-xl mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-azul-brillante transition-colors"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white focus:outline-none focus:border-azul-brillante transition-colors"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-azul-oscuro">
                    {category}
                  </option>
                ))}
              </select>
              
              <Link href="/admin/noticias/nueva">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="boton-tecnologico px-6 py-3 flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Nueva Noticia</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Noticias Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="tarjeta-tecnologica rounded-xl overflow-hidden"
        >
          <div className="p-6 border-b border-azul-electrico/20">
            <h2 className="text-xl font-bold text-white">
              Lista de Noticias ({filteredNoticias.length})
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-azul-oscuro/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Título
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Autor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-azul-electrico/20">
                {filteredNoticias.map((noticia, index) => (
                  <motion.tr
                    key={noticia.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-azul-electrico/10 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-white">
                          {noticia.title.length > 50 ? noticia.title.substring(0, 50) + '...' : noticia.title}
                        </div>
                        <div className="text-sm text-gray-400">
                          {noticia.subtitle.length > 60 ? noticia.subtitle.substring(0, 60) + '...' : noticia.subtitle}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="codigo-background px-2 py-1 rounded text-xs text-azul-brillante">
                        {noticia.category || 'Sin categoría'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {noticia.author}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(noticia.createdAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => togglePublishStatus(noticia)}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          noticia.published 
                            ? 'bg-green-900/20 text-green-400 border border-green-500/30' 
                            : 'bg-orange-900/20 text-orange-400 border border-orange-500/30'
                        }`}
                      >
                        {noticia.published ? 'Publicada' : 'Borrador'}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Link href={`/admin/noticias/editar/${noticia.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </motion.button>
                        </Link>
                        
                        <Link href={`/noticias/${noticia.slug}`} target="_blank">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg bg-azul-electrico/20 hover:bg-azul-electrico/30 text-azul-brillante transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </motion.button>
                        </Link>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(noticia.id)}
                          className="p-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            
            {filteredNoticias.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">
                  {searchTerm || filterCategory !== 'Todos' 
                    ? 'No se encontraron noticias con los filtros aplicados.' 
                    : 'No hay noticias creadas aún.'}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminDashboard;
