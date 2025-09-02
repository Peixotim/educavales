"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";
import Modal from "@/components/modalContactsCourses/modal";
import SubscriptionForm from "@/components/modalContactsCourses/SubscriptionForm";
import { submitSubscription } from "./lib/api";

const menuItems = [
  { name: "Início", href: "#inicio" },
  { name: "Cursos", href: "#cursos" },
  { name: "Faq", href: "#Faq" },
  { name: "Contato", href: "#contato" },
];

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const { scrollY } = useScroll();

  // --- LÓGICA DO MODAL ATUALIZADA ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"form" | "loading" | "success">(
    "form"
  );
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const WHATSAPP_NUMBER = "5531999999999"; // 👈 SUBSTITUA PELO SEU NÚMERO

  const openModal = () => {
    setFormStatus("form");
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  // --- FUNÇÃO DE SUBMISSÃO ATUALIZADA ---
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");
    try {
      const formData = new FormData(event.currentTarget);
      const data = {
        fullerName: formData.get("name") as string,
        phone: (formData.get("whatsapp") as string).replace(/\D/g, ""),
        areaOfInterest: formData.get("interestArea") as string,
        course: "Contato Geral (Header)",
      };

      await submitSubscription(data);

      const message = `Olá! Meu nome é ${data.fullerName} e tenho interesse na área de ${data.areaOfInterest}. Gostaria de mais informações.`;
      setWhatsappMessage(message);

      setFormStatus("success");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Houve um problema. Tente novamente.");
      setFormStatus("form");
    }
  };

  // --- NOVA FUNÇÃO DE REDIRECIONAMENTO ---
  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    closeModal();
  };

  React.useEffect(() => {
    let lastScroll = 0;
    return scrollY.on("change", (latest) => {
      if (latest > lastScroll && latest > 80) setHidden(true);
      else setHidden(false);
      lastScroll = latest;
    });
  }, [scrollY]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 z-50 w-full"
      >
        <nav
          data-state={menuState && "active"}
          className="backdrop-blur-xl bg-white/90 border-b border-slate-200 shadow-sm"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-3"
              >
                <div className="relative w-32 h-16 sm:w-40 sm:h-20">
                  <Image
                    src="/images/educavale.png"
                    alt="EducaVale logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              <ul className="hidden lg:flex gap-8 font-semibold text-base">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="relative text-green-500 hover:text-green-700 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-green-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="hidden lg:flex">
                <Button
                  onClick={openModal}
                  className="rounded-full bg-green-400 text-white hover:bg-green-600 px-6 py-5 shadow-lg font-bold transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale Conosco
                </Button>
              </div>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Fechar Menu" : "Abrir Menu"}
                className="lg:hidden relative z-50 text-[#6A0E29]"
              >
                {menuState ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {menuState && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-slate-200 shadow-md px-6 py-6"
            >
              <ul className="space-y-6 text-lg font-medium">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="block text-[#6A0E29] hover:text-[#8B1A3B] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  onClick={() => {
                    openModal();
                    setMenuState(false);
                  }}
                  className="w-full rounded-full bg-[#8B1A3B] text-white hover:bg-[#6A0E29] shadow-lg py-6 font-bold text-base"
                >
                  <MessageCircle className="mr-2" />
                  Fale Conosco
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm
          status={formStatus}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          onSuccessRedirect={handleWhatsAppRedirect} // Passa a nova função
          selectedContent="Area Desejada"
        />
      </Modal>
    </>
  );
};
