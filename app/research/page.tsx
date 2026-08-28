import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { research } from "@/lib/data";

export const metadata: Metadata = { title: "Research", description: "Selected research work — computer vision, HCI, and assistive technology." };

export default function ResearchPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHead
          no="02"
          title="Research"
          tag="Selected Work"
          lede="My work sits at the intersection of computer vision, human–computer interaction, and assistive technology — studying how machines can perceive the world, and how people perceive machines."
        />
        <Reveal>
          <div className="r-list mt-12">
            {research.map((r) => (
              <article className="r-item" key={r.index}>
                <div className="text-justify">
                  <span className="r-index">{r.index}</span>
                  <h3>{r.title}</h3>
                  <p className="r-desc">{r.desc}</p>
                  <ul className="r-areas">
                    {r.areas.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </div>
                <span className="r-status"><i aria-hidden="true" />{r.status}</span>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
