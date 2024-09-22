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
  
//   export const clientReviews = [
//     {
//       id: 1,
//       name: 'Emily Johnson',
//       position: 'Marketing Director at GreenLeaf',
//       img: 'assets/review1.png',
//       review:
//         'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//     },
//     {
//       id: 2,
//       name: 'Mark Rogers',
//       position: 'Founder of TechGear Shop',
//       img: 'assets/review2.png',
//       review:
//         'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//     },
//     {
//       id: 3,
//       name: 'John Dohsas',
//       position: 'Project Manager at UrbanTech ',
//       img: 'assets/review3.png',
//       review:
//         'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//     },
//     {
//       id: 4,
//       name: 'Ether Smith',
//       position: 'CEO of BrightStar Enterprises',
//       img: 'assets/review4.png',
//       review:
//         'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//     },
//   ];
  export const myProjects = [
    {
      title: 'Sahayak - Freelancing Platform',
      desc: 'Sahayak is a platform designed to connect skilled freelancers with businesses. It revolutionizes freelance work with features like skill-based search, project management, and real-time collaboration.',
      subdesc:
        'Built using Next.js, Tailwind CSS, and TypeScript, Sahayak is optimized for performance and scalability. It includes integrated payments and dynamic job posting functionalities.',
      href: 'https://github.com/divyanshrai03/SIH24',
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
          name: 'Framer Motion',
          path: '/assets/nextjs.png',
        },
      ],
    },
    {
      title: 'Portfolio - Personal Web Developer Portfolio',
      desc: 'A modern portfolio showcasing my expertise as a web developer with 2 years of experience. It highlights my technical projects, skills, and services in a clean and engaging manner.',
      subdesc:
        'Built with React.js, Tailwind CSS, and Next.js, this portfolio offers seamless navigation, animations, and is optimized for both desktop and mobile users.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
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
      ],
    },
    {
      title: 'E-Commerce Website - TechStore',
      desc: 'TechStore is an e-commerce platform that allows users to browse, compare, and purchase the latest tech gadgets. It features dynamic product displays, user reviews, and a secure checkout system.',
      subdesc:
        'TechStore leverages Next.js, Tailwind CSS, and TypeScript for optimal performance. It integrates Stripe for payments and supports product filtering and recommendations.',
      href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
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
          path: '/assets/mongodb.png',
        },
      ],
    },
    {
      title: 'Real-Time Chat Application',
      desc: 'A real-time chat app that allows users to send and receive messages instantly. It supports group chats, private messaging, and real-time notifications for a seamless communication experience.',
      subdesc:
        'Built with React.js, Tailwind CSS, and Firebase for real-time data synchronization, it ensures smooth and fast communication with message history and notifications.',
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
          name: 'Firebase',
          path: '/assets/firebase.png',
        },
      ],
    },
    {
      title: 'Anonymous Real-Time Message App',
      desc: 'An anonymous real-time messaging app that allows users to send and receive anonymous messages instantly. Focused on privacy, the app ensures user anonymity and secure communication.',
      subdesc:
        'This app is built with Next.js, Tailwind CSS, and Firebase. It supports anonymous messaging, one-time message viewing, and privacy-focused interactions.',
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
          name: 'Firebase',
          path: '/assets/mongodb.png',
        },
      ],
    },
  ];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [3, -6.5, 0] : isMobile ? [6, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [4, 4, 0] : isMobile ? [-5, -5, 0] : isTablet ? [5, 4, 0] : [12, 5, 0],
      ringPosition: isSmall ? [-7, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-27, 10, 0],
      targetPosition: isSmall ? [-5, -10, -7] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -10, -10],
    };
  };
  export const workExperiences = [
    {
      id: 1,
      name: 'Bluestock Fintech',
      pos: 'SDE Intern',
      duration: 'August 2024 - September 2024',
      title: "During my internship at Bluestock Fintech, I contributed to the development of scalable financial solutions, focusing on improving user experiences and streamlining backend services.",
      icon: '/assets/bluestock.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'GeeksForGeeks',
      pos: 'Student Ambassador',
      duration: 'April 2024 - April 2025',
      title: "As a Student Ambassador at GeeksForGeeks, I promoted events and workshops, encouraging student participation in coding and development communities, while introducing students to the world of AI and promoting GeeksForGeeks.",
      icon: '/assets/gfg.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Microsoft Learn',
      pos: 'Student Ambassador',
      duration: 'November 2023 - Present',
      title: "As a Microsoft Learn Student Ambassador, I organized events and workshops related to Azure AI and its benefits, introducing students to the world of AI and promoting Microsoft.",
      icon: '/assets/mlsa.png',
      animation: 'salute',
    },
  ];
  