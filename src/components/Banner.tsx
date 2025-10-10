"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Rocket,
  ScrollText,
  Star,
  ArrowRight,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "./lib/utils";
import { submitSubscription } from "./lib/api";

const plans = [
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
const courseAreas = [
  "Arte, Moda e Música",
  "Ciências Agrárias e Veterinária",
  "Ciências Contábeis",
  "Ciências Religiosas",
  "Ciências Sociais",
  "Coaching",
  "Comunicação Social",
  "Educação Física",
  "Educação",
  "Empresarial",
  "Engenharia e Arquitetura",
  "Esportes",
  "Estética",
  "Farmácia",
  "Fisioterapia",
  "Gastronomia",
  "Gestão, Economia e Finanças",
  "Jurídico",
  "Logística",
  "Marketing",
  "MBA",
  "Meio Ambiente",
  "Nutrição",
  "Psicologia",
  "Saúde e Bem-Estar",
  "Segurança Pública",
  "Serviço Social",
  "T.I",
];

const PlansTabContent = ({ onButtonClick }: { onButtonClick: () => void }) => (
  <Card className="shadow-2xl border border-neutral-800 rounded-2xl bg-neutral-900">
    {" "}
    <CardContent className="p-8 space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white">
          {" "}
          Escolha o plano ideal para você
        </h3>
        <p className="text-gray-400">
          {" "}
          Quanto mais você estuda, menos você paga.
        </p>
      </div>
      <div className="space-y-4">
        {plans.map((plan, i) => (
          <Card
            key={i}
            className={cn(
              "relative transition-all bg-neutral-800 border border-neutral-700", // Fundo e borda para cartões internos
              plan.highlight && "border-2 border-emerald-600 shadow-lg"
            )}
          >
            {" "}
            <CardContent className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              {plan.highlight && (
                <Badge className="absolute -top-3 left-4 bg-emerald-700 text-white">
                  {" "}
                  {/* Texto branco para badge */}
                  <Star className="mr-1.5 h-3 w-3" />
                  {plan.badge}
                </Badge>
              )}
              <div className="text-left">
                <p className="font-bold text-white">{plan.title}</p>{" "}
                {/* Alterado para branco */}
                <p className="text-xs text-gray-400">{plan.description}</p>{" "}
                {/* Alterado para cinza mais claro */}
              </div>
              <div className="text-right">
                <p className="text-white">
                  {" "}
                  {/* Alterado para branco */}
                  <span className="text-sm">12x R$</span>
                  <span className="text-4xl font-bold">
                    {plan.price.split(",")[0]}
                  </span>
                  <span className="text-lg font-bold">
                    ,{plan.price.split(",")[1]}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        onClick={onButtonClick}
        className="w-full h-14 rounded-xl bg-emerald-700 text-white text-lg font-bold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40"
      >
        Garantir Minha Vaga <ArrowRight className="ml-2" />
      </Button>
    </CardContent>
  </Card>
);

const InfoTabContent = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    try {
      const formData = new FormData(event.currentTarget);

      //Dados a serem enviados para a API
      const data = {
        name: formData.get("fullName") as string,
        phone: (formData.get("whatsapp") as string).replace(/\D/g, ""),
        areaOfInterest: formData.get("interestArea") as string,
        enterpriseId: Number(process.env.NEXT_PUBLIC_ENTERPRISE_ID), // Mudar o id da empresa
      };

      await submitSubscription(data);
      setStatus("success");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setStatus("error");
    }
  };

  return (
    <Card className="shadow-2xl border border-neutral-800 rounded-2xl bg-neutral-900 min-h-[550px] flex flex-col justify-center">
      {" "}
      {/* Fundo e borda ajustados para tema escuro */}
      <CardContent className="p-8">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center text-center h-full py-10">
            <CheckCircle className="h-16 w-16 text-emerald-600" />
            <h3 className="mt-4 text-2xl font-bold text-white">
              {" "}
              {/* Alterado para branco */}
              Inscrição Enviada!
            </h3>
            <p className="mt-2 text-gray-300">
              {" "}
              {/* Alterado para cinza mais claro */}
              Seus dados foram recebidos. Em breve, um de nossos consultores
              entrará em contato.
            </p>
            <Button
              variant="link"
              onClick={() => setStatus("idle")}
              className="mt-4 text-emerald-600 hover:text-emerald-500" // Ajustado para hover em tema escuro
            >
              Enviar novamente
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">
                {" "}
                Prefere falar com um consultor?
              </h3>
              <p className="text-gray-400">
                {" "}
                Preencha os dados e entraremos em contato.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="fullName"
                placeholder="Seu nome completo"
                className="h-12 rounded-lg bg-neutral-800 text-gray-200 placeholder:text-gray-500 border-neutral-700 focus-visible:ring-emerald-600" // Ajustado para tema escuro
                required
              />

              <Input
                name="whatsapp"
                placeholder="WhatsApp (com DDD)"
                className="h-12 rounded-lg bg-neutral-800 text-gray-200 placeholder:text-gray-500 border-neutral-700 focus-visible:ring-emerald-600" // Ajustado para tema escuro
                required
              />

              <Select name="interestArea" required>
                <SelectTrigger className="h-12 rounded-lg bg-neutral-800 text-gray-200 placeholder:text-gray-500 border-neutral-700 focus-visible:ring-emerald-600">
                  {" "}
                  {/* Ajustado para tema escuro */}
                  <SelectValue placeholder="Escolha sua área de interesse" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700 text-gray-200">
                  {" "}
                  {courseAreas.map((area) => (
                    <SelectItem
                      key={area}
                      value={area}
                      className="hover:bg-neutral-700 focus:bg-neutral-700 data-[state=checked]:bg-emerald-900 data-[state=checked]:text-white" // Item do Select ajustado
                    >
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-12 rounded-lg bg-emerald-700 text-white text-base font-semibold hover:bg-emerald-800"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "QUERO RECEBER INFORMAÇÕES"
                )}
              </Button>
              {status === "error" && (
                <p className="text-sm text-red-500 text-center">
                  Ocorreu um erro. Tente novamente mais tarde.
                </p>
              )}
            </form>
            <div className="flex items-center justify-center gap-6 text-xs text-gray-400 pt-2">
              {" "}
              {/* Alterado para cinza mais claro */}
              <span className="flex items-center gap-1.5">
                <Rocket size={14} className="text-emerald-500" /> Início
                imediato {/* Ícone verde */}
              </span>
              <span className="flex items-center gap-1.5">
                <ScrollText size={14} className="text-emerald-500" />{" "}
                Certificado MEC {/* Ícone verde */}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function HeroPremium() {
  const [activeTab, setActiveTab] = useState("plans");

  return (
    <section className="relative overflow-hidden bg-neutral-900">
      {" "}
      {/* Fundo cinza escuro aplicado aqui */}
      <div className="container mx-auto px-6 py-24 sm:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <Badge
            variant="outline"
            className="border-emerald-700 bg-emerald-900 text-emerald-200 font-semibold py-1 px-3" // Badge ajustado para tema escuro
          >
            <Rocket className="mr-2 h-4 w-4" />
            Oferta Especial - Últimas Vagas
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            {" "}
            {/* Alterado para branco */}
            Transforme sua <br />
            <span className="text-emerald-700">Carreira Hoje</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            {" "}
            {/* Alterado para cinza mais claro */}
            Pós-graduação e MBA reconhecidos pelo MEC. Metodologia inovadora,
            professores especialistas e certificação valorizada pelo mercado.
          </p>
          <ul className="space-y-4">
            {[
              "Certificação reconhecida pelo MEC",
              "Professores especialistas do mercado",
              "Metodologia 100% online",
              "Suporte personalizado",
              "Início imediato",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-200">
                {" "}
                {/* Alterado para cinza mais claro */}
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <span className="text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-12 pt-8">
            <div>
              <p className="text-4xl font-bold text-white">50+</p>{" "}
              {/* Alterado para branco */}
              <p className="text-sm text-gray-400">Cursos</p>{" "}
              {/* Alterado para cinza mais claro */}
            </div>
            <div>
              <p className="text-4xl font-bold text-white">15k+</p>{" "}
              {/* Alterado para branco */}
              <p className="text-sm text-gray-400">Alunos</p>{" "}
              {/* Alterado para cinza mais claro */}
            </div>
            <div>
              <p className="text-4xl font-bold text-white">98%</p>{" "}
              {/* Alterado para branco */}
              <p className="text-sm text-gray-400">Satisfação</p>{" "}
              {/* Alterado para cinza mais claro */}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 bg-neutral-800 border-b border-neutral-700 text-gray-400">
              {" "}
              {/* TabsList ajustada para tema escuro */}
              <TabsTrigger
                value="plans"
                className="data-[state=active]:bg-neutral-900 data-[state=active]:text-white data-[state=active]:shadow-none" // Active tab ajustada
              >
                Nossos Planos
              </TabsTrigger>
              <TabsTrigger
                value="info"
                className="data-[state=active]:bg-neutral-900 data-[state=active]:text-white data-[state=active]:shadow-none" // Active tab ajustada
              >
                Receba Informações
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="mt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "plans" ? (
                  <PlansTabContent onButtonClick={() => setActiveTab("info")} />
                ) : (
                  <InfoTabContent />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
