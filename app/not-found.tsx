import Link from "next/link";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <PageHead no="404" title="Page not found" tag="Error" />
        <Reveal>
          <p className="page-lede mt-4">The page you are looking for does not exist or has moved.</p>
          <Link href="/" className="text-link mt-6">← Back to home</Link>
        </Reveal>
      </div>
    </section>
  );
}
