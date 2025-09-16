"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShow(true)
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 z-50 max-w-md">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-lg p-5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-green-600" />
          <h2 className="font-semibold text-slate-900 text-lg">
            Nós usamos cookies
          </h2>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Utilizamos cookies para melhorar sua experiência, analisar o tráfego e
          personalizar conteúdos. Leia nossa{" "}
          <Link
            href="/politica-de-privacidade"
            target="_blank"
            className="text-green-700 font-medium underline underline-offset-2 hover:text-green-800"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
