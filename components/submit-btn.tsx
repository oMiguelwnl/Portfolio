"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormikContext } from "formik";

interface SubmitBtnProps {
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  isSubmitting?: boolean;
}

export default function SubmitBtn({
  type = "submit",
  disabled = false,
  isSubmitting: externalIsSubmitting = false,
}: SubmitBtnProps) {
  const formikContext = useFormikContext();

  const isSubmitting = formikContext?.isSubmitting || externalIsSubmitting;
  const isValid = formikContext?.isValid ?? true;

  const isActuallyDisabled = disabled || isSubmitting || !isValid;

  return (
    <button
      type={type}
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
      disabled={isActuallyDisabled}
    >
      {isSubmitting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Enviar{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
