import { Header } from "@/components/Header";
import { Arrow, CTA, Portrait } from "@/components/ui";
import { hero } from "@/data/site";
import { site } from "@/data/site";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Reveal } from "@/components/Reveal";
import { PositioningSection, LawyerSection, Services, Process, About, QuoteSection, FAQ, FinalCTA, Footer, WhatsappButton } from "@/components/Sections";
export default function Home() {
  return <><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><Header/><main id="conteudo"><section className="hero wrap" id="inicio"><div className="hero-copy"><p className="eyebrow"><span/>ESTRATÉGIA, ESSÊNCIA & DESIGN</p><h1>Uma marca à altura do profissional que <em>você se tornou.</em></h1><p className="hero-description">{hero.description}</p><div className="hero-actions"><CTA/><a href="#portfolio" className="text-link">Ver projetos <Arrow/></a></div><p className="hero-footnote">Design de marcas <b>·</b> Identidade visual <b>·</b> Posicionamento</p></div><div className="hero-visual"><Portrait/><div className="image-note"><span>ESTRATÉGIA QUE SE VÊ. VALOR QUE SE SENTE.</span><span>01 / CA</span></div></div></section><PositioningSection/><LawyerSection/><Services/><Portfolio/><Process/><Testimonials/><About/><QuoteSection/><FAQ/><FinalCTA/></main><Footer/><WhatsappButton/><Reveal/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"ProfessionalService",name:site.name,url:site.url,description:site.description,sameAs:[site.instagram],image:`${site.url}${site.heroImage}`,telephone:"+558821554554",hasOfferCatalog:{"@type":"OfferCatalog",name:"Design de marcas",itemListElement:["Identidade visual","Papelaria corporativa","Presença digital","Comunicação visual"].map(name=>({"@type":"Offer",itemOffered:{"@type":"Service",name}}))}}).replace(/</g,"\\u003c")}}/></>;
}
