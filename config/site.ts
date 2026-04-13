// config/site.ts

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
    twitter?: string;
    instagram?: string;
  };
  author: {
    name: string;
    email: string;
    image: string;
    bio: string;
    location: string;
    resume: string;
  };
  navigation: Array<{
    title: string;
    href: string;
    external?: boolean;
  }>;
  projects: Array<{
    title: string;
    description: string;
    link?: string;
    github?: string;
    image?: string;
    tags: string[];
    status: 'completed' | 'in-progress' | 'planning';
    featured?: boolean;
  }>;
  skills: Array<{
    category: string;
    items: Array<{
      name: string;
      level: number; // 1-5
      icon?: string;
    }>;
  }>;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
    location: string;
    logo?: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    duration: string;
    description?: string;
    location: string;
    logo?: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    link?: string;
    logo?: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Jyotiraditya Misra",
  title: "Jyotiraditya Misra | Full Stack Developer",
  description: "Full Stack Developer passionate about creating innovative web solutions",
  url: "https://your-domain.com", // Update with your domain
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/yourusername", // Update with your GitHub
    linkedin: "https://linkedin.com/in/yourusername", // Update with your LinkedIn
    email: "your.email@domain.com", // Update with your email
    twitter: "https://twitter.com/yourusername", // Optional
    instagram: "https://instagram.com/yourusername", // Optional
  },
  author: {
    name: "Jyotiraditya Misra",
    email: "your.email@domain.com", // Update with your email
    image: "/jyotiraditya.jpg",
    bio: "Full Stack Developer with expertise in modern web technologies, passionate about creating scalable and user-friendly applications.",
    location: "Your Location", // Update with your location
    resume: "/Jyotiraditiya_Misra (1).pdf",
  },
  navigation: [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Experience",
      href: "#experience",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ],
  projects: [
    {
      title: "SPMOS - Smart Parking Management System",
      description: "SPMOS (Smart Parking Management & Optimization System) is an intelligent web-based application designed to simplify and optimize urban parking. It leverages real-time data, user-friendly interfaces, and smart algorithms to help users find and reserve parking spots efficiently. Built using modern web technologies, SPMOS reduces traffic congestion and enhances the parking experience for both users and administrators. Role-based access control, optimized slots via Dijkstra's algorithm.",
      tags: ["React", "Node.js", "MongoDB", "Algorithm", "Real-time"],
      status: "in-progress",
      featured: true,
    },
    {
      title: "Muscle Classics Ecommerce",
      description: "We specialize in classic and modern American muscle cars—from legendary icons like the Mustang, Challenger, and Camaro to rare, high-performance builds. Whether you're a collector, enthusiast, or first-time buyer, we offer a curated inventory of powerful machines that embody speed, style, and heritage. Drive the legacy. Own the muscle. Full-stack ecommerce platform. Features: product catalog, cart, checkout, and admin dashboard.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Ecommerce", "Admin Dashboard"],
      status: "in-progress",
      featured: true,
    },
    {
      title: "Netflix Clone",
      description: "This Netflix Clone is a full-stack streaming platform replica built to mimic the core functionality and design of Netflix. It features user authentication, responsive UI, movie browsing, trailers, and personalized watchlists, using real-time data from TMDB API and YouTube API. Technologies used include React.js, Firebase Auth, Tailwind CSS, and Vercel for deployment. The project showcases modern web development practices, UI/UX design, and API integration. Built for performance. Designed for experience",
      link: "https://netflixx-hpk5.vercel.app",
      tags: ["React", "Firebase", "TMDB API", "Tailwind CSS", "Vercel"],
      status: "completed",
      featured: true,
    },
    {
      title: "EventPlanner AI",
      description: "EventAI is an intelligent event planning assistant that helps users effortlessly plan and organize events using AI-driven recommendations and automation. From venue suggestions and task scheduling to guest list management and personalized themes, EventAI learns user preferences over time to deliver smarter, faster planning. Built with Next.js (App Router), MongoDB, OpenAI API, and Tailwind CSS, it offers a seamless, modern web experience with secure authentication via NextAuth.js. Plan smarter. Celebrate better.",
      link: "https://event-planner-ai.vercel.app/",
      tags: ["Next.js", "OpenAI", "MongoDB", "AI", "NextAuth"],
      status: "completed",
      featured: true,
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 5 },
        { name: "Next.js", level: 5 },
        { name: "TypeScript", level: 4 },
        { name: "JavaScript", level: 5 },
        { name: "Tailwind CSS", level: 5 },
        { name: "HTML5", level: 5 },
        { name: "CSS3", level: 4 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 4 },
        { name: "Python", level: 3 },
        { name: "Express.js", level: 4 },
        { name: "REST APIs", level: 4 },
        { name: "GraphQL", level: 3 },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", level: 4 },
        { name: "PostgreSQL", level: 3 },
        { name: "Firebase", level: 4 },
        { name: "Prisma", level: 3 },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 4 },
        { name: "Docker", level: 3 },
        { name: "AWS", level: 3 },
        { name: "Vercel", level: 4 },
        { name: "Figma", level: 3 },
      ],
    },
  ],
  experience: [
    // Add your actual experience here
    {
      company: "Your Company",
      position: "Full Stack Developer",
      duration: "2023 - Present",
      description: "Developing modern web applications using React, Next.js, and Node.js. Working on scalable solutions and implementing best practices.",
      location: "Remote",
    },
  ],
  education: [
    // Add your actual education here
    {
      institution: "Your University",
      degree: "Computer Science",
      duration: "2019 - 2023",
      description: "Focused on software engineering, algorithms, and web development.",
      location: "Your Location",
    },
  ],
  certifications: [
    // Add your actual certifications here
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "https://aws.amazon.com/certification/",
    },
  ],
};
