import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import SideBox from "@/components/SideBox";
import { teaching } from "@/lib/data";

export const metadata: Metadata = { title: "Teaching", description: "Teaching and academic experience of Nahin Ahmed." };

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
            <article className="teach-entry">
              <span className="r-index">{teaching.period}</span>
              <h3 className="t-degree">{teaching.role}</h3>
              <p className="inst">{teaching.org} <span>· {teaching.orgPlace}</span></p>
              <p className="desc">{teaching.desc}</p>
              <ul className="dash-list">
                {teaching.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <p className="fineprint mt-8">References and student feedback are available upon request.</p>
            </article>
            <SideBox title="Academic Teaching Interests" items={teaching.interests} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
