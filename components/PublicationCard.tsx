"use client";

import { useState, useId } from "react";
import { ChevronDown, Quote, Check } from "lucide-react";
import type { Publication } from "@/lib/data";

export default function PublicationCard({ pub }: { pub: Publication }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const panelId = useId();

  async function copyBibtex() {
    try {
      await navigator.clipboard.writeText(pub.bibtex);
    } catch {
      const t = document.createElement("textarea");
      t.value = pub.bibtex;
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      try { document.execCommand("copy"); } catch {}
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <article className="pub">
      <div className="pub-row">
        <div className="px-3 ">
          <span className="pub-index">{pub.index}</span>
          <h3>{pub.title}</h3>
          <p className="pub-meta"><b>{pub.type}</b> · {pub.year} · {pub.status}</p>
        </div>
        <div className="pub-actions m-3">
          <button className={`chip-btn${open ? " is-open" : ""}`} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((o) => !o)}>
            Abstract <ChevronDown size={12} className="chip-caret" />
          </button>
          <button className={`chip-btn${copied ? " is-copied" : ""}`} onClick={copyBibtex} aria-label={`Copy BibTeX entry for ${pub.index}`}>
            {copied ? "Copied" : "BibTeX"} {copied ? <Check size={12} /> : <Quote size={12} />}
          </button>
        </div>
      </div>
      <div id={panelId} className={`pub-abs${open ? " open" : ""}`}>
        <div>
          <p><span className="abs-label">Abstract</span>{pub.abstract}</p>
        </div>
      </div>
    </article>
  );
}
