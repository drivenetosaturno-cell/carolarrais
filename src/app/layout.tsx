import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";
const title = "Carol Arrais | Design de Marcas e Identidade Visual";
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--editorial-font", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--body-font", display: "swap" });
export const metadata: Metadata = {
  title, description: site.description,
  metadataBase: site.url ? new URL(site.url) : undefined,
  alternates: site.url ? { canonical: "/" } : undefined,
  openGraph: { title, description: site.description, locale: "pt_BR", type: "website", siteName: "Carol Arrais", ...(site.url ? { url: site.url } : {}) },
  twitter: { card: "summary", title, description: site.description },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html>;
}
