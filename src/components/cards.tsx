import { Clock, Users, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

export interface CardPageProps {
  title: string;
  description: string;
  category: string;
  benneficies: string[];
  isPopular?: boolean;
  isLaunch?: boolean;
  duration?: string;
  studentCount?: string;
  certifiedByMEC?: boolean;
}

export default function CardPage({
  title,
  description,
  category,
  benneficies,
  isPopular,
  isLaunch,
  duration,
  studentCount,
  certifiedByMEC,
}: CardPageProps) {
  const courseSlug = slugify(title);

  return (
    <div className="group flex h-full w-full max-w-sm transform flex-col rounded-2xl border border-neutral-700 bg-neutral-800 p-7 font-sans shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
      {" "}
      {/* Fundo e borda do card ajustados */}
      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-md bg-neutral-700 px-3 py-1 text-xs font-semibold text-gray-200">
          {" "}
          {/* Cor do badge de categoria ajustado */}
          {category}
        </span>
        {isPopular && (
          <span
            className="flex items-center rounded-full px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-inset ring-emerald-700/20" // Cores do badge 'Mais Popular' ajustadas
            style={{ backgroundColor: "rgb(25, 110, 83, 0.2)" }} // Cor de fundo do badge 'Mais Popular' para combinar com emerald-700/20
          >
            Mais Popular
          </span>
        )}
        {isLaunch && (
          <span className="flex items-center rounded-full bg-neutral-700 px-3 py-1 text-xs font-semibold text-gray-200 ring-1 ring-inset ring-neutral-500/20">
            {" "}
            {/* Cores do badge 'Lançamento' ajustadas */}
            Lançamento
          </span>
        )}
      </div>
      <div className="flex flex-grow flex-col">
        <h2 className="mb-2 text-2xl font-bold text-white transition-colors">
          {" "}
          {/* Cor do título ajustada para branco */}
          {title}
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-gray-300">
          {" "}
          {/* Cor da descrição ajustada */}
          {description}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {benneficies.map((item, index) => (
            <span
              key={index}
              className="rounded-md bg-neutral-700 px-3 py-1 text-xs font-medium text-gray-200" // Cores dos benefícios ajustadas
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-neutral-700 pt-6 text-gray-300">
          {" "}
          {/* Borda e texto ajustados */}
          {duration && (
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gray-400" />{" "}
              {/* Cor do ícone ajustada */}
              <span className="text-sm font-medium">{duration}</span>
            </div>
          )}
          {studentCount && (
            <div className="flex items-center gap-2">
              <Users size={16} className="text-gray-400" />{" "}
              {/* Cor do ícone ajustada */}
              <span className="text-sm font-medium">{studentCount} alunos</span>
            </div>
          )}
          {certifiedByMEC && (
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-gray-400" />{" "}
              {/* Cor do ícone ajustada */}
              <span className="text-sm font-medium">Certificado MEC</span>
            </div>
          )}
        </div>
        <div className="mt-auto">
          <Link
            href={`/cursos/${courseSlug}`}
            className="group/button flex w-full items-center justify-center gap-3 rounded-lg bg-emerald-700 px-6 py-3 text-center font-bold text-white shadow-sm shadow-emerald-600/30 transition-all duration-300 hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-600/40" // Cores do botão ajustadas
          >
            <span>Ver Detalhes da Area</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
