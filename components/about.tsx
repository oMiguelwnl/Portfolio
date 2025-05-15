"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Sobre Mim
      </h2>
      <p className="mb-3">
        Iniciei minha jornada na programação em 2023 e, desde então, venho me
        dedicando intensamente a evoluir na área. Atualmente, curso{" "}
        <span className="font-medium">Ciência da Computação</span> na Estácio. O
        que mais me motiva na programação é a{" "}
        <span className="italic">resolução de problemas</span> — encontrar
        soluções criativas para desafios técnicos é algo que realmente me
        empolga. Minha stack principal inclui{" "}
        <span className="font-medium">React, Next.js, Node.js e MongoDB</span>,
        além de experiência com TypeScript. Estou sempre em busca de aprender
        novas tecnologias e aprimorar minhas habilidades.
      </p>

      <p>
        <span className="italic">Fora do universo da programação</span>, gosto
        de assistir filmes, ler livros e explorar novos idiomas. Atualmente,
        estou estudando <span className="font-medium">francês</span> e também me
        dedicando a aprender a jogar <span className="font-medium">xadrez</span>
        .
      </p>
    </motion.section>
  );
}
