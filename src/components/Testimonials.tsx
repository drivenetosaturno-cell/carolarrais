"use client";
import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Arrow, SectionTitle } from "./ui";
export function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];
  const move = (offset: number) => setActive(index => (index + offset + testimonials.length) % testimonials.length);
  return <section className="testimonials section" id="depoimentos"><div className="wrap testimonials-layout"><SectionTitle label="CLIENTES">Uma marca nova também muda a forma como você enxerga <em>o próprio negócio.</em></SectionTitle><div className="testimonial-slider" role="region" aria-roledescription="carrossel" aria-label="Depoimentos" onKeyDown={event => { if(event.key === "ArrowLeft") move(-1); if(event.key === "ArrowRight") move(1); }}><div className="testimonial-content" aria-live="polite" aria-atomic="true">{item.isPlaceholder && <p className="example-label">DEPOIMENTO ILUSTRATIVO • SUBSTITUIR PELO REAL</p>}<span className="quote-mark" aria-hidden="true">“</span>{item.image ? <Image src={item.image} width={700} height={450} alt={item.imageAlt || item.quote} className="testimonial-image"/> : <blockquote key={active}><p>{item.quote}</p></blockquote>}<p className="testimonial-author">{item.author}</p></div><div className="slider-controls"><div className="slider-dots">{testimonials.map((_,index) => <button key={index} aria-label={`Mostrar depoimento ${index + 1}`} aria-current={active === index ? "true" : undefined} onClick={() => setActive(index)}><span/></button>)}</div><div className="slider-arrows"><button aria-label="Depoimento anterior" onClick={() => move(-1)} className="previous"><Arrow/></button><span>{String(active + 1).padStart(2,"0")} / {String(testimonials.length).padStart(2,"0")}</span><button aria-label="Próximo depoimento" onClick={() => move(1)}><Arrow/></button></div></div></div></div></section>;
}
