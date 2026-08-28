import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { skills } from "@/lib/data";

export const metadata: Metadata = { title: "Skills", description: "Technical skills of Nahin Ahmed." };

export default function SkillsPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHead no="07" title="Technical Skills" tag="Toolbox" lede="A working toolbox — depth over breadth, chosen in service of the research and teaching above." />
        <Reveal>
          <dl className="mt-12">
            {skills.map((s) => (
              <div className="skills-row" key={s.category}>
                <dt>{s.category}</dt>
                <dd>{s.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
