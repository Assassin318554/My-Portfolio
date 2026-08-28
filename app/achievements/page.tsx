import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { achievements } from "@/lib/data";

export const metadata: Metadata = { title: "Achievements", description: "Awards, scholarships, contests, and certifications." };

export default function AchievementsPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHead no="08" title="Achievements" tag="Record" />
        <Reveal>
          <ul className="ach-list mt-12">
            {achievements.map((a) => (
              <li key={a.title}>
                <span className="a-year">{a.year}</span>
                <div>
                  <p className="a-head">
                    <span className="a-title">{a.title}</span>
                    <span className="a-tag">{a.tag}</span>
                  </p>
                  <p className="a-detail">{a.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
