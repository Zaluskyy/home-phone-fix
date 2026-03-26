import postsData from './blogPosts.json';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = postsData as BlogPost[];
