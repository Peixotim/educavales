"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Efeito para fechar com a tecla 'Escape'
  useEffect(() => {
    const handleEscKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscKeyDown);
    return () => document.removeEventListener("keydown", handleEscKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          // Animação do fundo (overlay)
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-md"
          onClick={onClose} // Fechar ao clicar no fundo
        >
          <motion.div
            ref={modalContentRef}
            // Animação da caixa de conteúdo
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()} // Impede que o clique no conteúdo feche o modal
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
