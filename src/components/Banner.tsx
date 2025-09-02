"use client";

import { useState } from "react";
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
import { submitSubscription2 as submitSubscription } from "./lib/api2";

// --- Dados e Componentes de Abas ---

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
  <Card className="shadow-2xl border-gray-100 rounded-2xl">
    <CardContent className="p-8 space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900">
          Escolha o plano ideal para você
        </h3>
        <p className="text-slate-500">
          Quanto mais você estuda, menos você paga.
        </p>
      </div>
      <div className="space-y-4">
        {plans.map((plan, i) => (
          <Card
            key={i}
            className={cn(
              "relative transition-all",
              plan.highlight && "border-2 border-green-500 shadow-lg"
            )}
          >
            <CardContent className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              {plan.highlight && (
                <Badge className="absolute -top-3 left-4 bg-green-600">
                  <Star className="mr-1.5 h-3 w-3" />
                  {plan.badge}
                </Badge>
              )}
              <div>
                <p className="font-bold text-slate-800">{plan.title}</p>
                <p className="text-xs text-slate-500">{plan.description}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-800">
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
        className="w-full h-14 rounded-xl bg-green-600 text-white text-lg font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40"
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
      const data = {
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        whatsapp: (formData.get("whatsapp") as string).replace(/\D/g, ""),
        interestArea: formData.get("interestArea") as string,
      };

      await submitSubscription(data);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <Card className="shadow-2xl border border-gray-100 rounded-2xl min-h-[550px] flex flex-col justify-center">
      <CardContent className="p-8">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center text-center h-full py-10">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Inscrição Enviada!
            </h3>
            <p className="mt-2 text-slate-600">
              Seus dados foram recebidos. Em breve, um de nossos consultores
              entrará em contato.
            </p>
            <Button
              variant="link"
              onClick={() => setStatus("idle")}
              className="mt-4 text-green-600"
            >
              Enviar novamente
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900">
                Prefere falar com um consultor?
              </h3>
              <p className="text-slate-500">
                Preencha os dados e entraremos em contato.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="fullName"
                placeholder="Seu nome completo"
                className="h-12 rounded-lg"
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Seu melhor e-mail"
                className="h-12 rounded-lg"
                required
              />
              <Input
                name="whatsapp"
                placeholder="WhatsApp (com DDD)"
                className="h-12 rounded-lg"
                required
              />
              <Select name="interestArea" required>
                <SelectTrigger className="h-12 rounded-lg">
                  <SelectValue placeholder="Escolha sua área de interesse" />
                </SelectTrigger>
                <SelectContent>
                  {courseAreas.map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-12 rounded-lg bg-green-600 text-white text-base font-semibold hover:bg-green-700"
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
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500 pt-2">
              <span className="flex items-center gap-1.5">
                <Rocket size={14} /> Início imediato
              </span>
              <span className="flex items-center gap-1.5">
                <ScrollText size={14} /> Certificado MEC
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
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 sm:py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Lado Esquerdo (Conteúdo) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <Badge
            variant="outline"
            className="border-green-300 bg-green-100 text-green-800 font-semibold py-1 px-3"
          >
            <Rocket className="mr-2 h-4 w-4" />
            Oferta Especial - Últimas Vagas
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Transforme sua <br />
            <span className="text-green-600">Carreira Hoje</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
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
              <li key={i} className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-12 pt-8">
            <div>
              <p className="text-4xl font-bold text-slate-900">50+</p>
              <p className="text-sm text-slate-500">Cursos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">15k+</p>
              <p className="text-sm text-slate-500">Alunos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">98%</p>
              <p className="text-sm text-slate-500">Satisfação</p>
            </div>
          </div>
        </motion.div>

        {/* Lado Direito (Ofertas e Formulário) */}
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
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="plans">Nossos Planos</TabsTrigger>
              <TabsTrigger value="info">Receba Informações</TabsTrigger>
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
