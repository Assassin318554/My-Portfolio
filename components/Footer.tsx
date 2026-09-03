import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile, routes } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="f-name">
              {profile.name}
              <span className="dot">.</span>
            </p>
            <p className="f-role">
              Computer Science &amp; Engineering · {profile.location}
            </p>
          </div>
          <div className="f-ext">
            <a href={profile.github} target="_blank" rel="noopener">
              GitHub <ArrowUpRight />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn <ArrowUpRight />
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>

        <div className="f-bottom justify-center">
          <span>© 2026 {profile.name} — All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
