export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}

export interface TimelineEntry {
  id: string;
  type: 'work' | 'education' | 'achievement';
  period: string;
  title: string;
  subtitle?: string;
  location?: string;
  narrative: string;
  icon?: string;
}

export interface Project {
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  video?: string; // YouTube video URL for project demo
  context?: string; // e.g., "@ Indhic", "@ Shortcastle", "Freelance", "Personal"
}

export interface OpenSourceProject {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  stars?: number;
  forks?: number;
}

export interface Achievement {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
  highlights?: string[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  cloud: string[];
  genai: string[];
}

export interface ProfileData {
  name: string;
  location: string;
  role: string;
  tagline: string;
  about: string;
  socialLinks: SocialLinks;
  timeline: TimelineEntry[];
  projects: Project[];
  openSource: OpenSourceProject[];
  achievements: Achievement[];
  skills: Skills;
}

export const profileData: ProfileData = {
  name: 'Myadaram Sai Kiran',
  location: 'Hyderabad, Telangana, India',
  role: 'Full-Stack Engineer',
  tagline: 'Building AI-driven full-stack systems that scale',
  about:
    'Full-stack engineer specializing in GenAI, RAG systems, and cloud infrastructure. I build end-to-end solutions with a focus on ownership, scalability, and delivering measurable impact. Experienced in developing production-grade applications from concept to deployment.',
  socialLinks: {
    github: 'https://github.com/kiran7893',
    linkedin: 'https://www.linkedin.com/in/sai-kiran-myadaram-027893242/',
    email: 'mailto:myadaramsaikiran@gmail.com',
    resume: '/MyadaramSaikiran.pdf',
  },
  timeline: [
    {
      id: 'indhic',
      type: 'work',
      period: '2025 - Present',
      title: 'Full Stack Engineer',
      subtitle: 'Indhic Software Pvt Ltd',
      location: 'Remote',
      icon: 'indhic',
      narrative: `I work as a Full Stack Engineer at Indhic Software, where I build AI-powered applications from the ground up. My main project has been Kshana, an agentic AI-powered desktop video editor built with TypeScript and Electron.js. The editor enables automated image and video generation workflows through ComfyUI-based pipelines and LLM APIs.

I designed and built modular sub-agent workflows that handle everything from asset preparation to automated image placement and infographic generation pipelines, all integrated with Remotion for video rendering.

Beyond Kshana, I designed and shipped a production Data Annotation SaaS platform using Next.js and NestJS. I owned the entire lifecycle—system design, implementation, and deployment on GCP Cloud Run with Docker and GitHub Actions CI/CD.`,
    },
    {
      id: 'shortcastle',
      type: 'work',
      period: 'Feb - May 2025',
      title: 'Software Developer Intern',
      subtitle: 'Shortcastle Technologies',
      location: 'Hyderabad, Telangana',
      icon: 'shortcastle',
      narrative: `I interned at Shortcastle Technologies working on their Federation Management System (FMS). My focus was building RBAC-enabled frontend interfaces using Next.js 15 and TypeScript, giving different user roles appropriate access levels throughout the application.

I optimized data access patterns using Prisma ORM and PostgreSQL, which improved overall application performance by 30%. I also implemented tRPC for type-safe role management and consistent API communication across the stack.`,
    },
    {
      id: 'gtec',
      type: 'work',
      period: 'Aug 2024 - Jan 2025',
      title: 'Web Development Intern',
      subtitle: 'G-Tec Hyderabad',
      location: 'Hyderabad, Telangana',
      icon: 'gtec',
      narrative: `This was where I got my start in professional web development. I built responsive user interfaces with React.js and Tailwind CSS, which increased user engagement by 15% based on analytics.

I developed RESTful APIs using Node.js and Express for efficient data handling, and spent time optimizing MySQL queries to improve database performance.`,
    },
    {
      id: 'btech',
      type: 'education',
      period: '2021 - 2025',
      title: 'B.Tech in Computer Science',
      subtitle: 'TKR College of Engineering & Technology',
      location: 'Hyderabad, Telangana',
      icon: 'education',
      narrative: `I completed my Bachelor of Technology in Computer Science with a CGPA of 7.67/10.00. During my time here, I built several projects including WebSolutions, a MERN stack application for site creation and maintenance that integrated an ML-based cost calculator using Flask and Pickle.

I focused heavily on practical skills alongside academics—learning full-stack development, working with databases, and building real applications that solved actual problems.`,
    },
  ],
  projects: [
    {
      title: 'Kshana - AI Video Editor',
      problem: 'Creating professional videos with custom graphics, infographics, and animations is time-consuming and requires expertise in multiple tools. Content creators needed a faster way to produce quality video content.',
      solution: 'Engineered an agentic AI-powered desktop video editor using TypeScript and Electron.js. The app automates image and video generation through ComfyUI pipelines and LLM APIs, with modular sub-agent workflows for asset preparation, automated image placement, and infographic generation—all integrated with Remotion for final video rendering.',
      technologies: ['TypeScript', 'Electron.js', 'ComfyUI', 'LLM APIs', 'Remotion', 'Desktop App'],
      video: 'https://youtu.be/oW0ydKrVj30',
      link: 'https://indhic-ai-kshana-eiyd2mkh4q-de.a.run.app/kshana',
      context: '@ Indhic',
    },
    {
      title: 'Data Annotation Platform',
      problem: 'ML teams struggle with organizing annotation workflows, managing annotator access, and maintaining data quality at scale. Existing tools were either too complex or lacked collaboration features.',
      solution: 'I designed and shipped a production-ready SaaS platform using Next.js and NestJS. The system handles team collaboration, role-based access, and real-time updates. I owned the entire lifecycle from system design to deployment on GCP Cloud Run with Docker and GitHub Actions CI/CD.',
      technologies: ['Next.js', 'NestJS', 'MongoDB', 'GCP Cloud Run', 'Docker', 'GitHub Actions', 'SaaS'],
      image: '/projects/Data-annotation.png',
      link: 'https://data-annotation-frontend-dev-eiyd2mkh4q-el.a.run.app/login',
      context: '@ Indhic',
    },
    {
      title: 'Indhic AI',
      problem: 'Businesses need production-grade AI solutions for contextual search, autonomous agent workflows, and NLP but lack the expertise to build robust, reliable systems with measurable ROI.',
      solution: 'Built the company website for Indhic AI—a research-driven AI company offering AI-powered answer engines, agentic workflow engines, and a smart data annotation platform. The site showcases products, R&D consulting services (strategy, model architecture, MLOps), and company expertise across 15+ delivered projects with a focus on robustness, reliability, and measurable ROI.',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'GCP', 'Docker'],
      image: '/projects/Indhic.png',
      link: 'https://indhic.com',
      context: '@ Indhic',
    },
    {
      title: 'Satvic Foods',
      problem: 'A leading Indian agricultural exporter needed a modern, visually rich website to showcase their premium gherkins and allied vegetables to global markets while highlighting certifications (FSSAI, FSSC 22000, FDA) and sustainable farming practices.',
      solution: 'Delivered a high-performance website for Satvic Foods featuring detailed product catalogs (gherkins, jalapenos, baby corn, paprika, and more), certification and awards showcases, and company information. The site highlights their direct partnership with 4000+ farmers across India and exports to 24+ countries—optimized for performance and SEO for international reach.',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Docker', 'GCP'],
      image: '/projects/Satvicfoods.png',
      link: 'https://www.satvicfoods.in',
      context: '@ Indhic',
    },
    {
      title: 'Personiks',
      problem: 'A top-rated cosmetic and plastic surgery clinic in Hyderabad needed a modern, high-performance website with appointment booking, patient authentication, and secure payment processing to attract and serve patients online.',
      solution: 'Spearheaded development and deployment of personiks.com using Next.js and TypeScript. The site features detailed service pages for cosmetic procedures (liposuction, rhinoplasty, hair transplant, skin treatments), multi-location clinic information, patient testimonials, and a blog. Integrated MongoDB with Mongoose for data management and HDFC payment gateway for secure transactions. Automated deployments using Dokploy and optimized for performance, SEO, and scalability.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Mongoose', 'HDFC Payment Gateway', 'Dokploy'],
      image: '/projects/Personiks.png',
      link: 'https://personiks.com',
      context: 'Freelance',
    },
    {
      title: 'Virtec',
      problem: 'A global HVAC instruments company needed a professional, high-performance website to showcase their precision flow meters, heat meters, VFDs, and IAQ sensors to international clients and distributors.',
      solution: 'Developed a modern, responsive website for Virtec Instruments Inc. featuring detailed product catalogs for electromagnetic flow meters, ultrasonic heat meters, clamp-on meters, and IAQ sensors. Built with Next.js and styled using Tailwind CSS and shadcn/ui components, the site includes product pages, company vision, customer services, and distributor information—optimized for performance and SEO.',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'shadcn/ui', 'AWS'],
      image: '/projects/Virtec.png',
      link: 'https://www.virtec.us',
      context: 'Freelance',
    },
    {
      title: 'Federation Management System (FMS)',
      problem: 'Chess federations needed a centralized platform to manage players, coaches, tournaments, and organizational hierarchies across multiple roles—with strict access control and seamless coordination between different stakeholders.',
      solution: 'Built a comprehensive Federation Management System with multi-role RBAC (Role-Based Access Control) supporting federation admins, coaches, players, and organizers. Developed type-safe frontend interfaces with Next.js 15 and TypeScript, leveraging tRPC for end-to-end type safety across the stack. Optimized complex relational data access patterns using Prisma ORM with PostgreSQL, improving query performance by 30%.',
      technologies: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL', 'tRPC', 'RBAC'],
      image: '/projects/fms.png',
      link: 'https://fms.chesslang.com/login',
      context: '@ Shortcastle',
    },
    {
      title: 'WebSolutions',
      problem: 'Small businesses often struggle to estimate website development costs upfront and face lengthy back-and-forth just to book a consultation, slowing down their decision-making process.',
      solution: 'Created a full-stack MERN application with an ML-powered cost calculator served via a Flask API, giving small businesses instant website development estimates. The platform features appointment booking with authentication, an admin dashboard for managing users and bookings in real-time, and a responsive UI styled with Tailwind CSS.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Flask', 'Tailwind CSS', 'ML'],
      github: 'https://github.com/kiran7893/WebSolutions',
      image: '/projects/Web-solutions.png',
      link: 'https://web-solutions-one.vercel.app/',
      context: 'Personal',
    },
  ],
  openSource: [
    {
      title: 'Image Generation Agent',
      description:
        'A CLI agent built with React Ink and OpenRouter that answers questions and generates images using a subagent architecture. A specialized subagent intercepts vague image prompts and expands them into highly detailed descriptions—specifying lighting, mood, camera angles, and art style—before passing them to the image model for generation.',
      technologies: ['TypeScript', 'React Ink', 'OpenRouter', 'OpenAI SDK'],
      github: 'https://github.com/kiran7893/Image-generation-agent',
      stars: 2,
      forks: 0,
    },
    {
      title: 'VS Code Extension + React Boilerplate',
      description:
        'A production-ready boilerplate for building VS Code extensions with React webviews. Features TypeScript, React 19, Tailwind CSS, esbuild bundling, two-way messaging between extension and webview, VS Code theme-aware styling, and watch mode for development. Designed to help developers skip the setup and start building extensions immediately.',
      technologies: ['TypeScript', 'React 19', 'Tailwind CSS', 'esbuild', 'VS Code API'],
      github: 'https://github.com/kiran7893/vscode-extension-react-boilerplate',
      stars: 5,
      forks: 3,
    },
  ],
  achievements: [
    {
      title: 'Google Cloud Arcade 2024 — Milestone 3',
      description:
        'Gained hands-on cloud computing experience through the Google Cloud Arcade program, completing 70+ skill badges and labs across GCP services including Kubernetes, CI/CD pipelines, BigQuery, serverless computing, and Generative AI. Recognized by Google with exclusive swag and hoodies for reaching Milestone 3.',
      link: 'https://www.skills.google/public_profiles/d87b7809-353d-4b53-91a7-5486584da38d?locale=en',
      linkLabel: 'Google Cloud Skills Profile',
      highlights: [
        '70+ Google Cloud skill badges earned',
        'Hands-on labs: Kubernetes, CI/CD, BigQuery, Cloud Run, GenAI',
        'Received exclusive Google swag & hoodies for Milestone 3',
      ],
    },
  ],
  skills: {
    languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
    frameworks: [
      'React',
      'Node.js',
      'Express',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
    ],
    cloud: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    genai: ['OpenAI API', 'RAG Systems', 'LangChain', 'Vector Databases'],
  },
};

