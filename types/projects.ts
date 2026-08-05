export interface Project {
  slug: string;
  year: number;
  name: string;
  madeAt: string;
  client?: string;
  duration: string;
  stack: string[];
  featured: boolean;
  image?: string;
  description?: string;
  link?: string;
}

export interface FeaturedProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
}
