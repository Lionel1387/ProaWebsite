'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Shield, Lock, Mail, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulación de autenticación
    // En producción, esto debería ser una llamada real a una API
    setTimeout(() => {
      if (formData.username === 'admin' && formData.password === 'proa2024') {
        // Guardar sesión
        localStorage.setItem('admin_session', 'true');
        localStorage.setItem('admin_username', formData.username);
        router.push('/admin');
      } else {
        setError('Credenciales incorrectas. Por favor, inténtalo nuevamente.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-azul-oscuro flex items-center justify-center p-4">
      {/* Background con grid tecnológico */}
      <div className="absolute inset-0 grid-tecnologico opacity-10" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="tarjeta-tecnologica p-8 rounded-2xl">
          {/* Logo y título */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 bg-gradient-to-br from-azul-electrico to-azul-brillante rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Panel <span className="texto-degradado">Administrador</span>
            </h1>
            <p className="text-gray-400">
              Ingresa tus credenciales para acceder al sistema
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 flex items-center space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-400 text-sm">{error}</p>
              </motion.div>
            )}

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                Usuario
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-azul-brillante transition-colors"
                  placeholder="admin"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-12 py-3 bg-azul-oscuro/50 border border-azul-electrico/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-azul-brillante transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-azul-brillante transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-azul-oscuro/50 border-azul-electrico/30 rounded text-azul-electrico focus:ring-azul-brillante focus:ring-offset-azul-oscuro"
                />
                <span className="ml-2 text-sm text-gray-400">Recordarme</span>
              </label>
              <a href="#" className="text-sm text-azul-brillante hover:text-white transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full boton-tecnologico py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                  Iniciando sesión...
                </span>
              ) : (
                'Iniciar Sesión'
              )}
            </motion.button>
          </form>

          {/* Información de acceso */}
          <div className="mt-8 p-4 bg-azul-electrico/10 rounded-lg border border-azul-electrico/30">
            <h3 className="text-sm font-semibold text-azul-brillante mb-2">
              Información de Acceso
            </h3>
            <div className="space-y-1 text-xs text-gray-400">
              <p><strong>Usuario:</strong> admin</p>
              <p><strong>Contraseña:</strong> proa2024</p>
              <p className="mt-2 text-azul-brillante">
                Estos son los datos de demostración. En producción, usa tus credenciales reales.
              </p>
            </div>
          </div>

          {/* Back to site */}
          <div className="mt-6 text-center">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-azul-brillante transition-colors text-sm"
            >
              ← Volver al sitio
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;
