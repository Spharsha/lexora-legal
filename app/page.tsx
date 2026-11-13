import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { practiceAreas, faqs } from "./data";

const photo = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=70`;

const promises = [
  {
    title: "Plain language",
    text: "No jargon. You will understand every step.",
  },
  {
    title: "Clear fees upfront",
    text: "We explain the cost before any work begins.",
  },
  {
    title: "Prompt replies",
    text: "We aim to respond within one working day.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share your matter",
    text: "Send a short enquiry. Tell us what happened and what help you need.",
  },
  {
    number: "02",
    title: "Free first call",
    text: "We talk by phone or video, understand your situation and answer your questions.",
  },
  {
    number: "03",
    title: "A clear plan",
    text: "You get honest advice, the likely steps and the fees, before you decide.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <div className="lg:pl-64">
        <main>
          {/* Hero */}
          <section className="px-5 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-24 lg:pt-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-maroon">
                  NEW DELHI · LEGAL ADVISORS
                </p>

                <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] sm:text-6xl xl:text-7xl">
                  Straight answers.
                  <br />
                  <span className="text-maroon">Steady counsel.</span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-muted">
                  Plain-language legal guidance for families, founders and
                  businesses across Delhi NCR. Tell us your situation, and we
                  will tell you where you stand.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="bg-maroon px-8 py-4 text-center text-xs font-semibold tracking-[0.18em] text-white transition hover:bg-maroon-dark"
                  >
                    FREE CONSULTATION
                  </Link>
                  <Link
                    href="/practice-areas"
                    className="border border-ink px-8 py-4 text-center text-xs font-semibold tracking-[0.18em] transition hover:bg-ink hover:text-white"
                  >
                    PRACTICE AREAS
                  </Link>
                </div>
              </div>

              <div className="group relative mx-auto w-full max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 h-full w-full border-2 border-maroon/40"
                />
                <div className="relative overflow-hidden bg-ink">
                  <img
                    src={photo("photo-1589829545856-d10d557cf95f", 900)}
                    alt="Law books and a gavel on a desk"
                    width={900}
                    height={1100}
                    fetchPriority="high"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Promises */}
          <section className="bg-maroon px-5 py-12 text-white sm:px-8 lg:px-12">
            <div className="grid gap-8 sm:grid-cols-3">
              {promises.map((item) => (
                <div key={item.title}>
                  <h2 className="font-serif text-2xl font-bold">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Practice areas preview */}
          <section className="bg-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-maroon">
                  WHAT WE DO
                </p>
                <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                  Areas of Practice
                </h2>
              </div>
              <Link
                href="/practice-areas"
                className="text-sm font-semibold text-maroon underline underline-offset-4"
              >
                See all details →
              </Link>
            </div>

            <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-3">
              {practiceAreas.map((area) => (
                <Link
                  key={area.id}
                  href={`/practice-areas#${area.id}`}
                  className="group bg-paper p-8 transition hover:bg-parchment"
                >
                  <p className="font-serif text-2xl font-bold text-maroon">
                    {area.number}
                  </p>
                  <h3 className="mt-6 font-serif text-2xl font-bold">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {area.summary}
                  </p>
                  <span className="mt-6 inline-block text-xs font-semibold tracking-[0.15em] text-maroon transition group-hover:translate-x-1">
                    LEARN MORE →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section className="bg-ink px-5 py-20 text-parchment sm:px-8 lg:px-12 lg:py-24">
            <p className="text-xs font-semibold tracking-[0.3em] text-rose">
              HOW IT WORKS
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              From first message to clear plan
            </h2>

            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-white/20 pt-6"
                >
                  <p className="font-serif text-4xl font-bold text-rose">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-parchment/65">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.3em] text-maroon">
                FAQ
              </p>
              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                Common questions
              </h2>

              <div className="mt-10 divide-y divide-line border-y border-line">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-2xl text-maroon group-open:hidden"
                      >
                        +
                      </span>
                      <span
                        aria-hidden="true"
                        className="hidden shrink-0 text-2xl text-maroon group-open:inline"
                      >
                        −
                      </span>
                    </summary>
                    <p className="mt-3 leading-7 text-muted">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-maroon px-5 py-16 text-center text-white sm:px-8 lg:px-12">
            <h2 className="mx-auto max-w-2xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Every important decision deserves clarity.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-white px-8 py-4 text-xs font-semibold tracking-[0.18em] text-maroon transition hover:bg-parchment"
            >
              BOOK A FREE CONSULTATION
            </Link>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
