"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ value, label = "Copy to clipboard" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const t = document.createElement("textarea");
      t.value = value;
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
    <button onClick={copy} className="icon-btn" aria-label={label} title={label}>
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
}
