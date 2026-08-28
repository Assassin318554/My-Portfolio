import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { GalleryProject } from "@/lib/data";

export default function ProjectCard({
  p,
  index,
}: {
  p: GalleryProject;
  index: string;
}) {
  return (
    <article className="pcard">
      <a
        className="pimg"
        href={p.githubLink}
        target="_blank"
        rel="noopener"
        aria-label={`View ${p.title} on GitHub`}
      >
        <Image
          src={p.image}
          alt=""
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 1020px) 50vw, 33vw"
          className="object-cover"
          aria-hidden
        />
      </a>
      <div className="pbody">
        <p className="prow">
          <span className="pindex">{index}</span>
          <span className="pdate">{p.date}</span>
        </p>
        <h3 className="ptitle">{p.title}</h3>
        <p className="pdesc">{p.description}</p>
        <p className="ptech">{p.technologies.join(" · ")}</p>
        <div className="pgh-row">
          <a className="pgh" href={p.githubLink} target="_blank" rel="noopener">
            GitHub <ArrowUpRight strokeWidth={1.75} />
          </a>
          {p.demoLink ? (
            <a className="pgh" href={p.demoLink} target="_blank" rel="noopener">
              Live Demo <ArrowUpRight strokeWidth={1.75} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
