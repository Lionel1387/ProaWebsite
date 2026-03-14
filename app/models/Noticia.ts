export interface Noticia {
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

export interface CreateNoticiaData {
  title: string;
  subtitle: string;
  content: string;
  image: string;
  author: string;
  category?: string;
  tags?: string[];
  published?: boolean;
}

export interface UpdateNoticiaData extends Partial<CreateNoticiaData> {
  id: string;
}
