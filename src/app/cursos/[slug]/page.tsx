"use client";
import { useState } from "react";
import { useParams, notFound, useRouter } from "next/navigation";
import { slugify } from "@/utils/slugify";
import { motion } from "framer-motion";
import StoragedAreaInfo from "@/utils/dadosCurso";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
  ArrowLeft,
  CheckCircle2,
  Award,
  Users,
  Star,
  ArrowRight,
  Clock,
  MonitorPlay,
  BookX,
  ShieldCheck,
} from "lucide-react";
import Modal from "@/components/modalContactsCourses/modal";
import SubscriptionForm from "@/components/modalContactsCourses/SubscriptionForm";
import { submitSubscription } from "@/components/lib/api";

type Plan = {
  title: string;
  price: string;
  description: string;
  highlight: boolean;
  badge?: string;
};
const defaultPlans: Plan[] = [
  {
    title: "1 Pós-Graduação",
    price: "23,90",
    description: "no cartão de crédito sem juros",
    highlight: false,
  },
  {
    title: "2 Pós-Graduações",
    price: "21,90",
    description: "no cartão de crédito sem juros | cada curso",
    highlight: false,
  },
  {
    title: "3 Pós-Graduações",
    price: "18,50",
    description: "no cartão de crédito sem juros | cada curso",
    highlight: true,
    badge: "Melhor Oferta",
  },
];
const engineeringPlans: Plan[] = [
  {
    title: "1 Pós-Graduação",
    price: "45,84",
    description: "no cartão de crédito sem juros",
    highlight: false,
  },
];

export default function PaginaDeDetalhesDoCurso() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const allAreaDetails = StoragedAreaInfo();
  const areaInfo = allAreaDetails.find((area) => slugify(area.title) === slug);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"form" | "loading" | "success">(
    "form"
  );
  const [whatsappMessage, setWhatsappMessage] = useState("");
  const WHATSAPP_NUMBER = "5531991398980";

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
        fullerName: formData.get("name") as string,
        phone: (formData.get("whatsapp") as string).replace(/\D/g, ""),
        areaOfInterest: formData.get("interestArea") as string,
        enterpriseId: Number(process.env.NEXT_PUBLIC_ENTERPRISE_ID) || 1, //Mudar o id da empresa
      };

      console.log("🚀 Enviando para a API:", data);
      await submitSubscription(data);

      const message = `Olá! Tenho interesse na área de ${areaInfo?.title}. Meu nome é ${data.fullerName}.`;
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

  if (!areaInfo) {
    notFound();
  }

  const currentPlans =
    areaInfo.title === "Engenharia e Arquitetura – Projete o Futuro"
      ? engineeringPlans
      : defaultPlans;
  const keyInfoCards = [
    {
      icon: <ShieldCheck />,
      label: "Credenciamento",
      value: areaInfo.keyInfo.mecRecognition,
    },
    { icon: <BookX />, label: "TCC", value: areaInfo.keyInfo.tcc },
    { icon: <Clock />, label: "Duração", value: areaInfo.keyInfo.duration },
    {
      icon: <MonitorPlay />,
      label: "Modalidade",
      value: areaInfo.keyInfo.modality,
    },
  ];

  return (
    <>
      <div className="bg-slate-50">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge
                variant="outline"
                className="border-green-300 bg-green-100 text-green-800 font-semibold"
              >
                Área de Especialização
              </Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
                {areaInfo.title}
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {keyInfoCards.map((info, i) => (
                  <Card
                    key={i}
                    className="bg-white border-slate-200 text-center"
                  >
                    <CardContent className="p-4">
                      <div className="mx-auto h-10 w-10 mb-2 flex items-center justify-center text-green-600">
                        {info.icon}
                      </div>
                      <p className="text-sm font-bold text-slate-800">
                        {info.label}
                      </p>
                      <p className="text-xs text-slate-500">{info.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Separator className="my-10" />
              <div className="space-y-12">
                <div id="o-que-voce-vai-aprender">
                  <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                    <Award className="text-green-600" />O que você vai aprender
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {areaInfo.whatYouWillLearn.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {areaInfo.sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                      {section.title.includes("Objetivos") ? (
                        <Award className="text-green-600" />
                      ) : (
                        <Users className="text-green-600" />
                      )}
                      {section.title}
                    </h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
                {areaInfo.depoiments && (
                  <div className="border-t border-slate-200 pt-10">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                      <Star className="text-amber-500" />
                      Depoimento de Aluno
                    </h2>
                    <Card className="bg-white">
                      <CardContent className="p-6 italic text-slate-600">
                        <p>{areaInfo.depoiments.texto}</p>
                        <footer className="mt-4 not-italic text-right">
                          <p className="font-bold text-slate-800">
                            {areaInfo.depoiments.autor}
                          </p>
                          <p className="text-sm text-slate-500">
                            {areaInfo.depoiments.cargo}
                          </p>
                        </footer>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Card className="shadow-2xl sticky top-8 border-gray-100 rounded-2xl">
                <CardHeader className="text-center bg-slate-900 text-white p-6 rounded-t-2xl">
                  <h3 className="text-2xl font-bold">Plano Ideal para Você</h3>
                  <p className="text-slate-300">
                    Quanto mais você estuda, menos você paga.
                  </p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {currentPlans.map((plan, i) => (
                    <div
                      key={i}
                      className={`relative rounded-lg p-4 border transition-all ${
                        plan.highlight
                          ? "border-2 border-green-500 bg-white"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      {plan.highlight && plan.badge && (
                        <Badge className="absolute -top-3 left-4 bg-green-600">
                          <Star className="mr-1.5 h-3 w-3" />
                          {plan.badge}
                        </Badge>
                      )}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                        <div>
                          <p className="font-bold text-slate-800">
                            {plan.title}
                          </p>
                          <p className="text-xs text-slate-500">
                            {plan.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-800">
                            <span className="text-sm">12x </span>
                            <span className="text-sm">R$</span>
                            <span className="text-4xl font-bold">
                              {plan.price.split(",")[0]}
                            </span>
                            <span className="text-lg font-bold">
                              ,{plan.price.split(",")[1]}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button
                    onClick={openModal}
                    className="w-full h-14 mt-4 rounded-xl bg-green-600 text-white text-lg font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40"
                  >
                    Saiba mais <ArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
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
