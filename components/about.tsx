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
        dedicando intensamente a evoluir na área. Atualmente, curso Ciência da
        Computação na Estácio. O que mais me motiva na programação é a resolução
        de problemas — encontrar soluções criativas para desafios técnicos é
        algo que realmente me empolga. Minha stack principal inclui React,
        Next.js, Node.js e MongoDB, além de experiência com TypeScript. Estou
        sempre em busca de aprender novas tecnologias e aprimorar minhas
        habilidades.
      </p>

      <p>
        Fora do universo da programação, gosto de assistir filmes, ler livros e
        explorar novos idiomas. Atualmente, estou estudando francês e Espanhol e
        também me dedicando a aprender a jogar xadrez.
      </p>
    </motion.section>
  );
}
