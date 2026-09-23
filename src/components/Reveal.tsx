"use client";
import { useEffect } from "react";
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.remove("reveal-pending"); observer.unobserve(entry.target); } }), { threshold: .06 });
    const elements = document.querySelectorAll(".section-title, .service, .portfolio-card, .timeline li");
    elements.forEach(element => { if(element.getBoundingClientRect().top > window.innerHeight) { element.classList.add("reveal-pending"); observer.observe(element); } });
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove("reveal-pending")); };
  }, []);
  return null;
}
