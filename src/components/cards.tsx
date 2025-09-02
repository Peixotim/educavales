// components/CardPage.tsx

import { Clock, Users, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { slugify } from "@/utils/slugify"; // Garanta que o caminho para seu slugify está correto

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
  // 1. Cria uma URL amigável a partir do título do curso
  const courseSlug = slugify(title);

  return (
    <div className="group flex h-full w-full max-w-sm transform flex-col rounded-2xl border border-slate-200 bg-white p-7 font-sans shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {category}
        </span>
        {isPopular && (
          <span
            className="flex items-center rounded-full px-3 py-1 text-xs font-semibold text-green-900 ring-1 ring-inset ring-green-700/20"
            style={{ backgroundColor: "#c7ffd7" }}
          >
            Mais Popular
          </span>
        )}
        {isLaunch && (
          <span className="flex items-center rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-inset ring-slate-500/20">
            Lançamento
          </span>
        )}
      </div>
      <div className="flex flex-grow flex-col">
        <h2 className="mb-2 text-2xl font-bold text-slate-800 transition-colors">
          {title}
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-500">
          {description}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {benneficies.map((item, index) => (
            <span
              key={index}
              className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-6 text-slate-600">
          {duration && (
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-slate-400" />
              <span className="text-sm font-medium">{duration}</span>
            </div>
          )}
          {studentCount && (
            <div className="flex items-center gap-2">
              <Users size={16} className="text-slate-400" />
              <span className="text-sm font-medium">{studentCount} alunos</span>
            </div>
          )}
          {certifiedByMEC && (
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-slate-400" />
              <span className="text-sm font-medium">Certificado MEC</span>
            </div>
          )}
        </div>
        <div className="mt-auto">
          {/* 2. O Link aponta para a URL dinâmica correta */}
          <Link
            href={`/cursos/${courseSlug}`} // Este caminho está correto para a página que criamos
            className="group/button flex w-full items-center justify-center gap-3 rounded-lg bg-slate-900 px-6 py-3 text-center font-bold text-white shadow-sm shadow-slate-900/30 transition-all duration-300 hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-700/40"
          >
            <span>Ver Detalhes da Area</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
