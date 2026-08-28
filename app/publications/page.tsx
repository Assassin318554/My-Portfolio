import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import PublicationCard from "@/components/PublicationCard";
import { publications, profile } from "@/lib/data";

export const metadata: Metadata = { title: "Publications", description: "Publications and research output — thesis, manuscripts in preparation, and BibTeX entries." };

export default function PublicationsPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHead
          no="03"
          title="Publications & Research Output"
          tag="Output & Status"
          lede="I am at the beginning of my research career. The works below are ongoing — under write-up, in preparation, or targeted for submission. An updated record is maintained on Google Scholar."
        />
        <Reveal>
          <div className="pub-list mt-12">
            {publications.map((p) => <PublicationCard key={p.id} pub={p} />)}
          </div>
          <div className="pub-foot">
            <p className="fineprint">Full publication record and supporting documents are available in my CV.</p>
            {/* TODO: your Scholar profile URL in lib/data.ts */}
            <a className="text-link" href={profile.scholar} target="_blank" rel="noopener">Google Scholar <ArrowUpRight /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
