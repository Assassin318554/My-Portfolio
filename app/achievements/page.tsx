import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { achievements, competitiveProgramming } from "@/lib/data";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Awards, scholarships, contests, and competitive programming of Nahin Intesher.",
};

export default function AchievementsPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHead no="08" title="Achievements" tag="Record" />

        <Reveal>
          <div className="sub-head" style={{ marginTop: "2.75rem" }}>
            <span className="sub-no">08·A</span>
            <h2>Awards &amp; Scholarships</h2>
            <span className="sub-rule" aria-hidden="true" />
          </div>
          <ul className="ach-list">
            {achievements.map((a) => (
              <li key={a.title}>
                <span className="a-year">{a.year}</span>
                <div>
                  <p className="a-head">
                    <span className="a-title">{a.title}</span>
                    <span className="a-tag">{a.tag}</span>
                  </p>
                  <p className="a-detail">
                    {a.detail}
                    {a.link ? (
                      <>
                        {" · "}
                        <a
                          className="text-link"
                          href={a.link.href}
                          target="_blank"
                          rel="noopener"
                        >
                          {a.link.label} <ArrowUpRight />
                        </a>
                      </>
                    ) : null}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="sub-head">
            <span className="sub-no">08·B</span>
            <h2>Competitive Programming</h2>
            <span className="sub-rule" aria-hidden="true" />
          </div>
          <ul className="cp-list">
            {competitiveProgramming.map((c) => (
              <li key={c.platform}>
                <span className="cp-platform">{c.platform}</span>
                <div>
                  <p className="a-head">
                    <a
                      className="a-title is-link"
                      href={c.url}
                      target="_blank"
                      rel="noopener"
                    >
                      {c.handle} <ArrowUpRight />
                    </a>
                    <span className="a-tag">{c.detail}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
