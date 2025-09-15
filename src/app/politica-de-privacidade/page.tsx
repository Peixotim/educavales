"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importa o hook de roteamento
import {
  ShieldCheck,
  FileText,
  Lock,
  Database,
  Mail,
  Globe2,
  ArrowLeft, // Importa o ícone de seta
} from "lucide-react";

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
          <div className="mb-8">
            <a href="/">
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 hover">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </button>
            </a>
          </div>

          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                <ShieldCheck className="h-4 w-4" />
                LGPD & Política de Privacidade
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Transparência e segurança dos seus dados
              </h1>
              <p className="mt-3 max-w-2xl text-slate-600">
                Valorizamos sua privacidade. Nesta página explicamos como
                coletamos, usamos, armazenamos e protegemos seus dados pessoais
                em conformidade com a Lei Geral de Proteção de Dados (Lei nº
                13.709/2018).
              </p>
            </div>

            <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-emerald-600" />
                <p className="text-sm font-semibold text-slate-900">
                  Resumo rápido
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Base legal adequada para cada tratamento</li>
                <li>• Direitos do titular garantidos</li>
                <li>• Segurança, retenção e descarte responsáveis</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Última atualização:{" "}
                <span className="font-medium">15/09/2025</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-[280px,1fr]">
          {/* Índice lateral */}
          <aside className="top-24 h-max rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm backdrop-blur">
            <p className="mb-3 text-sm font-semibold text-slate-900">
              Navegação rápida
            </p>
            <nav className="space-y-2 text-sm">
              {[
                ["introducao", "1. Introdução"],
                ["dados-coletados", "2. Dados que coletamos"],
                ["finalidades", "3. Finalidades e bases legais"],
                ["compartilhamento", "4. Compartilhamento de dados"],
                ["cookies", "5. Cookies e tecnologias similares"],
                ["seguranca", "6. Segurança da informação"],
                ["retencao", "7. Retenção e descarte"],
                ["direitos", "8. Direitos do titular"],
                ["transferencias", "9. Transferências internacionais"],
                ["criancas", "10. Dados de crianças e adolescentes"],
                ["atualizacoes", "11. Atualizações desta política"],
                ["contato", "12. Encarregado (DPO) e contato"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block rounded-md px-2 py-1 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Artigo */}
          <article className="space-y-8">
            <Section
              id="introducao"
              icon={<FileText className="h-5 w-5 text-emerald-600" />}
              title="1. Introdução"
            >
              <p>
                Esta Política de Privacidade descreve como{" "}
                <b>EducaVale Ltda.</b> (“nós”, “nosso”) trata dados pessoais em
                seus websites, aplicativos e serviços. Nosso compromisso é atuar
                em conformidade com a <b>LGPD</b>, garantindo transparência,
                segurança e respeito aos direitos dos titulares.
              </p>
            </Section>

            <Section
              id="dados-coletados"
              icon={<Database className="h-5 w-5 text-emerald-600" />}
              title="2. Dados que coletamos"
            >
              <List
                items={[
                  <>
                    <b>Dados de contato:</b> nome completo, telefone/WhatsApp,
                    e-mail.
                  </>,
                  <>
                    <b>Dados de navegação:</b> IP, identificadores de
                    dispositivo, páginas visitadas, data/horário e origem de
                    tráfego.
                  </>,
                  <>
                    <b>Dados de interesse:</b> área/curso de interesse,
                    interações com formulários.
                  </>,
                  <>
                    <b>Dados de contrato/atendimento:</b> histórico de suporte,
                    informações de matrícula ou contratação (quando aplicável).
                  </>,
                ]}
              />
              <p className="mt-3 text-sm text-slate-500">
                Observação: não solicitamos dados sensíveis desnecessários. Caso
                sejam indispensáveis, trataremos com base legal apropriada e
                medidas de segurança reforçadas.
              </p>
            </Section>

            <Section
              id="finalidades"
              icon={<ShieldCheck className="h-5 w-5 text-emerald-600" />}
              title="3. Finalidades e bases legais"
            >
              <List
                items={[
                  <>
                    <b>
                      Atender solicitações e contatos (Execução de
                      contrato/Procedimentos preliminares):
                    </b>{" "}
                    responder dúvidas, enviar informações sobre cursos e
                    propostas.
                  </>,
                  <>
                    <b>
                      Marketing e comunicação (Consentimento ou Legítimo
                      Interesse):
                    </b>{" "}
                    envio de novidades, campanhas e conteúdos relevantes. Você
                    pode se descadastrar a qualquer momento.
                  </>,
                  <>
                    <b>Melhoria de serviços (Legítimo Interesse):</b> análise de
                    uso para aprimorar funcionalidades e experiência.
                  </>,
                  <>
                    <b>Cumprimento de obrigações legais/regulatórias:</b>{" "}
                    armazenamento de registros, prevenção a fraudes e segurança.
                  </>,
                ]}
              />
            </Section>

            <Section
              id="compartilhamento"
              icon={<Globe2 className="h-5 w-5 text-emerald-600" />}
              title="4. Compartilhamento de dados"
            >
              <p>
                Podemos compartilhar dados com (I){" "}
                <b>parceiros e instituições de ensino</b> para viabilizar seu
                interesse/matrícula; (II) <b>provedores de tecnologia</b>{" "}
                (hospedagem, analytics, envio de e-mails/WhatsApp); (III){" "}
                <b>autoridades</b> quando exigido por lei. Exigimos de terceiros
                medidas adequadas de segurança e conformidade.
              </p>
            </Section>

            <Section
              id="cookies"
              icon={<CookieIcon />}
              title="5. Cookies e tecnologias similares"
            >
              <p>
                Utilizamos cookies para lembrar preferências, entender como você
                usa nossos serviços e personalizar conteúdos. Você pode
                gerenciar cookies pelo seu navegador; porém, isso pode impactar
                a sua experiência.
              </p>
            </Section>

            <Section
              id="seguranca"
              icon={<Lock className="h-5 w-5 text-emerald-600" />}
              title="6. Segurança da informação"
            >
              <p>
                Adotamos medidas técnicas e organizacionais para proteger os
                dados contra acessos não autorizados, perda, alteração ou
                destruição. Embora empreguemos boas práticas do mercado, nenhum
                sistema é 100% imune; por isso, recomendamos que você também
                adote boas práticas de segurança.
              </p>
            </Section>

            <Section
              id="retencao"
              icon={<FileText className="h-5 w-5 text-emerald-600" />}
              title="7. Retenção e descarte"
            >
              <p>
                Mantemos seus dados pelo tempo necessário para cumprir as
                finalidades informadas e as exigências legais. Após esse
                período, realizamos o <b>descarte seguro</b> ou anonimização,
                conforme aplicável.
              </p>
            </Section>

            <Section
              id="direitos"
              icon={<ShieldCheck className="h-5 w-5 text-emerald-600" />}
              title="8. Direitos do titular"
            >
              <List
                items={[
                  <>
                    Confirmação da existência de tratamento e acesso aos dados;
                  </>,
                  <>
                    Correção de dados incompletos, inexatos ou desatualizados;
                  </>,
                  <>
                    Anonimização, bloqueio ou eliminação de dados desnecessários
                    ou excessivos;
                  </>,
                  <>Portabilidade, nos termos da regulamentação;</>,
                  <>Informações sobre compartilhamentos;</>,
                  <>
                    Revogação do consentimento e oposição a tratamentos quando
                    cabível;
                  </>,
                  <>Reclamação à ANPD e órgãos de defesa do consumidor.</>,
                ]}
              />
              <p className="mt-3 text-sm text-slate-600">
                Para exercer seus direitos, consulte a seção “Encarregado (DPO)
                e contato”.
              </p>
            </Section>

            <Section
              id="transferencias"
              icon={<Globe2 className="h-5 w-5 text-emerald-600" />}
              title="9. Transferências internacionais"
            >
              <p>
                Caso haja transferência internacional de dados, adotaremos
                salvaguardas adequadas, como cláusulas contratuais padrão e
                avaliação de nível de proteção, conforme diretrizes da LGPD e da
                ANPD.
              </p>
            </Section>

            <Section
              id="criancas"
              icon={<ShieldCheck className="h-5 w-5 text-emerald-600" />}
              title="10. Dados de crianças e adolescentes"
            >
              <p>
                Nossos serviços não são direcionados a crianças. Caso o
                tratamento seja necessário, observaremos o melhor interesse da
                criança/adolescente e as bases legais aplicáveis, incluindo
                consentimento específico de pelo menos um dos pais ou
                responsável, quando exigido.
              </p>
            </Section>

            <Section
              id="atualizacoes"
              icon={<FileText className="h-5 w-5 text-emerald-600" />}
              title="11. Atualizações desta política"
            >
              <p>
                Esta política pode ser atualizada para refletir mudanças legais,
                tecnológicas ou operacionais. Publicaremos a nova versão com a
                data de atualização no topo desta página.
              </p>
            </Section>

            <Section
              id="contato"
              icon={<Mail className="h-5 w-5 text-emerald-600" />}
              title="12. Encarregado (DPO) e contato"
            >
              <p>
                Se tiver dúvidas, solicitações ou quiser exercer seus direitos,
                entre em contato com nosso Encarregado de Proteção de Dados
                (DPO):
              </p>
              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-slate-800">
                  <b>Encarregado (DPO):</b> Suporte EducaVale
                </p>
                <p className="text-slate-800">
                  <b>E-mail:</b>{" "}
                  <a
                    className="text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-600"
                    href="mailto:privacidade@seudominio.com"
                  >
                    1educavale@gmail.com
                  </a>
                </p>
                <p className="text-slate-800">
                  <b>Endereço:</b> R. Rio Doce, 50 - Professores, Cel.
                  Fabriciano - MG, 35170-112
                </p>
                <p className="text-slate-800">
                  <b>CNPJ:</b> 37.911.890/0001-01
                </p>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Ao utilizar nossos serviços, você declara ter lido e concordado
                com esta Política de Privacidade.
              </p>
            </Section>
          </article>
        </div>
      </section>
    </main>
  );
}

function Section({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-3 flex items-center gap-2">
        {icon}
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      </div>
      <div className="prose max-w-none prose-slate prose-p:leading-relaxed prose-li:marker:text-slate-400">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function CookieIcon() {
  return (
    <svg
      className="h-5 w-5 text-emerald-600"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2a10 10 0 1 0 10 10c0-.34-.02-.67-.05-1.01a3 3 0 0 1-3.94-2.88 3 3 0 0 1-3.15-3.15A3 3 0 0 1 12 2Zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM9 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 1a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 17 16Zm-3-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </svg>
  );
}
