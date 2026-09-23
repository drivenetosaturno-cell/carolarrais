import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, WhatsappIcon } from "@/components/ui";
import { whatsappLink } from "@/lib/whatsapp";
import styles from "./welcome.module.css";

export const metadata: Metadata = {
  title: "Carol Arrais | Portfólio e contato",
  description: "Conheça o portfólio de Carol Arrais, designer de marcas, ou converse diretamente pelo WhatsApp sobre o seu projeto.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Carol Arrais | Portfólio e contato",
    description: "Design de marcas com essência e estratégia. Conheça meu trabalho ou vamos conversar sobre a sua marca.",
    url: "/",
    locale: "pt_BR",
    siteName: "Carol Arrais",
    type: "website",
  },
  twitter: { card: "summary", title: "Carol Arrais | Portfólio e contato", description: "Conheça meu trabalho ou vamos conversar sobre a sua marca." },
};

export default function WelcomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>ESSÊNCIA, ESTRATÉGIA & DESIGN</p>
        <div className={styles.portrait}>
          <Image src="/images/carol-perfil.jpg" alt="Carol Arrais, designer de marcas" width={150} height={150} priority />
        </div>
        <h1 className={styles.name}>carol arrais<span>.</span></h1>
        <p className={styles.role}>DESIGN DE MARCAS</p>
        <p className={styles.introduction}>Uma marca à altura<br/>de quem <em>você se tornou.</em></p>

        <nav className={styles.links} aria-label="Portfólio e contato">
          <Link href="/portfolio#inicio" scroll={true} className={`${styles.link} ${styles.primary}`}>
            <span className={styles.linkText}><strong>Conheça meu portfólio</strong><span>Acesse o site e explore meus projetos</span></span>
            <Arrow diagonal />
          </Link>
          <a href={whatsappLink()} className={`${styles.link} ${styles.secondary}`} target="_blank" rel="noopener noreferrer">
            <span className={styles.linkText}><strong>Converse pelo WhatsApp</strong><span>Vamos falar sobre a sua marca?</span></span>
            <WhatsappIcon />
          </a>
        </nav>

        <p className={styles.signature}>Identidades que comunicam valor.</p>
      </div>
    </main>
  );
}
