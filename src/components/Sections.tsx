import Image from "next/image";
import { services } from "@/data/services";
import { faqs } from "@/data/faq";
import { navigation, processSteps, site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Arrow, Brand, CTA, Portrait, SectionTitle, WhatsappIcon } from "./ui";

export function PositioningSection() {
  return <section className="positioning section"><div className="wrap"><div className="positioning-grid"><p className="eyebrow"><span/>PERCEPÇÃO DE MARCA</p><div><h2>O seu trabalho pode ser excelente.<br/>Mas a sua marca também precisa <em>demonstrar isso.</em></h2><p className="body-copy">Antes de conhecer sua experiência, seu atendimento ou seus resultados, o cliente já formou uma percepção sobre você. Uma identidade visual estratégica comunica profissionalismo, confiança e posicionamento antes mesmo da primeira conversa.</p></div></div><div className="concepts">{["Autoridade", "Credibilidade", "Diferenciação", "Valor percebido"].map((word,index) => <div key={word}><span>0{index + 1}</span><h3>{word}</h3></div>)}</div></div></section>;
}
export function LawyerSection() {
  return <section className="lawyer"><div className="lawyer-image"><Image src="/images/mendes-ortega.webp" alt="Identidade visual Mendes e Ortega Advocacia, projeto de Carol Arrais" fill sizes="(min-width: 1024px) 50vw, 100vw"/><span className="photo-credit">MENDES & ORTEGA • IDENTIDADE VISUAL</span></div><div className="lawyer-copy"><SectionTitle label="PARA ADVOGADOS">Sua experiência merece uma marca <em>à altura.</em></SectionTitle><p className="lawyer-lead">Advogado(a), sua identidade visual pode estar fazendo você parecer menos experiente do que realmente é.</p><p>Uma marca jurídica bem construída deve transmitir confiança, maturidade e profissionalismo sem depender dos mesmos símbolos e soluções visuais usados por todos os escritórios.</p><CTA className="button-light" message="Olá, Carol! Conheci seu trabalho pelo site e gostaria de posicionar minha marca na advocacia.">Quero posicionar minha marca</CTA></div></section>;
}
export function Services() {
  return <section className="section services wrap" id="servicos"><div className="section-heading-row"><SectionTitle label="SERVIÇOS">Construímos cada ponto<br/>de contato <em>da sua marca.</em></SectionTitle><p className="section-aside">Do primeiro olhar aos pequenos detalhes.<br/>Tudo comunica.</p></div><div className="services-grid">{services.map((service,index) => <article className="service" key={service.title}><span className="service-number">0{index+1}</span><div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul></div><Arrow diagonal/></article>)}</div></section>;
}
export function Process() {
  return <section className="section process" id="processo"><div className="wrap"><SectionTitle label="COMO FUNCIONA">Um processo pensado para transformar <em>estratégia em identidade.</em></SectionTitle><ol className="timeline">{processSteps.map((step,index) => <li key={step.name}><span className="step-number">0{index+1}</span><div><h3>{step.name}</h3><p>{step.text}</p></div></li>)}</ol></div></section>;
}
export function About() {
  return <section className="section about wrap" id="sobre"><div className="about-visual"><Portrait variant="about"/><span className="about-note">UM OLHAR SENSÍVEL. UMA INTENÇÃO ESTRATÉGICA.</span></div><div className="about-copy"><SectionTitle label="SOBRE">Prazer, eu sou<br/><em>Carol Arrais.</em></SectionTitle><p>Sou arquiteta e designer de marcas e acredito que uma boa identidade visual não serve apenas para deixar um negócio bonito. Ela ajuda a comunicar valor, posicionamento e profissionalismo.</p><p>Meu trabalho é transformar a essência de cada negócio em uma identidade visual estratégica, elegante e capaz de criar uma percepção coerente com o nível do serviço que existe por trás da marca.</p><div className="about-signature"><span>Carol Arrais</span><p>DESIGNER DE MARCAS</p></div><a href={site.instagram} className="text-link" target="_blank" rel="noopener noreferrer">Um pouco mais sobre mim <Arrow diagonal/></a></div></section>;
}
export function QuoteSection() {
  return <section className="quote-section"><p className="eyebrow">ESSÊNCIA QUE SE TORNA PRESENÇA</p><h2>Sua marca fala<br/><em>antes de você.</em></h2><p>Vamos garantir que ela diga exatamente o que você gostaria.</p><span className="quote-rule"/></section>;
}
export function FAQ() {
  return <section className="section faq wrap"><div><SectionTitle label="PODEMOS CONVERSAR">Dúvidas<br/><em>frequentes.</em></SectionTitle><p className="faq-aside">Cada projeto começa com uma boa conversa.</p><a className="text-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Fale com a Carol <Arrow diagonal/></a></div><div className="faq-list">{faqs.map((faq,index) => <details name="faq" key={faq.question}><summary><span className="faq-number">0{index+1}</span><span>{faq.question}</span><span className="faq-plus" aria-hidden="true"/></summary><p>{faq.answer}</p></details>)}</div></section>;
}
export function FinalCTA() {
  return <section className="final-cta" id="contato"><div className="wrap"><p className="eyebrow"><span/>VAMOS COMEÇAR?</p><h2>Sua marca está pronta para transmitir <em>o valor do seu trabalho?</em></h2><div className="final-cta-bottom"><p>Conte um pouco sobre o seu projeto e receba mais informações sobre como podemos construir uma identidade visual alinhada ao seu posicionamento.</p><CTA message="Olá, Carol! Conheci seu trabalho pelo site e gostaria de receber mais informações sobre identidade visual.">Solicitar minha proposta</CTA></div></div></section>;
}
export function Footer() {
  return <footer className="footer"><div className="wrap"><div className="footer-top"><div><Brand footer/><p>Design de marcas que transformam<br/>percepção em posicionamento.</p></div><nav aria-label="Navegação do rodapé">{navigation.filter(([,id])=>["servicos","portfolio","sobre","contato"].includes(id)).map(([label,id])=><a href={`#${id}`} key={id}>{label}</a>)}</nav><div className="footer-social"><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram <Arrow diagonal/></a><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp <Arrow diagonal/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Carol Arrais. Todos os direitos reservados.</span><span>FEITO COM INTENÇÃO, EM CADA DETALHE.</span></div></div></footer>;
}
export function WhatsappButton() {
  return <a className="whatsapp-floating" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Carol Arrais pelo WhatsApp"><WhatsappIcon/><span>Vamos conversar?</span></a>;
}
