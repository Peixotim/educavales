"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <div className="w-80 h-80 relative mb-6">
          <Image
            src="/images/404.gif"
            alt="Página não encontrada"
            fill
            className="object-contain"
          />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 max-w-lg"
        >
          <h1 className="text-4xl font-bold text-green-600 mb-2">
            Oops! Página não encontrada
          </h1>
          <p className="text-gray-700 mb-6">
            Parece que você se perdeu pelo caminho... Não se preocupe, nós vamos
            te guiar de volta.
          </p>

          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3 text-lg flex items-center gap-2 shadow-lg"
          >
            <Link href="/">
              <Home className="w-5 h-5" />
              Voltar para Início
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}
