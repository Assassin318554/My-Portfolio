import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import SideBox from "@/components/SideBox";
import { teaching, teachingInterests } from "@/lib/data";

export const metadata: Metadata = { title: "Teaching", description: "Teaching and academic experience of Nahin Intesher." };

export default function TeachingPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHead
          no="05"
          title="Teaching & Academic Experience"
          tag="Experience & Interests"
          lede="Teaching is not a side interest — it is central to why I am pursuing academia."
        />
        <Reveal>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
            <div className="space-y-12">
              {teaching.map((t) => (
                <article className="teach-entry" key={t.role}>
                  <span className="r-index">{t.period}</span>
                  <h3 className="t-degree">{t.role}</h3>
                  <p className="inst">{t.org} <span>· {t.place}</span></p>
                  <p className="desc">{t.desc}</p>
                  <ul className="dash-list">
                    {t.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </article>
              ))}
              <p className="fineprint">References are available in my CV and upon request.</p>
            </div>
            <SideBox title="Academic Teaching Interests" items={teachingInterests} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}