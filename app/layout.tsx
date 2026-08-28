import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Nahin Intesher — CSE · Research & Teaching", template: "%s · Nahin Intesher" },
  description:
    "Academic portfolio of Nahin Intesher — CSE graduate interested in teaching, research, computer vision, human–computer interaction, and assistive technology.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F7F1" },
    { media: "(prefers-color-scheme: dark)", color: "#151410" },
  ],
};

/* Runs before first paint: restore saved theme from localStorage,
   otherwise follow the OS preference. Prevents theme flash. */
const themeInit = `(function(){try{document.documentElement.classList.add('js');var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var d=t==='dark';document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=t}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${newsreader.variable} ${instrumentSans.variable} ${plexMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
