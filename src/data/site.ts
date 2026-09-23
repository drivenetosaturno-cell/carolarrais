export const site = {
  name: "Carol Arrais",
  instagram: "https://www.instagram.com/design.carolarrais/",
  description: "Identidades visuais estratégicas para profissionais e empresas que querem transmitir autoridade, credibilidade e posicionamento.",
  // Preencha NEXT_PUBLIC_SITE_URL com o domínio definitivo, incluindo https://.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://carol-arrais-design.drivenetosaturno.chatgpt.site",
  heroImage: "/images/carol-hero.webp",
  aboutImage: "/images/carol-sobre.webp",
  logoImage: "", // Ex.: /images/logo-carol.svg. Vazio utiliza a assinatura tipográfica provisória.
};
export const navigation = [
  ["Início", "inicio"], ["Serviços", "servicos"], ["Portfólio", "portfolio"],
  ["Processo", "processo"], ["Sobre", "sobre"], ["Depoimentos", "depoimentos"], ["Contato", "contato"],
] as const;
export const hero = {
  title: "Uma marca à altura do profissional que você se tornou.",
  description: "Identidades visuais estratégicas para profissionais e empresas que querem transmitir autoridade, credibilidade e valor desde o primeiro contato.",
};
export const processSteps = [
  { name: "Imersão", text: "Entendemos sua história, objetivos, público e posicionamento." },
  { name: "Direção criativa", text: "Transformamos estratégia em conceito, linguagem e direção visual." },
  { name: "Criação", text: "Construímos a identidade e suas principais aplicações." },
  { name: "Entrega", text: "Você recebe os materiais finais preparados para aplicar sua nova marca." },
];
