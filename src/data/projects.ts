export type Project = { id: string; name: string; segment: string; category: string; image: string; alt: string; description?: string; source: string };
// Imagens e nomes verificados no perfil público @design.carolarrais em 23/09/2026.
export const projects: Project[] = [
  { id: "01", name: "Fernanda Zanata", segment: "Advocacia", category: "Identidade visual", image: "/images/fernanda-zanata.webp", alt: "Marca Fernanda Zanata Advocacia em recepção com madeira e mármore", source: "https://www.instagram.com/design.carolarrais/p/Dc4YbfZljP_/" },
  { id: "02", name: "Dra. Amanda Dávila", segment: "Saúde", category: "Design de marca", image: "/images/amanda-davila.webp", alt: "Monograma AD e assinatura Dra. Amanda Dávila em dourado", source: "https://www.instagram.com/design.carolarrais/p/DcoS7VdDvfL/" },
  { id: "03", name: "Tássia Alves", segment: "Advocacia", category: "Identidade visual", image: "/images/tassia-alves.webp", alt: "Marca Tássia Alves Advocacia em escritório em tons claros", source: "https://www.instagram.com/design.carolarrais/p/Dceubv-jsJs/" },
  { id: "04", name: "Mendes & Ortega", segment: "Advocacia", category: "Design de marca", image: "/images/mendes-ortega.webp", alt: "Marca Mendes e Ortega Advocacia em recepção com iluminação indireta", source: "https://www.instagram.com/design.carolarrais/p/DbJthQ2FqWe/" },
  { id: "05", name: "Tereza Loiola", segment: "Marca profissional", category: "Identidade visual", image: "/images/tereza-loiola.webp", alt: "Marca Tereza Loiola em recepção com madeira e pedra clara", source: "https://www.instagram.com/design.carolarrais/p/DaQ4iAAljwo/" },
  { id: "06", name: "Felipe Cavalheiro", segment: "Advocacia", category: "Design de marca", image: "/images/felipe-cavalheiro.webp", alt: "Símbolo dourado e assinatura Felipe Cavalheiro Advogados em fundo azul escuro", source: "https://www.instagram.com/design.carolarrais/p/DYh19vKDpiS/" },
];
