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
import { submitSubscription2 } from "./lib/api2";

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
    icon: <Globe className="h-7 w-7 text-green-700" />,
    title: "Reconhecimento Nacional",
    description: "Certificados válidos em todo território nacional.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-green-700" />,
    title: "Credenciamento MEC",
    description: "Instituição devidamente credenciada pelo MEC.",
  },
  {
    icon: <Users2 className="h-7 w-7 text-green-700" />,
    title: "Corpo Docente Qualificado",
    description: "Professores mestres e doutores aprovados pelo MEC.",
  },
  {
    icon: <FileText className="h-7 w-7 text-green-700" />,
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
  const WHATSAPP_NUMBER = "5531999999999";

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

      await submitSubscription2(data);

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
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-slate-200">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {/* Coluna da Esquerda */}
              <motion.div className="space-y-6" variants={itemVariants}>
                <Badge
                  variant="outline"
                  className="border-green-300 bg-green-100 text-green-800 font-semibold"
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  CERTIFICAÇÃO OFICIAL MEC
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-800">
                  Certificado{" "}
                  <span className="block text-green-600">
                    Autorizado pelo MEC
                  </span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Todos os nossos cursos possuem certificação reconhecida pelo
                  Ministério da Educação (MEC), garantindo validade nacional e
                  reconhecimento no mercado de trabalho.
                </p>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-4">
                    Vantagens do Certificado MEC:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {advantages.map((advantage, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-600">{advantage.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    onClick={openModal}
                    className="font-bold text-green-900 shadow-lg shadow-green-500/20 transition-all hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
                    style={{ backgroundColor: "#c7ffd7" }}
                  >
                    Garantir Minha Vaga <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link
                      href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhes-ies/d96957f455f6405d14c6542552b0f6eb/MzIzMg=="
                      target="_blank"
                    >
                      Ver Credenciamento
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Coluna da Direita */}
              <motion.div className="space-y-6" variants={itemVariants}>
                <Card className="bg-white border-slate-200">
                  <CardHeader className="items-center text-center p-6">
                    <div className="bg-green-100 rounded-full p-2 w-fit mb-3">
                      <ShieldCheck className="h-7 w-7 text-green-700" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">
                      Credenciamento MEC
                    </CardTitle>
                    <CardDescription className="pb-2">
                      Portaria nº 1.234/2023 - Ministério da Educação
                    </CardDescription>
                    <Badge className="bg-green-100 text-green-800 border-green-200 font-medium">
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
                      <Card className="h-full text-center sm:text-left">
                        <CardHeader>
                          <div className="mx-auto sm:mx-0 bg-green-100 rounded-full p-2 w-fit mb-2">
                            {feature.icon}
                          </div>
                          <CardTitle className="text-lg pt-2 text-slate-800">
                            {feature.title}
                          </CardTitle>
                          <CardDescription>
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
