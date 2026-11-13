import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Free Consultation | Lexora Legal Associates (Demo)",
  description:
    "Request a free first consultation. Demo website with sample content.",
};

const details = [
  {
    label: "OFFICE",
    lines: ["Sample Address, Connaught Place", "New Delhi, India"],
  },
  { label: "HOURS", lines: ["Monday – Saturday", "10:00 AM – 6:00 PM"] },
  { label: "REPLY TIME", lines: ["Within one working day"] },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <div className="lg:pl-64">
        <main className="px-5 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-24 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-maroon">
                FREE CONSULTATION
              </p>
              <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.05] sm:text-6xl">
                Let us understand your matter.
              </h1>
              <p className="mt-6 max-w-md text-base leading-8 text-muted">
                Send a short enquiry. We will reply within one working day to
                arrange your free first call.
              </p>

              <div className="mt-10 space-y-8">
                {details.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold tracking-[0.2em] text-maroon">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-7">
                      {item.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-xs leading-5 text-muted">
                Address and timings on this demo are placeholders.
              </p>
            </div>

            <div className="border border-line bg-paper p-6 sm:p-10">
              <h2 className="font-serif text-3xl font-bold">Send an enquiry</h2>
              <p className="mb-8 mt-2 text-sm text-muted">
                Share your email or phone number, and a short description.
              </p>
              <ContactForm />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
