import React from "react";
import { CgLaptop, CgWorkAlt } from "react-icons/cg";
import { FaCode, FaProjectDiagram, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Clickmart from "@/public/Clickmart.png";
import Agora from "@/public/Agora.jpg";
import Barber from "@/public/Barber.jpg";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Início na Programação",
    location: "Brasil",
    description:
      "Comecei minha jornada na programação em 2023, estudando HTML, CSS e JavaScript, e evoluindo para tecnologias modernas como React e Node.js.",
    icon: React.createElement(CgLaptop),
    date: "2023",
  },
  {
    title: "Ciência da Computação - Estácio",
    location: "EAD",
    description:
      "Curso atualmente Ciência da Computação na Estácio, onde aprofundo meus conhecimentos em algoritmos, estruturas de dados e engenharia de software.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - presente",
  },
  {
    title: "Desenvolvimento de Projetos Pessoais",
    location: "Remoto",
    description:
      "Desenvolvi diversos projetos Full-Stack para praticar e consolidar meus conhecimentos, como o ClickMart, Ágora e Barber.",
    icon: React.createElement(FaProjectDiagram),
    date: "2024",
  },
  {
    title: "Desenvolvedor Full-Stack",
    location: "Remoto",
    description:
      "Atuo como desenvolvedor Full-Stack com foco em React, Next.js, Node.js, TypeScript e MongoDB. Estou sempre em busca de novos desafios e aprendizados.",
    icon: React.createElement(FaCode),
    date: "2024 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "ClickMart",
    number: "01",
    description:
      "E-commerce FullStack projetada para oferecer uma solução completa para usuários, lojistas e administradores.",
    tags: [
      "React",
      "Redux",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "MaterialUI",
      "Socket.io",
    ],
    imageUrl: Clickmart,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/oMiguelwnl/ClickMart",
      },
      {
        name: "Live Demo",
        url: "https://clickmart-front.vercel.app/",
      },
    ],
  },
  {
    title: "Barber",
    number: "02",
    description:
      "FSW Barber é um aplicativo fullstack multi-tenant de barbearias, focado em dispositivos móveis, que permite aos usuários descobrir e agendar serviços em diversas barbearias.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Shadcn",
      "Prisma",
      "PostgreSQL",
    ],
    imageUrl: Barber,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/oMiguelwnl/Barber",
      },
      {
        name: "Live Demo",
        url: "https://obarber-fsw.vercel.app/",
      },
    ],
  },
  {
    title: "Ágora",
    number: "03",
    description:
      "Ágora é uma plataforma FullStack de aprendizado online que simplifica a criação, gerenciamento e acesso a cursos, oferecendo uma experiência fluida para alunos e instrutores.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "MaterialUI",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Stripe",
      "Cloudinary",
      "Socket.io",
    ],
    imageUrl: Agora,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/oMiguelwnl/Agora",
      },
      {
        name: "Live Demo",
        url: "https://agora-client-azure.vercel.app/",
      },
    ],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Sass",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "MaterialUI",
  "Shadcn",
  "Redis",
  "Stripe",
  "Cloudinary",
  "Socket.io",
] as const;

