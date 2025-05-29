"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Início", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full max-w-6xl mx-auto mb-28 px-4 sm:px-16 z-10"
    >
      <div className="flex justify-center lg:hidden mb-6">
        <motion.div
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="/profile.jpg"
            alt="Foto de perfil"
            fill
            className="object-cover rounded-full z-10 border-4 border-emerald-100 shadow-xl"
            quality={100}
            priority
          />
        </motion.div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-start max-w-lg text-center lg:text-left">
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Olá, eu sou Miguel Rafael</span>,
            desenvolvedor <span className="font-bold"> full-stack</span> com{" "}
            <span className="font-bold">2 anos</span> de experiência. Adoro
            criar <span className="italic">sites e aplicativos</span>. Meu foco
            é <span className="underline">React (Next.js)</span>.
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("Contato");
                setTimeOfLastClick(Date.now());
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 sm:px-7 sm:py-3 rounded-full flex items-center gap-2 transition-colors shadow-lg"
            >
              Contato <BsArrowRight className="text-lg" />
            </Link>

            <Link
              href="/CV.pdf"
              download
              className="bg-white hover:bg-gray-100 text-emerald-600 border border-emerald-600 px-6 py-3 sm:px-7 sm:py-3 rounded-full flex items-center gap-2 transition-colors shadow-lg"
            >
              Currículo <HiDownload className="text-lg" />
            </Link>

            <div className="flex gap-3 sm:gap-4 ml-0 sm:ml-4">
              <a
                href="https://www.linkedin.com/in/miguel-rafael-almeida/"
                target="_blank"
                className="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 p-3 rounded-full flex items-center transition-colors shadow"
                aria-label="LinkedIn"
              >
                <BsLinkedin className="text-xl" />
              </a>

              <a
                href="https://github.com/oMiguelwnl"
                target="_blank"
                className="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 p-3 rounded-full flex items-center transition-colors shadow"
                aria-label="GitHub"
              >
                <BsGithub className="text-xl" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="profile.jpg"
            alt="Foto de perfil"
            fill
            className="object-cover rounded-full z-10 border-4 border-emerald-100 shadow-xl"
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
