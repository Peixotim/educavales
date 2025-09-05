"use client";

import { useState } from "react";
import {
  Send,
  ChevronDown,
  CheckCircle,
  Loader2,
  MessageCircle,
} from "lucide-react";

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center h-80 text-center">
    <Loader2 className="h-12 w-12 text-green-500 animate-spin" />
    <p className="mt-4 text-lg font-medium text-slate-600">
      Enviando seus dados...
    </p>
  </div>
);
const SuccessState = ({
  onSuccessRedirect,
  onClose,
}: {
  onSuccessRedirect: () => void;
  onClose: () => void;
}) => (
  <div className="flex flex-col items-center justify-center h-80 text-center">
    <CheckCircle className="h-16 w-16 text-green-500" />
    <h2 className="mt-4 text-3xl font-bold text-slate-800">Dados Enviados!</h2>
    <p className="mt-2 text-slate-600">
      Obrigado! Para agilizar seu atendimento, clique no botão abaixo para nos
      chamar no WhatsApp.
    </p>
    <div className="mt-8 w-full flex flex-col sm:flex-row gap-3">
      <button
        onClick={onClose}
        className="w-full sm:w-auto px-6 py-3 text-slate-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
      >
        Fechar
      </button>
      <button
        onClick={onSuccessRedirect}
        className="w-full flex-1 px-6 py-3 flex items-center justify-center gap-2 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all"
      >
        <MessageCircle size={18} />
        <span>Conversar no WhatsApp</span>
      </button>
    </div>
  </div>
);

//Props do formulario
type SubscriptionFormProps = {
  status: "form" | "loading" | "success";
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  onSuccessRedirect?: () => void;
};

const areasDeInteresse = [
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

export default function SubscriptionForm({
  status,
  onSubmit,
  onCancel,
  onSuccessRedirect,
}: SubscriptionFormProps) {
  const inputStyle =
    "w-full px-4 py-3 bg-slate-100 border-2 border-transparent rounded-lg placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all";
  const [whatsapp, setWhatsapp] = useState("");

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    let formattedValue = rawValue.substring(0, 11);
    if (formattedValue.length > 2)
      formattedValue = `(${formattedValue.substring(
        0,
        2
      )}) ${formattedValue.substring(2)}`;
    if (formattedValue.length > 8)
      formattedValue = `(${formattedValue.substring(
        0,
        2
      )}) ${formattedValue.substring(2, 7)}-${formattedValue.substring(7)}`;
    setWhatsapp(formattedValue);
  };

  if (status === "loading") return <LoadingState />;
  if (status === "success" && onSuccessRedirect)
    return (
      <SuccessState onSuccessRedirect={onSuccessRedirect} onClose={onCancel} />
    );

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-800">Fale Conosco</h2>
      <p className="text-slate-500 mt-2 mb-6">
        Preencha seus dados para iniciar uma conversa.
      </p>

      <form onSubmit={onSubmit} className="text-left">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Nome Completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputStyle}
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              className={inputStyle}
              placeholder="(00) 00000-0000"
              value={whatsapp}
              onChange={handleWhatsappChange}
            />
          </div>

          <div>
            <label
              htmlFor="interestArea"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Área de Interesse <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="interestArea"
                name="interestArea"
                required
                defaultValue=""
                className="w-full appearance-none px-4 py-3 bg-slate-100 border-2 border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/20"
              >
                <option value="" disabled>
                  Selecione uma área
                </option>
                {areasDeInteresse.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-8">
          <button
            type="button"
            onClick={onCancel}
            className="w-full sm:w-auto px-6 py-3 text-slate-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-full flex-1 px-6 py-3 flex items-center justify-center gap-2 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700"
          >
            <Send size={18} />
            <span>Enviar e ir para WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
}
