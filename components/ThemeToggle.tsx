"use client";

import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function apply(t: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", t === "dark");
  root.style.colorScheme = t;
}

export default function ThemeToggle() {
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme" && (e.newValue === "light" || e.newValue === "dark")) apply(e.newValue);
    };
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystem = (e: MediaQueryListEvent) => {
      try {
        if (!localStorage.getItem("theme")) apply(e.matches ? "dark" : "light");
      } catch {}
    };
    window.addEventListener("storage", onStorage);
    mq.addEventListener("change", onSystem);
    return () => {
      window.removeEventListener("storage", onStorage);
      mq.removeEventListener("change", onSystem);
    };
  }, []);

  function toggle() {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem("theme", next); // ← permanent choice
    } catch {}
  }

  return (
    <button onClick={toggle} className="theme-toggle" aria-label="Toggle dark mode" title="Toggle theme">
      <Sun size={16} strokeWidth={1.75} className="i-sun" />
      <Moon size={16} strokeWidth={1.75} className="i-moon" />
    </button>
  );
}
