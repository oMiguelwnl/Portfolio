"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  const validationSchema = Yup.object().shape({
    senderEmail: Yup.string().email("E-mail inválido"),
    message: Yup.string()
      .min(10, "Muito curto (mínimo 10 caracteres)")
      .max(5000, "Muito longo (máximo 5000 caracteres)"),
  });

  const formik = useFormik({
    initialValues: {
      senderEmail: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();
        formData.append("senderEmail", values.senderEmail);
        formData.append("message", values.message);

        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("E-mail enviado com sucesso!");
        resetForm();
      } catch (err) {
        toast.error("Falha ao enviar e-mail");
      }
    },
  });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Entre em Contato</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Você pode me contatar diretamente em{" "}
        <a
          className="underline"
          href="mailto:contato.miguel.almeida7@gmail.com"
        >
          contato.miguel.almeida7@gmail.com
        </a>{" "}
        ou através deste formulário.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={formik.handleSubmit}
      >
        <div className="relative">
          <input
            className={`h-14 w-full px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none ${
              formik.touched.senderEmail && formik.errors.senderEmail
                ? "border-red-500"
                : ""
            }`}
            name="senderEmail"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.senderEmail}
            placeholder="Seu e-mail"
          />
          {formik.touched.senderEmail && formik.errors.senderEmail && (
            <div className="text-red-500 text-sm text-left mt-1">
              {formik.errors.senderEmail}
            </div>
          )}
        </div>

        <div className="relative my-3">
          <textarea
            className={`h-52 w-full rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none ${
              formik.touched.message && formik.errors.message
                ? "border-red-500"
                : ""
            }`}
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            placeholder="Sua mensagem"
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-sm text-left mt-1">
              {formik.errors.message}
            </div>
          )}
        </div>

        <SubmitBtn disabled={formik.isSubmitting} type="submit" />
      </form>
    </motion.section>
  );
}
