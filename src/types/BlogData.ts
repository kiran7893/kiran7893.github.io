export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  tags: string[];
  thumbnail?: string;
  category: string;
}

export interface BlogMetadata {
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  readTime: number;
  category: string;
}

