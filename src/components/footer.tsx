import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

// --- Data Definitions ---
const socialLinksData = [
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
];

const coursesData = [
  "Área da Saúde",
  "Administração & Gestão",
  "Tecnologia e Informática",
  "Engenharia & Manutenção",
  "Construção e Infraestrutura",
];

const usefulLinksData = [
  { label: "Sobre Nós", href: "#sobrenos" },
  { label: "Contato", href: "#contato" },
  { label: "Politicas de Privacidade", href: "/politica-de-privacidade" },
];

const contactInfoData = [
  {
    Icon: MapPin,
    text: "R. Rio Doce, 50 - Professores, Cel. Fabriciano - MG",
    type: "address",
  },
  {
    Icon: Mail,
    text: "1educavale@gmail.com",
    href: "mailto:1educavale@gmail.com",
    type: "email",
  },
  {
    Icon: Phone,
    text: "(31) 99139-8980",
    href: "tel:+5531991398980",
    type: "phone",
  },
];

// --- Sub-Components ---
type SocialLinkProps = {
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, Icon }) => (
  <a
    href={href}
    aria-label={label}
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gray-400 hover:bg-emerald-700 hover:text-white transition-colors" // Fundo ajustado para neutral-900
  >
    <Icon className="w-5 h-5" />
  </a>
);

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => (
  <div>
    <h4 className="text-lg font-semibold text-white tracking-wider mb-6">
      {title}
    </h4>
    <ul className="space-y-4 text-sm text-gray-300">{children}</ul>
  </div>
);

const NewsletterSection = () => (
  <div className="py-12 border-b border-neutral-900">
    {" "}
    {/* Borda ajustada para neutral-900 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Transforme sua Carreira Hoje
        </h2>
        <p className="text-gray-300">
          Receba insights, notícias sobre cursos e descontos exclusivos direto
          no seu e-mail.
        </p>
      </div>
      <form className="w-full">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="flex-grow w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600" // Fundo ajustado para neutral-900
          />
          <button
            type="submit"
            className="bg-emerald-700 text-white font-bold px-6 py-3 rounded-md hover:bg-emerald-800 transition-all flex items-center justify-center space-x-2"
          >
            <span>Inscrever</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  </div>
);

// --- Main Footer Component ---
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-gray-300">
      {" "}
      {/* Fundo do rodapé alterado para neutral-800 */}
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Main Footer Links */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-700/10 rounded-lg flex items-center justify-center ring-1 ring-emerald-700/20">
                <span className="text-emerald-700 font-bold text-2xl">E</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">EducaVale</h3>
                <p className="text-xs text-gray-400">
                  Pós-graduação de Excelência
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Transformando vidas através da educação. Há mais de 5 anos
              formando os melhores profissionais do mercado.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinksData.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          {/* Courses Column */}
          <FooterColumn title="Cursos">
            {coursesData.map((curso) => (
              <li key={curso}>
                <a
                  href="#cursos"
                  className="hover:text-emerald-500 transition-colors"
                >
                  {curso}
                </a>
              </li>
            ))}
          </FooterColumn>

          {/* Useful Links Column */}
          <FooterColumn title="Links Úteis">
            {usefulLinksData.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-emerald-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          {/* Contact Info Column */}
          <FooterColumn title="Entre em Contato">
            <ul className="space-y-5 text-sm">
              {contactInfoData.map((item, index) => (
                <li
                  key={item.type + index}
                  className="flex items-start space-x-3"
                >
                  <item.Icon className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-500" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-emerald-500 transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 py-8 border-t border-neutral-900 text-center">
          {" "}
          {/* Borda ajustada para neutral-900 */}
          <p className="text-sm text-gray-500">
            © {currentYear} EducaVale. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">CPNJ: 37.911.890/0001-01</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
