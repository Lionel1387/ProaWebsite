import { Noticia, CreateNoticiaData, UpdateNoticiaData } from '../models/Noticia';

// Base de datos simulada usando localStorage para desarrollo
// En producción, esto debería ser reemplazado por una base de datos real

class DatabaseService {
  private readonly STORAGE_KEY = 'proa_noticias';

  constructor() {
    // Inicializar con datos de ejemplo si no hay datos
    if (typeof window !== 'undefined' && !localStorage.getItem(this.STORAGE_KEY)) {
      this.initializeWithSampleData();
    }
  }

  private initializeWithSampleData(): void {
    const sampleNoticias: Noticia[] = [
      {
        id: '1',
        title: 'Nuevas Aulas de Programación',
        subtitle: 'Modernización de nuestras instalaciones tecnológicas',
        content: `Estamos emocionados de anunciar la inauguración de nuestras nuevas aulas de programación equipadas con tecnología de última generación. 

Las nuevas instalaciones cuentan con:
- 40 computadoras de alto rendimiento
- Monitores 4K para desarrollo
- Software licenciado actualizado
- Sistema de aire acondicionado optimizado
- Pizarras interactivas smart

Esta inversión representa nuestro compromiso con la excelencia educativa y la formación de profesionales tecnológicos de alto nivel. Los estudiantes podrán acceder a un ambiente de aprendizaje moderno y estimulante que refleja las condiciones reales del mercado laboral tecnológico.

Las aulas estarán disponibles a partir del próximo ciclo lectivo, beneficiando a más de 200 estudiantes de nuestra carrera de Desarrollo de Software.`,
        image: '/images/noticias/aulas-nuevas.jpg',
        date: '2024-03-15',
        author: 'Dirección de la Escuela',
        slug: 'nuevas-aulas-de-programacion',
        category: 'Infraestructura',
        tags: ['tecnología', 'aulas', 'modernización'],
        published: true,
        createdAt: '2024-03-15T10:00:00Z',
        updatedAt: '2024-03-15T10:00:00Z'
      },
      {
        id: '2',
        title: 'Hackathon Anual 2024',
        subtitle: '48 horas de innovación y creatividad',
        content: `El pasado fin de semana se realizó nuestro Hackathon Anual 2024 con una participación récord de 80 estudiantes divididos en 20 equipos.

Los proyectos ganadores fueron:

1. **EcoTrack** - Aplicación móvil para monitoreo de huella de carbono
2. **EduConnect** - Plataforma de conexión entre tutores y estudiantes
3. **HealthBot** - Asistente virtual para seguimiento médico

El evento contó con el apoyo de empresas tecnológicas locales quienes ofrecieron premios y oportunidades de pasantías para los ganadores. Los estudiantes demostraron habilidades excepcionales en trabajo en equipo, resolución de problemas y desarrollo rápido de prototipos.

Felicitamos a todos los participantes por su dedicación y creatividad. Próximamente anunciaremos la fecha del próximo hackathon.`,
        image: '/images/noticias/hackathon-2024.jpg',
        date: '2024-03-10',
        author: 'Departamento de Tecnología',
        slug: 'hackathon-anual-2024',
        category: 'Eventos',
        tags: ['hackathon', 'programación', 'innovación'],
        published: true,
        createdAt: '2024-03-10T15:30:00Z',
        updatedAt: '2024-03-10T15:30:00Z'
      },
      {
        id: '3',
        title: 'Convenio con Empresa Leader Tech',
        subtitle: 'Nueva alianza para pasantías profesionales',
        content: `Nos complace anunciar la firma de un convenio estratégico con Leader Tech, una de las empresas de software más importantes de Córdoba.

Este convenio incluye:
- 20 espacios de pasantía anuales para nuestros estudiantes
- Programa de mentoría con profesionales senior
- Acceso a proyectos reales durante la formación
- Posibilidades de inserción laboral post-egreso

El primer grupo de estudiantes seleccionados comenzará sus pasantías en abril de 2024. Esta iniciativa representa una oportunidad invaluable para que nuestros estudiantes ganen experiencia práctica y establezcan contactos profesionales en la industria.

Desde la escuela agradecemos a Leader Tech por confiar en la calidad de nuestra formación y abrir sus puertas a la próxima generación de desarrolladores de software.`,
        image: '/images/noticias/convenio-leader-tech.jpg',
        date: '2024-03-05',
        author: 'Secretaría de Extensión',
        slug: 'convenio-empresa-leader-tech',
        category: 'Alianzas',
        tags: ['convenio', 'pasantías', 'empresa'],
        published: true,
        createdAt: '2024-03-05T09:15:00Z',
        updatedAt: '2024-03-05T09:15:00Z'
      },
      {
        id: '4',
        title: 'Taller de Inteligencia Artificial',
        subtitle: 'Aprendiendo sobre Machine Learning y Deep Learning',
        content: `Durante la semana pasada, se realizó un intensivo taller sobre Inteligencia Artificial dictado por el Dr. Martínez, experto en Machine Learning de la Universidad Nacional de Córdoba.

Los temas abordados incluyeron:
- Fundamentos de Machine Learning
- Redes neuronales y Deep Learning
- Procesamiento de lenguaje natural
- Visión por computadora
- Ética en IA

Más de 50 estudiantes participaron activamente, desarrollando proyectos prácticos que aplican conceptos de IA a problemas reales. Los mejores proyectos serán presentados en la próxima Feria de Ciencias y Tecnología.

Este taller es parte de nuestra iniciativa de mantener actualizado el curriculum con las tecnologías más demandadas por el mercado laboral.`,
        image: '/images/noticias/taller-ia.jpg',
        date: '2024-02-28',
        author: 'Departamento de Tecnología',
        slug: 'taller-inteligencia-artificial',
        category: 'Académico',
        tags: ['IA', 'machine learning', 'tecnología'],
        published: true,
        createdAt: '2024-02-28T14:20:00Z',
        updatedAt: '2024-02-28T14:20:00Z'
      },
      {
        id: '5',
        title: 'Graduación 2024: Nueva Generación de Desarrolladores',
        subtitle: '30 estudiantes reciben su título de Bachiller en Desarrollo de Software',
        content: `Con gran orgullo celebramos la graduación de nuestra tercera promoción de Bachilleres en Desarrollo de Software. 30 estudiantes completaron exitosamente su formación, lista para enfrentar los desafíos del mundo tecnológico.

Durante la ceremonia, se destacaron los siguientes logros:
- 100% de los egresados ya tienen empleo o continúan estudios superiores
- 15 proyectos finales fueron calificados como sobresalientes
- 8 estudiantes recibieron ofertas laborales antes de graduarse
- El promedio general de la promoción fue de 8.7/10

Los egresados se desempeñarán en empresas como Globant, Mercado Libre, Despegar y en startups locales. Varios continuarán sus estudios en carreras de Ingeniería en Sistemas y Licenciatura en Informática.

Desde la escuela, felicitamos a esta nueva generación de profesionales y les deseamos mucho éxito en sus caminos profesionales.`,
        image: '/images/noticias/graduacion-2024.jpg',
        date: '2024-02-20',
        author: 'Dirección de la Escuela',
        slug: 'graduacion-2024-nueva-generacion',
        category: 'Eventos',
        tags: ['graduación', 'egresados', 'logros'],
        published: true,
        createdAt: '2024-02-20T16:45:00Z',
        updatedAt: '2024-02-20T16:45:00Z'
      }
    ];

    this.saveNoticias(sampleNoticias);
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  }

  private saveNoticias(noticias: Noticia[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(noticias));
    }
  }

  private getNoticias(): Noticia[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading noticias:', error);
      return [];
    }
  }

  // Métodos públicos
  async getAllNoticias(): Promise<Noticia[]> {
    const noticias = this.getNoticias();
    return noticias
      .filter(noticia => noticia.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async getAllNoticiasAdmin(): Promise<Noticia[]> {
    const noticias = this.getNoticias();
    return noticias.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getNoticiaBySlug(slug: string): Promise<Noticia | null> {
    const noticias = this.getNoticias();
    return noticias.find(noticia => noticia.slug === slug && noticia.published) || null;
  }

  async getNoticiaById(id: string): Promise<Noticia | null> {
    const noticias = this.getNoticias();
    return noticias.find(noticia => noticia.id === id) || null;
  }

  async createNoticia(data: CreateNoticiaData): Promise<Noticia> {
    const noticias = this.getNoticias();
    const newNoticia: Noticia = {
      id: Date.now().toString(),
      ...data,
      slug: this.generateSlug(data.title),
      date: new Date().toISOString().split('T')[0],
      published: data.published ?? true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    noticias.push(newNoticia);
    this.saveNoticias(noticias);
    return newNoticia;
  }

  async updateNoticia(data: UpdateNoticiaData): Promise<Noticia | null> {
    const noticias = this.getNoticias();
    const index = noticias.findIndex(noticia => noticia.id === data.id);
    
    if (index === -1) return null;

    const updatedNoticia: Noticia = {
      ...noticias[index],
      ...data,
      slug: data.title ? this.generateSlug(data.title) : noticias[index].slug,
      updatedAt: new Date().toISOString()
    };

    noticias[index] = updatedNoticia;
    this.saveNoticias(noticias);
    return updatedNoticia;
  }

  async deleteNoticia(id: string): Promise<boolean> {
    const noticias = this.getNoticias();
    const filteredNoticias = noticias.filter(noticia => noticia.id !== id);
    
    if (filteredNoticias.length === noticias.length) return false;

    this.saveNoticias(filteredNoticias);
    return true;
  }

  async searchNoticias(query: string): Promise<Noticia[]> {
    const noticias = this.getNoticias();
    const lowercaseQuery = query.toLowerCase();
    
    return noticias
      .filter(noticia => 
        noticia.published && (
          noticia.title.toLowerCase().includes(lowercaseQuery) ||
          noticia.subtitle.toLowerCase().includes(lowercaseQuery) ||
          noticia.content.toLowerCase().includes(lowercaseQuery) ||
          noticia.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
        )
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async getNoticiasByCategory(category: string): Promise<Noticia[]> {
    const noticias = this.getNoticias();
    
    return noticias
      .filter(noticia => noticia.published && noticia.category === category)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async getNoticiasByTag(tag: string): Promise<Noticia[]> {
    const noticias = this.getNoticias();
    
    return noticias
      .filter(noticia => 
        noticia.published && noticia.tags?.includes(tag)
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async getRecentNoticias(limit: number = 3): Promise<Noticia[]> {
    const noticias = this.getNoticias();
    
    return noticias
      .filter(noticia => noticia.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }
}

// Exportar una instancia única del servicio
export const databaseService = new DatabaseService();
