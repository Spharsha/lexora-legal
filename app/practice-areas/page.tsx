import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Finder from "../components/Finder";
import { practiceAreas } from "../data";

export const metadata: Metadata = {
  title: "Practice Areas | Lexora Legal Associates (Demo)",
  description:
    "Corporate, family, property, litigation, employment and contract law. Demo website with sample content.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <Header />

      <div className="lg:pl-64">
        <main>
          <section className="px-5 pb-12 pt-12 sm:px-8 lg:px-12 lg:pt-20">
            <p className="text-xs font-semibold tracking-[0.3em] text-maroon">
              PRACTICE AREAS
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl font-bold leading-[1.05] sm:text-6xl">
              Six areas. One clear approach.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              Whatever the matter, you get plain-language advice, a clear plan
              and fees explained upfront.
            </p>

            <div className="mt-10 max-w-3xl">
              <Finder />
            </div>
          </section>

          <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">
            <div className="border-t border-line">
              {practiceAreas.map((area) => (
                <article
                  key={area.id}
                  id={area.id}
                  className="grid gap-6 border-b border-line py-10 md:grid-cols-[120px_1fr_1fr] md:gap-10"
                >
                  <p className="font-serif text-4xl font-bold text-maroon">
                    {area.number}
                  </p>

                  <div>
                    <h2 className="font-serif text-3xl font-bold">
                      {area.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {area.summary}
                    </p>
                    <Link
                      href={`/contact?area=${encodeURIComponent(area.title)}`}
                      className="mt-6 inline-block bg-maroon px-6 py-3 text-xs font-semibold tracking-[0.15em] text-white transition hover:bg-maroon-dark"
                    >
                      FREE CONSULTATION
                    </Link>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-muted">
                      WE CAN HELP WITH
                    </p>
                    <ul className="mt-4 space-y-3 text-sm">
                      {area.help.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-maroon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
