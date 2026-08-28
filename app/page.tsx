import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  MapPin,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { heroBio, research, routes, now, profile } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* -------- Hero -------- */}
      <section className="hero" aria-label="Introduction">
        <div className="container grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="hero-copy text-justify">
            <h1 className="hero-name">Nahin Intesher</h1>
            <p className="hero-role">
              Computer Science &amp; Engineering Graduate
            </p>
            <p className="hero-interests">
              Interested in <em>Computer Vision</em>, <em>Deep Learning</em>,{" "}
              <em>Human-Computer Interaction</em>, and{" "}
              <em>Assistive Technology</em>.
            </p>
            <p className="hero-bio">{heroBio}</p>
            <div className="hero-actions">
              {/* TODO: CV file at public/Nahin-Intesher-CV.pdf */}
              <a className="btn btn-solid" href={profile.cv}>
                View CV <FileText />
              </a>
              <Link className="btn btn-ghost" href="/research">
                Research Profile <ArrowUpRight />
              </Link>
            </div>
            <ul className="hero-meta">
              <li>
                <MapPin strokeWidth={1.75} />
                {profile.location}
              </li>
              <li>
                <GraduationCap strokeWidth={1.75} />
                CSE
              </li>
              <li>
                <BookOpen strokeWidth={1.75} />
                Research &amp; Teaching
              </li>
            </ul>
          </div>

          <figure className="hero-portrait justify-self-start lg:justify-self-end">
            {/* TODO: replace with your professional portrait (4:5 works best) */}
            <img
              src="/cvimage.jpg"
              alt="Portrait of Nahin Intesher (placeholder)"
              width={640}
              height={800}
            />
          </figure>
        </div>
      </section>

      {/* -------- Site index -------- */}
      <section className="section">
        <div className="container">
          <header>
            <p className="page-no">00</p>
            <h2 className="page-title">Contents</h2>
            <p className="page-tag">Site Index</p>
          </header>

          <Reveal>
            <div className="now-row" aria-label="Current status">
              {now.map((n) => (
                <span className="now-item" key={n.label}>
                  <i aria-hidden="true" />
                  <b>{n.label}</b> {n.value}
                </span>
              ))}
            </div>

            <nav className="toc" aria-label="Site contents">
              {routes.map((r) => (
                <Link className="toc-row" key={r.href} href={r.href}>
                  <span className="toc-no">{r.no}</span>
                  <span>
                    <span className="toc-title">{r.label}</span>
                    <span className="toc-desc">{r.desc}</span>
                  </span>
                  <ArrowUpRight className="toc-arrow" />
                </Link>
              ))}
            </nav>

            <p className="fineprint mt-8">
              Currently {research.length} research directions and{" "}
              {routes.length} sections — start with{" "}
              <Link className="text-link" href="/research">
                Research
              </Link>{" "}
              or{" "}
              <Link className="text-link" href="/publications">
                Publications
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
