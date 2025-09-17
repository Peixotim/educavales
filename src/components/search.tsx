import { Search, List, Flame, Star, Award } from "lucide-react";

interface SearchSectionProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function SearchSection({
  searchTerm,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: SearchSectionProps) {
  const filters = [
    { key: "todos", label: "Todas as Areas", Icon: List },
    { key: "isPopular", label: "Mais Populares", Icon: Flame },
    { key: "isLaunch", label: "Lançamentos", Icon: Star },
    { key: "crea", label: "Cursos CREA", Icon: Award },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-20 text-center bg-neutral-900">
      {" "}
      {/* Adicionado fundo escuro */}
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
        {" "}
        {/* Alterado para branco */}
        Encontre seu Curso Ideal
      </h2>
      <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-300">
        {" "}
        {/* Alterado para cinza claro */}
        Explore nossa ampla gama de cursos de pós-graduação e encontre o que
        melhor se adapta aos seus objetivos profissionais. Use os filtros para
        refinar sua busca.
      </p>
      <div className="relative mt-10">
        <div
          className="flex w-full max-w-3xl mx-auto rounded-xl bg-neutral-800 shadow-lg shadow-neutral-700/60 overflow-hidden ring-1 ring-neutral-700
                     focus-within:ring-2 focus-within:ring-emerald-600 transition-all duration-300" // Fundo, sombra, anel e foco ajustados
        >
          <input
            type="text"
            placeholder="Buscar por área, curso ou palavra-chave..."
            className="flex-grow w-full px-5 py-4 bg-transparent text-lg outline-none text-gray-200 placeholder-gray-500" // Texto e placeholder ajustados
            value={searchTerm}
            onChange={onSearchChange}
          />
          <button className="bg-emerald-700 px-6 text-white flex items-center justify-center hover:bg-emerald-800 transition-colors">
            {" "}
            {/* Botão ajustado */}
            <Search size={24} />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
        {filters.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 border ${
              activeFilter === key
                ? "bg-emerald-700 text-white border-transparent scale-105 shadow-md shadow-emerald-700/20" // Botão ativo ajustado
                : "bg-neutral-800 text-gray-300 border-neutral-700 hover:bg-neutral-700 hover:border-neutral-600" // Botão inativo ajustado
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
