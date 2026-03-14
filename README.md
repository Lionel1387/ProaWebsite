# 🚀 Escuela Técnica PROA - Sitio Web Institucional

Un sitio web moderno y tecnológico para la Escuela Técnica PROA, especializada en Desarrollo de Software. Construido con Next.js, TypeScript y TailwindCSS, featuring un sistema completo de noticias administrable.

## 📋 Descripción del Proyecto

Este proyecto es un sitio web institucional completo para una escuela técnica del programa Escuelas ProA ubicada en Barrio San Vicente, Córdoba. La escuela ofrece el título de Bachiller con Orientación en Desarrollo de Software, y el sitio refleja esta identidad tecnológica y profesional.

### 🎯 Objetivos Principales

- Presentar la institución educativa de manera profesional y moderna
- Informar sobre la oferta académica y programas educativos
- Mostrar la vida escolar y actividades extracurriculares
- Proporcionar un sistema de noticias funcional y administrable
- Facilitar el contacto y la comunicación con la comunidad

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático para mayor robustez
- **TailwindCSS** - Framework de CSS utilitario
- **Framer Motion** - Animaciones modernas y fluidas
- **Lucide React** - Biblioteca de iconos moderna

### Base de Datos
- **LocalStorage** - Almacenamiento local para desarrollo (fácilmente migrable a MongoDB/PostgreSQL)

### Herramientas de Desarrollo
- **ESLint** - Linting y calidad de código
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Compatibilidad de navegadores

## 📁 Estructura del Proyecto

```
proa-website/
├── app/                          # Directorio principal de la aplicación (App Router)
│   ├── components/               # Componentes reutilizables
│   │   ├── Navbar.tsx           # Barra de navegación principal
│   │   ├── Footer.tsx           # Pie de página
│   │   ├── Hero.tsx             # Componente hero reutilizable
│   │   └── NewsCard.tsx         # Tarjeta de noticias
│   ├── lib/                     # Utilidades y servicios
│   │   └── database.ts         # Servicio de base de datos
│   ├── models/                  # Definiciones de tipos
│   │   └── Noticia.ts           # Modelo de datos de noticias
│   ├── admin/                   # Panel de administración
│   │   ├── page.tsx            # Dashboard principal
│   │   └── login/              # Página de login
│   │       └── page.tsx        # Formulario de login
│   ├── noticias/                # Sistema de noticias
│   │   ├── page.tsx            # Listado de noticias
│   │   └── [slug]/             # Páginas individuales de noticias
│   │       └── page.tsx        # Vista detallada de noticia
│   ├── inicio/                  # Página de inicio
│   │   └── page.tsx            # Hero impactante y secciones
│   ├── la-escuela/              # Información institucional
│   │   └── page.tsx            # Acerca de, equipo, instalaciones
│   ├── formacion/               # Oferta académica
│   │   └── page.tsx            # Plan de estudios, habilidades
│   ├── vida-escolar/            # Vida estudiantil
│   │   └── page.tsx            # Eventos, actividades, convivencia
│   ├── contacto/                # Contacto y comunicación
│   │   └── page.tsx            # Formulario e información
│   ├── globals.css              # Estilos globales y variables CSS
│   ├── layout.tsx               # Layout principal de la aplicación
│   └── page.tsx                 # Página principal (redirección)
├── public/                      # Archivos estáticos
│   └── images/                  # Imágenes del sitio
├── package.json                 # Dependencias y scripts
├── tailwind.config.js          # Configuración de TailwindCSS
├── next.config.js              # Configuración de Next.js
└── README.md                   # Este archivo
```

## 🎨 Diseño y Estilo Visual

### Paleta de Colores Tecnológica
- **Azul Oscuro** (`#0f172a`) - Fondo principal
- **Azul Eléctrico** (`#3b82f6`) - Acentos principales
- **Azul Brillante** (`#60a5fa`) - Highlights y hover states
- **Azul Cielo** (`#dbeafe`) - Elementos sutiles
- **Gris Oscuro** (`#1f2937`) - Textos secundarios
- **Blanco** - Textos principales y elementos clave

### Características de Diseño
- **Minimalista Tecnológico** - Limpio, moderno y profesional
- **Animaciones Elegantes** - Transiciones suaves con Framer Motion
- **Elementos de Código** - Detalles sutiles inspirados en programación
- **Grid Tecnológico** - Patrones de fondo tecnológicos
- **Responsive Design** - Optimizado para todos los dispositivos

## 🚀 Funcionalidades Principales

### 1. Sistema de Navegación
- Menú principal con 6 secciones principales
- Diseño responsivo con menú móvil
- Navegación suave entre secciones
- Indicadores visuales de estado activo

### 2. Sistema de Noticias (Funcional)
- **CRUD Completo**: Crear, leer, actualizar y eliminar noticias
- **Categorización**: Noticias organizadas por categorías
- **Búsqueda y Filtros**: Búsqueda por texto y filtro por categoría
- **Vista Individual**: Páginas dedicadas para cada noticia
- **URLs Amigables**: Slugs automáticos para SEO
- **Estados de Publicación**: Borradores y publicados

### 3. Panel de Administración
- **Dashboard Principal**: Estadísticas y vista general
- **Gestión de Noticias**: Tabla completa con acciones
- **Autenticación**: Sistema de login seguro
- **Interfaz Moderna**: Diseño tecnológico y profesional
- **Acciones Rápidas**: Editar, eliminar, cambiar estado

### 4. Páginas Institucionales
- **Inicio**: Hero impactante con estadísticas y proyectos destacados
- **La Escuela**: Información institucional, equipo e instalaciones
- **Formación**: Plan de estudios detallado por año
- **Vida Escolar**: Eventos, actividades y convivencia
- **Contacto**: Formulario de contacto e información

## 🗄️ Sistema de Base de Datos

### Modelo de Datos (Noticia)
```typescript
interface Noticia {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  date: string;
  author: string;
  slug: string;
  category?: string;
  tags?: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}
```

### Servicios de Base de Datos
- **databaseService**: Clase que maneja todas las operaciones CRUD
- **LocalStorage**: Almacenamiento local para desarrollo
- **Migración Fácil**: Diseñado para migrar fácilmente a bases de datos reales

## 🔐 Sistema de Autenticación

### Login de Administrador
- **Credenciales de Demostración**:
  - Usuario: `admin`
  - Contraseña: `proa2024`
- **Sesión Local**: Almacenamiento en localStorage
- **Protección de Rutas**: Verificación de sesión en páginas admin
- **Logout Seguro**: Cierre de sesión y limpieza de datos

### Seguridad
- Validación básica de credenciales
- Protección de rutas administrativas
- Sesiones con tiempo de expiración (configurable)

## 🎯 Componentes Principales

### Navbar Component
- Navegación responsiva
- Efectos hover y animaciones
- Logo animado
- Menú móvil con transición

### Hero Component
- Personalizable para diferentes páginas
- Animaciones de entrada
- Iconos flotantes animados
- Llamadas a la acción configurables

### NewsCard Component
- Tres variantes: default, compact, featured
- Animaciones al hover
- Enlaces a páginas individuales
- Metadatos de noticia

### Footer Component
- Enlaces organizados por categorías
- Información de contacto
- Redes sociales
- Copyright dinámico

## 🚀 Cómo Ejecutar el Proyecto

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd proa-website

# Instalar dependencias
npm install

# O con yarn
yarn install
```

### Ejecución en Desarrollo
```bash
# Ejecutar servidor de desarrollo
npm run dev

# O con yarn
yarn dev
```

El sitio estará disponible en `http://localhost:3000`

### Construcción para Producción
```bash
# Construir versión optimizada
npm run build

# Iniciar servidor de producción
npm run start

# O con yarn
yarn build
yarn start
```

## 📝 Acceso al Panel de Administración

1. Navega a `http://localhost:3000/admin`
2. Ingresa las credenciales:
   - Usuario: `admin`
   - Contraseña: `proa2024`
3. Accede al dashboard para gestionar noticias

## 🛠️ Cómo Agregar Noticias

### Via Panel de Administración
1. Inicia sesión en `/admin`
2. Haz clic en "Nueva Noticia"
3. Completa el formulario:
   - Título (obligatorio)
   - Subtítulo (obligatorio)
   - Contenido (obligatorio)
   - Imagen (URL placeholder)
   - Autor (obligatorio)
   - Categoría (opcional)
   - Tags (opcional)
   - Estado de publicación
4. Guarda la noticia

### Estructura de Contenido
- **Título**: Título principal de la noticia
- **Subtítulo**: Breve descripción o resumen
- **Contenido**: Texto completo con párrafos separados por doble salto de línea
- **Categoría**: Académico, Eventos, Infraestructura, Alianzas
- **Tags**: Palabras clave para búsqueda

## 🎨 Personalización del Sitio

### Colores y Estilos
Los colores están definidos en `tailwind.config.js`:
```javascript
colors: {
  'azul-oscuro': '#0f172a',
  'azul-electrico': '#3b82f6',
  'azul-brillante': '#60a5fa',
  // ... más colores
}
```

### Animaciones
Las animaciones están configuradas en `tailwind.config.js`:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'gradient': 'gradient 3s ease infinite',
  // ... más animaciones
}
```

### Componentes Reutilizables
- **Hero**: Configurable para diferentes páginas
- **NewsCard**: Tres variantes para diferentes contextos
- **Tarjeta Tecnológica**: Estilo consistente para tarjetas
- **Botón Tecnológico**: Estilo de botón principal

## 📱 Responsive Design

El sitio está optimizado para:
- **Móvil**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Breakpoints Personalizados
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Desplegar en producción
vercel --prod
```

### Netlify
```bash
# Construir
npm run build

# Subir carpeta .next a Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Mantenimiento y Actualización

### Actualizar Dependencias
```bash
# Verificar dependencias desactualizadas
npm outdated

# Actualizar dependencias
npm update

# O con yarn
yarn upgrade
```

### Linting
```bash
# Ejecutar ESLint
npm run lint

# O con yarn
yarn lint
```

### Optimización
- Las imágenes están optimizadas con Next.js Image
- CSS minificado automáticamente
- Bundle splitting automático
- Caching configurado por defecto

## 🐛 Solución de Problemas Comunes

### Problemas Comunes
1. **Error de módulos no encontrados**: Ejecuta `npm install`
2. **Error de TailwindCSS**: Revisa la configuración en `tailwind.config.js`
3. **Error de animaciones**: Verifica las importaciones de Framer Motion
4. **Problemas de localStorage**: Asegúrate de ejecutar en entorno browser

### Depuración
- Usa `console.log()` para depurar el flujo de datos
- Revisa la consola del navegador para errores
- Usa React DevTools para inspeccionar componentes

## 📈 Mejoras Futuras

### Planeadas
- [ ] Integración con base de datos real (MongoDB/PostgreSQL)
- [ ] Sistema de comentarios en noticias
- [ ] Galería de imágenes real
- [ ] Sistema de multilenguaje
- [ ] Optimización SEO avanzada
- [ ] PWA (Progressive Web App)
- [ ] Integración con redes sociales
- [ ] Sistema de notificaciones push

### Opcionales
- [ ] Chat en vivo
- [ ] Sistema de inscripciones online
- [ ] Portal de estudiantes
- [ ] Biblioteca digital
- [ ] Eventos en streaming

## 📄 Licencia

Este proyecto es propiedad de la Escuela Técnica PROA. Todos los derechos reservados.

## 🤝 Contribución

Este proyecto está diseñado para ser mantenido por estudiantes y personal de la escuela. Para contribuir:

1. Fork del repositorio
2. Crear una rama de características
3. Realizar cambios con comentarios claros
4. Probar los cambios
5. Enviar un pull request

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto:

- **Email**: soporte@escuelaproa.edu.ar
- **GitHub Issues**: Reportar problemas técnicos
- **Documentación**: Revisar este README y comentarios en el código

## 🎓 Información Educativa

Este proyecto fue desarrollado como parte del programa educativo de la Escuela Técnica PROA, demostrando las habilidades adquiridas en:

- Desarrollo Web Full Stack
- Diseño UI/UX
- Gestión de Proyectos
- Trabajo en Equipo
- Buenas Prácticas de Desarrollo

---

**Escuela Técnica PROA**  
*Formando los desarrolladores del futuro*  
📍 Agustín Garzón 1221, Barrio San Vicente, Córdoba  
🌐 www.escuelaproa.edu.ar
