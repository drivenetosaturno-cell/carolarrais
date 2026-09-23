import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import { site } from "@/data/site";
import { Arrow, SectionTitle } from "./ui";
export function PortfolioCard({ project }: { project: Project }) {
  return <article className="portfolio-card"><a href={project.source} target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto ${project.name} no Instagram`}><div className="project-image"><Image src={project.image} alt={project.alt} fill sizes="(min-width: 768px) 48vw, 100vw"/><span className="project-open"><Arrow diagonal/></span><span className="project-hover">{project.category}</span></div><div className="project-caption"><div><h3>{project.name}</h3><p>{project.segment} <span>·</span> {project.category}</p></div><span className="project-number">{project.id}</span></div>{project.description && <p className="project-description">{project.description}</p>}</a></article>;
}
export function Portfolio() {
  return <section className="section portfolio wrap" id="portfolio"><div className="section-heading-row"><SectionTitle label="PROJETOS SELECIONADOS">Marcas que passaram a comunicar <em>quem realmente são.</em></SectionTitle><p className="section-aside">Cada negócio tem uma essência.<br/>Cada marca, uma forma única de expressá-la.</p></div><div className="portfolio-grid">{projects.map(project => <PortfolioCard key={project.id} project={project}/>)}</div><div className="portfolio-bottom"><span>Outros olhares. Novas histórias.</span><a className="text-link" href={site.instagram} target="_blank" rel="noopener noreferrer">Ver mais projetos <Arrow diagonal/></a></div></section>;
}
