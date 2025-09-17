"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  ShieldCheck,
  Globe,
  Users2,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Modal from "./modalContactsCourses/modal";
import SubscriptionForm from "./modalContactsCourses/SubscriptionForm";
import { submitSubscription } from "./lib/api";

const advantages = [
  { text: "Certificado com registro no MEC" },
  { text: "Aceito em concursos públicos" },
  { text: "Válido para progressão na carreira" },
  { text: "Reconhecido por empresas privadas" },
  { text: "Possibilita lecionar no ensino superior" },
  { text: "Credita pontos em planos de carreira" },
];

const features = [
  {
    icon: <Globe className="h-7 w-7 text-emerald-300" />, // Alterado de green-700 para emerald-300 (para contraste com fundo escuro)
    title: "Reconhecimento Nacional",
    description: "Certificados válidos em todo território nacional.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-emerald-300" />, // Alterado de green-700 para emerald-300
    title: "Credenciamento MEC",
    description: "Instituição devidamente credenciada pelo MEC.",
  },
  {
    icon: <Users2 className="h-7 w-7 text-emerald-300" />, // Alterado de green-700 para emerald-300
    title: "Corpo Docente Qualificado",
    description: "Professores mestres e doutores aprovados pelo MEC.",
  },
  {
    icon: <FileText className="h-7 w-7 text-emerald-300" />, // Alterado de green-700 para emerald-300
    title: "Histórico Acadêmico",
    description: "Documentação completa com validade nacional.",
  },
];

export function MecCertificationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"form" | "loading" | "success">(
    "form"
  );
  const [whatsappMessage, setWhatsappMessage] = useState("");
  const WHATSAPP_NUMBER = "5531991398980"; //Numero da empresa

  const openModal = () => {
    setFormStatus("form");
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");
    try {
      const formData = new FormData(event.currentTarget);

      const data = {
        name: formData.get("name") as string,
        phone: (formData.get("whatsapp") as string).replace(/\D/g, ""),
        areaOfInterest: formData.get("interestArea") as string,
        enterpriseId: 1, // Defina o ID correto da empresa aqui
      };

      await submitSubscription(data);

      const message = `Olá! Tenho interesse na Certificação Oficial MEC. Meu nome é ${data.name}.`;
      setWhatsappMessage(message);
      setFormStatus("success");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert(
        "Houve um erro ao enviar sua inscrição. Por favor, tente novamente."
      );
      setFormStatus("form");
    }
  };

  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    closeModal();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className="py-16 sm:py-24 bg-neutral-900">
        {" "}
        {/* Fundo escuro aplicado aqui */}
        <div className="container mx-auto px-4">
          <div className="bg-neutral-800 rounded-2xl shadow-lg p-8 md:p-12 border border-neutral-700">
            {" "}
            {/* Fundo e borda adaptados para tema escuro */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.div className="space-y-6" variants={itemVariants}>
                <Badge
                  variant="outline"
                  className="border-emerald-700 bg-emerald-900 text-emerald-200 font-semibold" // Cores da Badge ajustadas para tema escuro
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  CERTIFICAÇÃO OFICIAL MEC
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                  {" "}
                  {/* Alterado para texto branco */}
                  Certificado{" "}
                  <span className="block text-emerald-500">
                    {" "}
                    {/* Alterado para emerald-500 */}
                    Autorizado pelo MEC
                  </span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {" "}
                  {/* Alterado para cinza claro */}
                  Todos os nossos cursos possuem certificação reconhecida pelo
                  Ministério da Educação (MEC), garantindo validade nacional e
                  reconhecimento no mercado de trabalho.
                </p>
                <div>
                  <h3 className="font-semibold text-white mb-4">
                    {" "}
                    {/* Alterado para texto branco */}
                    Vantagens do Certificado MEC:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {advantages.map((advantage, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />{" "}
                        {/* Alterado para emerald-500 */}
                        <span className="text-gray-300">
                          {advantage.text}
                        </span>{" "}
                        {/* Alterado para cinza claro */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    onClick={openModal}
                    className="font-bold bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 transition-all hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5 hover:bg-emerald-800" // Cor principal e hover ajustados
                  >
                    Garantir Minha Vaga <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-emerald-600 text-emerald-500 hover:bg-emerald-900 hover:text-white" // Botão outline ajustado para tema escuro
                  >
                    <Link
                      href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhes-ies/d96957f455f6405d14c6542552b0f6eb/MzIzMg=="
                      target="_blank"
                    >
                      Ver Credenciamento
                    </Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div className="space-y-6" variants={itemVariants}>
                <Card className="bg-neutral-800 border-neutral-700">
                  {" "}
                  {/* Fundo e borda adaptados para tema escuro */}
                  <CardHeader className="items-center text-center p-6">
                    <div className="bg-emerald-900 rounded-full p-2 w-fit mb-3">
                      {" "}
                      {/* Fundo do ícone ajustado para tema escuro */}
                      <ShieldCheck className="h-7 w-7 text-emerald-300" />{" "}
                      {/* Cor do ícone ajustada */}
                    </div>
                    <CardTitle className="text-xl text-white">
                      {" "}
                      {/* Alterado para texto branco */}
                      Credenciamento MEC
                    </CardTitle>
                    <CardDescription className="pb-2 text-gray-300">
                      {" "}
                      {/* Alterado para cinza claro */}
                      Portaria nº 1.234/2023 - Ministério da Educação
                    </CardDescription>
                    <Badge className="bg-emerald-900 text-emerald-200 border-emerald-700 font-medium">
                      {" "}
                      {/* Cores da Badge ajustadas para tema escuro */}
                      INSTITUIÇÃO CREDENCIADA
                    </Badge>
                  </CardHeader>
                </Card>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="h-full text-center sm:text-left bg-neutral-800 border-neutral-700">
                        {" "}
                        {/* Fundo e borda adaptados para tema escuro */}
                        <CardHeader>
                          <div className="mx-auto sm:mx-0 bg-emerald-900 rounded-full p-2 w-fit mb-2">
                            {" "}
                            {/* Fundo do ícone ajustado para tema escuro */}
                            {feature.icon}
                          </div>
                          <CardTitle className="text-lg pt-2 text-white">
                            {" "}
                            {/* Alterado para texto branco */}
                            {feature.title}
                          </CardTitle>
                          <CardDescription className="text-gray-300">
                            {" "}
                            {/* Alterado para cinza claro */}
                            {feature.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/*
          IMPORTANTE: Se o componente `SubscriptionForm` ainda não tiver sido ajustado para
          o tema escuro, você precisará aplicá-las para que o modal também mantenha a
          consistência visual.
        */}
        <SubscriptionForm
          status={formStatus}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          onSuccessRedirect={handleWhatsAppRedirect}
        />
      </Modal>
    </>
  );
}
