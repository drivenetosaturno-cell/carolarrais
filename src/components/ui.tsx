import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";
import { site } from "@/data/site";
import type { ReactNode } from "react";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.4" /></svg>;
}
export function WhatsappIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.9 7l-4.6 1 1.2-4.3A8 8 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.5"/><path d="M8.2 7.5c-.8 1.3.2 3.4 1.6 4.8 1.4 1.4 3.5 2.5 4.8 1.6l.7-1.1-2.1-1-1 .7-1.9-1.9.7-1-1-2.1-1.8.0Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>;
}
export function Brand({ footer = false }: { footer?: boolean }) {
  return <a href="#inicio" className={`brand ${footer ? "brand-footer" : ""}`} aria-label="Carol Arrais — início">{site.logoImage ? <Image src={site.logoImage} alt="Carol Arrais" width={180} height={60}/> : <><span>carol arrais<span className="brand-dot">.</span></span><small>DESIGN DE MARCAS</small></>}</a>;
}
export function CTA({ children = "Solicitar proposta", message, className = "" }: { children?: ReactNode; message?: string; className?: string }) {
  return <a className={`button ${className}`} href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">{children}<Arrow diagonal /></a>;
}
export function SectionTitle({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return <div className={`section-title ${className}`}><p className="eyebrow"><span />{label}</p><h2>{children}</h2></div>;
}
export function Portrait({ variant = "hero" }: { variant?: "hero" | "about" }) {
  const source = variant === "hero" ? site.heroImage : site.aboutImage;
  return <div className={`portrait portrait-${variant}`}>{source ? <Image src={source} alt="Carol Arrais, designer de marcas" fill sizes="(min-width: 1024px) 50vw, 100vw" priority={variant === "hero"} className="object-cover"/> : <div className="portrait-placeholder"><span className="portrait-top">CAROL ARRAIS <span>DESIGNER DE MARCAS</span></span><span className="portrait-monogram" aria-hidden="true">ca<span>.</span></span><div className="portrait-caption"><span>O olhar por trás<br/><em>de cada marca.</em></span><span className="asset-label">FOTOGRAFIA DA CAROL<br/>ESPAÇO RESERVADO</span></div></div>}</div>;
}
