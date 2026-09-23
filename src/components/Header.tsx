"use client";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/site";
import { Brand, CTA } from "./ui";
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 16); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  useEffect(() => { if (!open) return; const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } }; const resize = () => { if (window.innerWidth >= 1200) setOpen(false); }; window.addEventListener("keydown", close); window.addEventListener("resize", resize); return () => { window.removeEventListener("keydown", close); window.removeEventListener("resize", resize); }; }, [open]);
  return <header className={`header ${scrolled ? "scrolled" : ""}`}><div className="header-inner"><Brand/><nav aria-label="Navegação principal" className="desktop-nav">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><CTA className="header-cta"/><button ref={toggle} className="menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span>{open ? "Fechar" : "Menu"}</span><span className={`menu-lines ${open ? "is-open" : ""}`}><i/><i/></span></button></div><nav id="mobile-menu" aria-label="Navegação mobile" className="mobile-menu" hidden={!open}>{navigation.map(([label,id], index) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>)}<CTA/></nav></header>;
}
