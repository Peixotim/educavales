"use client";
import { useState } from "react";
import { Header } from "@/components/sidebar";
import { MecCertificationSection } from "@/components/Mec";
import Footer from "@/components/footer";
import HeroPremium from "@/components/Banner";
import Storaged from "@/utils/storaged";
import SearchSection from "@/components/search";
import CardPage from "@/components/cards";
import Contact from "@/components/contact";
import FaqSection from "@/components/Faq";

export default function Home() {
  const allCourses = Storaged();
  const CARDS_POR_PAGINA = 6;

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("todos");
  const [visibleCount, setVisibleCount] = useState(CARDS_POR_PAGINA);

  const handleFilterChange = (newFilter: string) => {
    setActiveFilter(newFilter);
    setVisibleCount(CARDS_POR_PAGINA);
  };

  const filteredCards = allCourses.filter((card) => {
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch =
      (card.title || "").toLowerCase().includes(searchTermLower) ||
      (card.description || "").toLowerCase().includes(searchTermLower);

    let matchesFilter = true;
    if (activeFilter === "isPopular" || activeFilter === "isLaunch") {
      matchesFilter = card[activeFilter] === true;
    } else if (activeFilter === "crea") {
      const isCreaRelated =
        card.category.toLowerCase().includes("engenharia") ||
        card.category.toLowerCase().includes("arquitetura");
      matchesFilter = isCreaRelated;
    }

    return matchesSearch && matchesFilter;
  });

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + CARDS_POR_PAGINA);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mt-2">
        <HeroPremium />
        <section className=" bg-neutral-900">
          <SearchSection
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </section>

        <section id="cursos" className="py-12 lg:py-16 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4" id="cursos">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Nossas Especializações
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {filteredCards.slice(0, visibleCount).map((card, i) => (
                <CardPage key={i} {...card} />
              ))}
            </div>

            <div className="mt-12 text-center">
              {visibleCount < filteredCards.length && (
                <button
                  onClick={handleLoadMore}
                  className="bg-emerald-950 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:bg-green-900 hover:shadow-lg hover:shadow-slate-700/40"
                >
                  Carregar Mais Areas
                </button>
              )}
            </div>
          </div>
        </section>
        <div id="mec">
          <MecCertificationSection />
        </div>
        <div id="Faq">
          <FaqSection />
        </div>
        <div id="contato">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
