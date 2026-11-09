import Header from "./components/Header";
import ContactForm from "./components/ContactForm";

const practiceAreas = [
  {
    number: "01",
    title: "Corporate Law",
    description:
      "Practical legal guidance for businesses, commercial agreements and corporate matters.",
  },
  {
    number: "02",
    title: "Family Law",
    description:
      "Thoughtful guidance for family matters, relationships and personal legal concerns.",
  },
  {
    number: "03",
    title: "Property Law",
    description:
      "Support with property transactions, documentation, disputes and legal due diligence.",
  },
  {
    number: "04",
    title: "Civil Litigation",
    description:
      "Structured representation and strategic guidance for civil disputes and proceedings.",
  },
  {
    number: "05",
    title: "Employment Law",
    description:
      "Legal assistance with workplace matters, employment agreements and disputes.",
  },
  {
    number: "06",
    title: "Contract Law",
    description:
      "Clear contract drafting, review and advice to help protect your interests.",
  },
];

const attorneys = [
  {
    name: "Arjun Mehra",
    role: "Senior Legal Consultant",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Ananya Rao",
    role: "Corporate Law Consultant",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Rohan Kapoor",
    role: "Property Law Consultant",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[760px] items-center bg-[#101d30] px-6 pb-20 pt-40 text-white"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101d30] via-[#101d30]/90 to-[#101d30]/40" />

        <div className="relative mx-auto w-full max-w-7xl">
          <p className="text-xs tracking-[0.4em] text-[#d2b47c]">
            TRUST · INTEGRITY · LEGAL EXCELLENCE
          </p>

          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Clarity in Law.
            <br />
            <span className="italic text-[#d2b47c]">
              Confidence in Every Step.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-8 text-white/70 md:text-base">
            Thoughtful legal guidance for individuals and businesses. We believe
            every legal matter deserves clarity, commitment and a considered
            approach.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#c5a46d] px-8 py-4 text-xs tracking-widest text-[#101d30] transition hover:bg-[#dfc394]"
            >
              REQUEST A CONSULTATION
            </a>

            <a
              href="#practice"
              className="border border-white/40 px-8 py-4 text-xs tracking-widest transition hover:border-[#d2b47c] hover:text-[#d2b47c]"
            >
              EXPLORE OUR SERVICES
            </a>
          </div>

          <div className="mt-20 flex flex-wrap gap-12 border-t border-white/20 pt-8">
            <div>
              <p className="font-serif text-3xl text-[#d2b47c]">Legal</p>
              <p className="mt-2 text-[10px] tracking-widest text-white/60">
                GUIDANCE
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-[#d2b47c]">Client</p>
              <p className="mt-2 text-[10px] tracking-widest text-white/60">
                FOCUSED
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-[#d2b47c]">Clear</p>
              <p className="mt-2 text-[10px] tracking-widest text-white/60">
                COMMUNICATION
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#f8f7f3] px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1100&q=85"
              alt="Professional legal library"
              className="h-[480px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-4 hidden border border-[#c5a46d] bg-[#101d30] p-8 text-white md:block">
              <p className="font-serif text-3xl text-[#d2b47c]">LEXORA</p>
              <p className="mt-2 text-[9px] tracking-[0.3em]">
                LEGAL ASSOCIATES
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] text-[#a17d42]">
              ABOUT OUR FIRM
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#17243a] md:text-5xl">
              A considered approach to every legal matter.
            </h2>
            <p className="mt-7 text-sm leading-8 text-[#69717a]">
              At Lexora Legal Associates, we believe good legal guidance begins
              with listening. Our approach combines careful analysis, clear
              communication and a strong commitment to understanding each
              client&apos;s needs.
            </p>
            <p className="mt-5 text-sm leading-8 text-[#69717a]">
              Whether navigating a business matter or a personal legal concern,
              our aim is to make complex issues easier to understand and
              decisions more informed.
            </p>
            <a
              href="#contact"
              className="mt-9 inline-block border-b border-[#a17d42] pb-2 text-xs tracking-widest text-[#80602e]"
            >
              SPEAK WITH OUR TEAM →
            </a>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="bg-[#101d30] px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] text-[#d2b47c]">
              WHAT WE DO
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Areas of Practice
            </h2>
            <p className="mt-6 text-sm leading-8 text-white/60">
              Explore our range of legal practice areas, designed to address a
              variety of individual and business needs.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <div
                key={area.number}
                className="bg-[#101d30] p-9 transition hover:bg-[#192a40]"
              >
                <p className="font-serif text-2xl text-[#c5a46d]">
                  {area.number}
                </p>
                <h3 className="mt-8 font-serif text-2xl">{area.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/60">
                  {area.description}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-block text-[10px] tracking-widest text-[#d2b47c]"
                >
                  MAKE AN ENQUIRY →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section id="attorneys" className="bg-[#f8f7f3] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-[#a17d42]">
              MEET THE TEAM
            </p>
            <h2 className="mt-5 font-serif text-4xl text-[#17243a] md:text-5xl">
              People Behind the Practice
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#69717a]">
              A demonstration of how a professional legal team introduction can
              be presented on the website.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {attorneys.map((attorney) => (
              <div key={attorney.name} className="group">
                <div className="overflow-hidden bg-[#e8e5dc]">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="h-[390px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-7 font-serif text-2xl text-[#17243a]">
                  {attorney.name}
                </h3>
                <p className="mt-2 text-xs tracking-widest text-[#967543]">
                  {attorney.role}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-[#858585]">
            Demo profiles and names for portfolio presentation only.
          </p>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-[#c5a46d] px-6 py-20 text-center text-[#101d30]">
        <p className="text-xs tracking-[0.3em]">START WITH A CONVERSATION</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl md:text-5xl">
          Every important decision deserves clarity.
        </h2>
        <a
          href="#contact"
          className="mt-9 inline-block border border-[#101d30] px-8 py-4 text-xs tracking-widest transition hover:bg-[#101d30] hover:text-white"
        >
          REQUEST AN ENQUIRY
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#f8f7f3] px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#a17d42]">
              CONTACT LEXORA
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#17243a] md:text-5xl">
              Let us understand your legal needs.
            </h2>
            <p className="mt-7 max-w-md text-sm leading-8 text-[#69717a]">
              Have a question or wish to discuss a legal matter? Send us an
              enquiry and our team will get in touch.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#a17d42]">
                  VISIT
                </p>
                <p className="mt-2 text-sm text-[#17243a]">
                  Hyderabad, Telangana, India
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#a17d42]">
                  CALL
                </p>
                <p className="mt-2 text-sm text-[#17243a]">+91 90000 00000</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#a17d42]">
                  EMAIL
                </p>
                <p className="mt-2 text-sm text-[#17243a]">hello@example.com</p>
              </div>
            </div>
          </div>

          <div className="border border-[#e2ded4] bg-white p-8 md:p-12">
            <p className="font-serif text-2xl text-[#17243a]">
              Send an Enquiry
            </p>
            <p className="mt-3 text-xs leading-6 text-[#858585]">
              Share a brief description of your enquiry. Please do not include
              confidential or sensitive information.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101d30] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-2xl tracking-[0.12em] text-[#d2b47c]">
              LEXORA
            </p>
            <p className="mt-2 text-[9px] tracking-[0.3em] text-white/60">
              LEGAL ASSOCIATES
            </p>
          </div>
          <p className="text-xs text-white/50">
            © 2026 Lexora Legal Associates. Portfolio demonstration.
          </p>
          <a href="#home" className="text-xs tracking-widest text-[#d2b47c]">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
