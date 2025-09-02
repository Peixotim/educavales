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
    // MUDANÇA: Fundo da seção agora é um cinza bem claro para dar profundidade
    <section className="py-16 sm:py-24">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* MUDANÇA: Container principal agora é branco, com borda e sombra suaves */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
          <div className="p-6 md:p-8">
            {/* MUDANÇA: Cores do título e subtítulo ajustadas para o tema light */}
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 tracking-tight flex items-center justify-center gap-3">
              <HelpCircle className="w-7 h-7 text-green-600" />
              <span>Perguntas Frequentes</span>
            </h3>
            <p className="text-center text-slate-600 mt-2 text-base sm:text-lg">
              Tire suas principais dúvidas sobre nossos cursos de pós-graduação.
            </p>
          </div>

          <div className="flex flex-col md:flex-row border-t border-slate-200">
            {/* MUDANÇA: Cor da borda da coluna de perguntas */}
            <div className="flex md:flex-col justify-around md:justify-start p-4 md:p-6 border-b-2 md:border-b-0 md:border-r-2 border-slate-200">
              {faqData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(item.id)}
                  // MUDANÇA: Estilos dos botões ATIVO e INATIVO refeitos para o tema light
                  className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 text-sm sm:text-base font-semibold ${
                    activeIndex === item.id
                      ? "text-slate-900 scale-105" // O fundo verde é aplicado via style abaixo
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                  style={{
                    backgroundColor:
                      activeIndex === item.id ? "#c7ffd7" : "transparent",
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
                  {/* MUDANÇA: Cores do texto da resposta ajustadas para o tema light */}
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-3 text-slate-800">
                    <ChevronRight className="w-6 h-6 p-1 rounded-full bg-green-500/20 text-green-700 flex-shrink-0" />
                    <span>{faqData[activeIndex - 1].question}</span>
                  </h4>
                  <div className="text-slate-600 leading-relaxed text-base sm:text-lg space-y-3">
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
