import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4">
        <div className="py-12 border-b border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Transforme sua Carreira Hoje
              </h2>
              <p>
                Receba insights, notícias sobre cursos e descontos exclusivos
                direto no seu e-mail.
              </p>
            </div>
            <form className="w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-grow w-full px-4 py-3 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
                />
                <button
                  type="submit"
                  className="bg-[#16a34a] text-white font-bold px-6 py-3 rounded-md hover:bg-green-700 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Inscrever</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#16a34a]/10 rounded-lg flex items-center justify-center ring-1 ring-[#16a34a]/20">
                <span className="text-[#16a34a] font-bold text-2xl">E</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">EducaVale</h3>
                <p className="text-xs text-slate-500">
                  Pós-graduação de Excelência
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Transformando vidas através da educação. Há mais de 5 anos
              formando os melhores profissionais do mercado.
            </p>
            <div className="flex space-x-3 pt-2">
              {[
                {
                  href: "https://www.instagram.com/educavale.oficial/",
                  label: "Instagram",
                  Icon: Instagram,
                },
                {
                  href: "https://www.facebook.com/Educavale",
                  label: "Facebook",
                  Icon: Facebook,
                },
                {
                  href: "https://api.whatsapp.com/send?phone=553192994899",
                  label: "Whatsapp",
                  Icon: MessageCircle,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#16a34a] hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white tracking-wider mb-6">
              Cursos
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                "Área da Saúde",
                "Administração & Gestão",
                "Tecnologia e Informática",
                "Engenharia & Manutenção",
                "Construção e Infraestrutura",
              ].map((curso) => (
                <li key={curso}>
                  <a
                    href="#cursos"
                    className="hover:text-[#16a34a] transition-colors"
                  >
                    {curso}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white tracking-wider mb-6">
              Links Úteis
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#sobrenos"
                  className="hover:text-[#16a34a] transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-[#16a34a] transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-privacidade"
                  className="hover:text-[#16a34a] transition-colors"
                >
                  Politicas de Privacidade
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white tracking-wider mb-6">
              Entre em Contato
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#16a34a]" />
                <span>R. Rio Doce, 50 - Professores, Cel. Fabriciano - MG</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#16a34a]" />
                <a
                  href="mailto:contato@tecminas.com"
                  className="hover:text-[#16a34a] transition-colors"
                >
                  1educavale@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#16a34a]" />
                <a
                  href="tel:+5531999999999"
                  className="hover:text-[#16a34a] transition-colors"
                >
                  (31) 99139-8980
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 py-8 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} EducaVale. Todos os direitos
            reservados.
          </p>
          <p className="text-sm text-slate-500">CPNJ: 37.911.890/0001-01</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
