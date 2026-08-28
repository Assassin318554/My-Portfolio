import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import {
  selectedProjects,
  academicProjects,
  personalProjects,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research prototypes, academic projects, and personal builds by Nahin Ahmed.",
};

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHead
          no="06"
          title="Projects"
          tag="Selected Builds"
          lede="Organised in three tiers: selected research builds, the academic record from my B.Sc., and independent personal projects. Everything is open on GitHub."
        />

        {/* ---- 06·A · Selected research (editorial rows) ---- */}
        <Reveal>
          <div className="sub-head">
            <span className="sub-no">06·A</span>
            <h2>Selected Research Projects</h2>
            <span className="sub-rule" aria-hidden="true" />
            <span className="sub-count">
              {selectedProjects.length} research builds
            </span>
          </div>
          <div className="proj-list">
            {selectedProjects.map((p) => (
              <article className="proj" key={p.title}>
                <div>
                  <h3>{p.title}</h3>
                  <p className="p-desc">{p.desc}</p>
                  <p className="p-tech">{p.tech.join(" · ")}</p>
                </div>
                <div className="p-side">
                  <span className="p-year">{p.year}</span>
                  <div className="p-links">
                    <a
                      className="p-link"
                      href={p.github}
                      target="_blank"
                      rel="noopener"
                    >
                      GitHub <ArrowUpRight />
                    </a>
                    {p.demo ? (
                      <a
                        className="p-link"
                        href={p.demo}
                        target="_blank"
                        rel="noopener"
                      >
                        Live Demo <ArrowUpRight />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* ---- 06·B · Academic projects (image grid) ---- */}
        <Reveal>
          <div className="sub-head">
            <span className="sub-no">06·B</span>
            <h2>Academic Projects</h2>
            <span className="sub-rule" aria-hidden="true" />
            <span className="sub-count">
              {academicProjects.length} projects
            </span>
          </div>
          <div className="pgrid">
            {academicProjects.map((p, i) => (
              <ProjectCard
                key={p.title}
                p={p}
                index={`AP·${String(i + 1).padStart(2, "0")}`}
              />
            ))}
          </div>
        </Reveal>

        {/* ---- 06·C · Personal projects (image grid) ---- */}
        <Reveal>
          <div className="sub-head">
            <span className="sub-no">06·C</span>
            <h2>Personal Projects</h2>
            <span className="sub-rule" aria-hidden="true" />
            <span className="sub-count">
              {personalProjects.length} projects
            </span>
          </div>
          <div className="pgrid">
            {personalProjects.map((p, i) => (
              <ProjectCard
                key={p.title}
                p={p}
                index={`PP·${String(i + 1).padStart(2, "0")}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
