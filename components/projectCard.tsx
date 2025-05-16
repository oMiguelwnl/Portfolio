"use client";

import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { ProjectCardProps } from "@/lib/products-type";

export function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  links,
}: ProjectCardProps) {
  return (
    <motion.div
      className="w-full max-w-[48rem] group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-white dark:bg-gray-900 border border-emerald-100 dark:border-gray-700 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 flex flex-col sm:flex-row h-auto sm:min-h-[24rem] shadow-lg hover:shadow-xl">
        {/* Conteúdo do projeto */}
        <div className="p-6 sm:w-[50%] flex flex-col h-full order-2 sm:order-1">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
            {description}
          </p>

          <div className="mt-auto space-y-6">
            {tags && (
              <ul className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-emerald-100 dark:bg-emerald-900/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-emerald-800 dark:text-emerald-200 rounded-full border border-emerald-200 dark:border-emerald-800"
                    key={index}
                  >
                    {tag}
                  </motion.li>
                ))}
              </ul>
            )}

            {links && (
              <div className="flex flex-wrap gap-3">
                {links.map((link, index) => (
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg dark:bg-emerald-600/90 dark:hover:bg-emerald-700 border border-emerald-700 dark:border-emerald-600"
                  >
                    {link.name}
                    <FiExternalLink className="h-3.5 w-3.5" />
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Imagem */}
        <motion.div
          className="relative w-full h-48 sm:h-auto sm:w-[50%] order-1 sm:order-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={imageUrl}
            alt={`Projeto: ${title}`}
            fill
            className="object-cover sm:object-contain sm:p-6 transition-all duration-300"
            quality={95}
          />
        </motion.div>
      </section>
    </motion.div>
  );
}
