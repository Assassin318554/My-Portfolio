"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile, routes } from "@/lib/data";

const DESKTOP_HREFS = [
  "/about",
  "/research",
  "/publications",
  "/education",
  "/projects",
  "/contact",
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]); // close on navigation

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const desktopNav = routes.filter((r) => DESKTOP_HREFS.includes(r.href));

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="brand">
          Nahin Intesher  
        </Link>
        <nav className="main-nav" aria-label="Primary">
          {desktopNav.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className={pathname === r.href ? "active" : undefined}
              aria-current={pathname === r.href ? "page" : undefined}
            >
              {r.short}
            </Link>
          ))}
          <a className="nav-cv p-3" href={profile.cv}>
            CV <ArrowUpRight size={13} strokeWidth={1.75} />
          </a>
        </nav>
        <div className="header-tools">
          <ThemeToggle />
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobileNav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X size={18} strokeWidth={1.75} />
            ) : (
              <Menu size={18} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobileNav"
        className={`mobile-nav${open ? " open" : ""}`}
        aria-label="Mobile"
      >
        {routes.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className={pathname === r.href ? "active" : undefined}
          >
            <span className="mn-no">{r.no}</span>
            {r.short}
          </Link>
        ))}
        <a className="mn-cv" href={profile.cv}>
          Curriculum Vitae <ArrowUpRight size={14} />
        </a>
      </nav>
    </header>
  );
}
