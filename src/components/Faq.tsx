"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronRight } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "Os certificados são reconhecidos pelo MEC?",
    answer:
      "Sim. Todos os nossos certificados de pós-graduação lato sensu são emitidos por instituições de ensino superior credenciadas pelo Ministério da Educação (MEC), garantindo validade em todo o território nacional.",
  },
  {
    id: 2,
    question: "Preciso fazer TCC (Trabalho de Conclusão de Curso)?",
    answer:
      "Não. De acordo com a resolução CNE/CES nº 1 de 6 de abril de 2018, o Trabalho de Conclusão de Curso (TCC) tornou-se um componente curricular opcional para cursos de pós-graduação lato sensu. Nossos cursos não exigem a entrega de TCC.",
  },
  {
    id: 3,
    question: "Em quanto tempo consigo concluir a pós-graduação?",
    answer:
      "Oferecemos cursos com durações flexíveis, a partir de 3 meses. O tempo de conclusão pode variar dependendo do curso escolhido e do seu ritmo de estudos, permitindo que você avance conforme sua disponibilidade.",
  },
  {
    id: 4,
    question: "Como funcionam as aulas? São 100% online?",
    answer:
      "Sim, nossos cursos são 100% online. Você terá acesso a uma plataforma de aprendizado moderna, com videoaulas, materiais de apoio e suporte de tutores. Estude onde e quando quiser, com total flexibilidade.",
  },
  {
    id: 5,
    question: "Quais são os pré-requisitos para me matricular?",
    answer:
      "O principal pré-requisito para ingressar em um de nossos cursos de pós-graduação é possuir um diploma de graduação (bacharelado, licenciatura ou tecnólogo) reconhecido pelo MEC.",
  },
  {
    id: 6,
    question: "Como serei avaliado(a) durante o curso?",
    answer:
      "A avaliação é composta por atividades e provas online realizadas ao final de cada módulo ou disciplina. O sistema é pensado para validar seu aprendizado de forma prática e objetiva, sem a necessidade de encontros presenciais.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-16 sm:py-24 bg-neutral-900">
      {" "}
      {/* Fundo escuro na seção */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="bg-neutral-800 shadow-xl rounded-2xl overflow-hidden border border-neutral-700">
          {" "}
          {/* Fundo e borda do container principal */}
          <div className="p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-white tracking-tight flex items-center justify-center gap-3">
              {" "}
              {/* Texto branco */}
              <HelpCircle className="w-7 h-7 text-emerald-500" />{" "}
              {/* Ícone emerald */}
              <span>Perguntas Frequentes</span>
            </h3>
            <p className="text-center text-gray-300 mt-2 text-base sm:text-lg">
              {" "}
              {/* Texto cinza claro */}
              Tire suas principais dúvidas sobre nossos cursos de pós-graduação.
            </p>
          </div>
          <div className="flex flex-col md:flex-row border-t border-neutral-700">
            {" "}
            {/* Borda do divisor */}
            <div className="flex md:flex-col justify-around md:justify-start p-4 md:p-6 border-b-2 md:border-b-0 md:border-r-2 border-neutral-700">
              {" "}
              {/* Bordas do menu de perguntas */}
              {faqData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(item.id)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 text-sm sm:text-base font-semibold ${
                    activeIndex === item.id
                      ? "text-white scale-105" // Texto branco para ativo
                      : "text-gray-300 hover:bg-neutral-700 hover:text-white" // Texto cinza para inativo, hover com fundo e texto branco
                  }`}
                  style={{
                    backgroundColor:
                      activeIndex === item.id
                        ? "rgb(13, 107, 72)"
                        : "transparent", // emerald-700 para ativo
                  }}
                >
                  {item.question}
                </button>
              ))}
            </div>
            <div className="flex-1 p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[220px] sm:min-h-[200px]"
                >
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-3 text-white">
                    {" "}
                    {/* Texto branco */}
                    <ChevronRight className="w-6 h-6 p-1 rounded-full bg-emerald-700/20 text-emerald-300 flex-shrink-0" />{" "}
                    {/* Ícone emerald */}
                    <span>{faqData[activeIndex - 1].question}</span>
                  </h4>
                  <div className="text-gray-300 leading-relaxed text-base sm:text-lg space-y-3">
                    {" "}
                    {/* Texto cinza claro */}
                    <p>{faqData[activeIndex - 1].answer}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
