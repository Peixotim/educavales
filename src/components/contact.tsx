"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Instagram, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactDetails = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      label: "Telefone Suporte",
      value: "(31) 98681-3351",
      href: "tel:+5531986813351",
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      label: "E-mail para Contato",
      value: "ilconsultoria@outlook.com",
      href: "mailto:ilconsultoria@outlook.com",
    },
    {
      icon: <Instagram className="h-6 w-6 text-green-600" />,
      label: "Nosso Instagram",
      value: "@educavale.oficial",
      href: "https://www.instagram.com/educavale.oficial",
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      label: "Nosso Endereço",
      value: "Canaã dos Carajás, 94, Bairro Vale Dourado, Pará",
    },
  ];

  // Estados para armazenar os valores dos campos do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Função que é chamada ao enviar o formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Seu número de WhatsApp (código do país + DDD + número)
    const whatsappNumber = "5531986813351";

    // Monta a mensagem final com os dados dos estados
    const finalMessage = `Olá! Meu nome é ${name} (email: ${email}) e meu questionamento é: "${message}"`;

    // Codifica a mensagem para ser usada em uma URL
    const encodedMessage = encodeURIComponent(finalMessage);

    // Cria o link completo do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Coluna da Esquerda: Informações e Contatos Diretos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <span className="text-green-600 font-semibold">Fale Conosco</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mt-2">
                Estamos aqui para ajudar.
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Tem alguma dúvida sobre nossos cursos, matrículas ou parcerias?
                Escolha um dos canais abaixo ou nos envie uma mensagem
                diretamente pelo formulário.
              </p>
            </div>

            <Separator />

            <div className="space-y-6">
              {contactDetails.map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="flex-shrink-0 bg-green-100 text-green-700 rounded-lg p-3">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-800">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-green-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-600">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coluna da Direita: Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Card className="shadow-2xl rounded-2xl border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Envie uma Mensagem
                </CardTitle>
                <CardDescription>
                  Nossa equipe responderá o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-700"
                    >
                      Seu Nome
                    </label>
                    <Input
                      id="name"
                      placeholder="Digite seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-700"
                    >
                      Seu E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="exemplo@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-slate-700"
                    >
                      Sua Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Escreva sua dúvida ou mensagem aqui..."
                      className="min-h-[120px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-base font-bold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
