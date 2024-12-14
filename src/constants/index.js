export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 4,
    name: 'How to Generate and Verify OTPs in Next.js',
    position: 'https://dev.to/dee_codes/how-to-generate-and-verify-otps-in-nextjs-30i5 ',
    img: 'assets/otp.png',
    review:
      'When building modern web applications, One-Time Passwords (OTPs) are critical in two-factor authentication and user verification workflows. This guide will teach us how to generate, send, and verify OTPs using Next.js and a mock email service. By the end, you’ll understand how OTPs can enhance security and improve user experience.',
  },
  {
    id: 3,
    name: 'Setting up Redis in a Next.js Application',
    position: 'https://dev.to/dee_codes/setting-up-redis-in-a-nextjs-application-1h1d ',
    img: 'assets/review3.png',
    review:
      'In this article, we’ll walk you through how to integrate Redis into a Next.js application, covering both server-side logic and practical use cases like caching and session storage. We’ll be using Upstash Redis, a serverless Redis service that works perfectly with Vercel and other platforms.',
  },
  {
    id: 2,
    name: 'How to Set Up MongoDB with Next.js',
    position: 'https://dev.to/dee_codes/how-to-set-up-mongodb-with-nextjs-2lkb',
    img: 'assets/review1.png',
    review:
      'In this tutorial, we’ll walk through the process of connecting MongoDB to a Next.js application. We’ll cover how to set up MongoDB using Mongoose, connect to MongoDB Atlas, and ensure efficient database connections in your Next.js API routes.',
  },
  {
    id: 1,
    name: 'Mobile Development',
    position: 'https://dev.to/dee_codes/mobile-development-epa',
    img: 'assets/review2.jpg',
    review:
      'Hey there! Ever thought about creating cool apps for your phone? Here is your chance! Mobile development is an exciting space. Today, I want to share some insights about mobile development platforms, common software architecture patterns, and why I am excited to join the HNG internship. Lets dive in and have some fun!',
  },
  /* 
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  }, */
];

export const myProjects = [
  {
    title: 'Zentry Inspired App',
    desc: 'A Zentry-inspired platform with smooth, dynamic animations that engage users as they interact with the app. Featuring sleek transitions and a minimalist design, the app provides an immersive experience with visually appealing and interactive elements.',
    subdesc:'Built with React, GSAP for advanced animations, Tailwind CSS for responsive styling, and a clean, modern UI, this platform captures the essence of Zentrys seamless user experience, delivering smooth transitions and animations while ensuring optimal performance and usability.',
    href: 'https://gsapproject.vercel.app/',
    texture: '/textures/project/project7.mp4',
    logo: '/assets/project-logo7.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'GSAP',
        path: '/assets/gsap-white.svg',
      },
      
    ],
  },
  {
    title: 'PitchNest - A Startup Pitch Platform',
    desc: 'A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience.',
    subdesc:
      'Built with Next.js 15,Typescript, Tailwind CSS, Sanity.io, and Sentry.io, our platform offers a sleek, minimalist design, a powerful content management system, and robust error monitoring to provide a seamless and engaging experience for entrepreneurs and investors alike.',
    href: 'https://pitchnest.vercel.app/',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/project-logo6a.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/Next.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Sanity',
        path: '/assets/Sanity.svg',
      },
      {
        id: 5,
        name: 'Sentry',
        path: '/assets/Sentry.svg',
      },
    ],
  },
  {
    title: 'Connect - Social Media Application',
    desc: 'Connect is a vibrant social media application that enables users to share images, engage through likes, and save their favorite posts to a database. With its user-friendly interface, Connect fosters community interaction and creativity, providing a space for users to showcase their visual stories.',
    subdesc:
      'Built using Appwrite, React.js, React Query, TypeScript, and Tailwind CSS, Connect ensures seamless user experiences while delivering optimal performance and scalability.',
    href: 'https://connect-3t3e.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Appwrite',
        path: '/assets/appwrite.svg',
      },
    ],
  },
  {
    title: 'Careness - Your Companion for Mental Well-being',
    desc: 'Careness is a comprehensive web application designed to provide users with resources and tools to support their mental well-being. Focused on interaction, support, and education, it empowers users to manage their mental health effectively in a compassionate and engaging environment.',
    subdesc:
      'Built using React, Redux Toolkit, Material UI, and Framer Motion, Careness ensures a smooth, responsive experience with efficient state management, delightful animations, and a visually appealing interface.',
    href: 'https://carenesss.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Airbnb Clone - Modern Home Rental Platform',
    desc: 'This Airbnb clone is a feature-rich web application that mimics the core functionalities of the popular vacation rental platform. It allows users to explore listings, book accommodations, and manage stays with ease, providing an intuitive and engaging user experience.',
    subdesc:
      'Built using Next.js, Tailwind CSS, NextAuth, Prisma, Zustand, and Framer Motion, the application ensures fast performance, secure authentication, smooth state management, and delightful animations for a seamless and visually appealing interface.',
    href: 'https://airbnb-clone-j839.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/Next.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Mongodb',
        path: '/assets/mongodb.svg',
      },
      {
        id: 5,
        name: 'Prisma',
        path: '/assets/prisma.svg',
      },
    ],
  },
  /* {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  }, */
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'HNG Internship',
    pos: 'Backend Developer',
    duration: 'June 2024 - August 2024',
    title: "Designed secure APIs and structured databases for efficient data management using Node.js with Express, implemented OAuth and JWT for multi-user access, and collaborated with backend developers and project managers to convert tasks into GitHub tickets.",
    icon: '/assets/hng.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Elva Technology',
    pos: 'Frontend Developer',
    duration: 'May 2024 - November 2024',
    title: "Collaborated with UX/UI designers to translate design mockups into interactive web pages, integrated frontend components with backend APIs for dynamic data, and resolved bugs to ensure cross-browser compatibility and responsiveness.",
    icon: '/assets/elva.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Freelance',
    pos: ' Full Stack Developer',
    duration: '2021 - 2024',
    title: "Built and maintained a full-stack web application using Next.js for server-side rendering and client-side interactivity, developing RESTful APIs with Next.js API routes and integrating them with MongoDB for efficient data management and retrieval.",
    icon: '/assets/freelance.png',
    animation: 'salute',
  },
];
