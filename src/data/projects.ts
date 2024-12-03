interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Phoenix Rising",
    description: "A majestic bird emerging from industrial remnants",
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Birds",
    featured: true
  },
  {
    id: 2,
    title: "Urban Harmony",
    description: "Abstract representation of city life",
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Abstract",
    featured: true
  },
  {
    id: 3,
    title: "Mechanical Dreams",
    description: "Fusion of organic forms and mechanical elements",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mechanical",
    featured: true
  },
  {
    id: 4,
    title: "Industrial Nature",
    description: "Nature reclaiming industrial materials",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Nature",
    featured: true
  },
  {
    id: 5,
    title: "Steel Symphony",
    description: "Harmonious blend of metal and movement",
    image: "https://images.unsplash.com/photo-1605512595675-1ba5a3cf11b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Abstract",
    featured: true
  },
  {
    id: 6,
    title: "Metallic Flora",
    description: "Botanical forms crafted from recycled steel",
    image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Nature"
  },
  {
    id: 7,
    title: "Geometric Harmony",
    description: "Abstract patterns in metal and space",
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Abstract"
  },
  {
    id: 8,
    title: "Industrial Wings",
    description: "Avian beauty expressed through mechanical parts",
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Birds"
  }
];