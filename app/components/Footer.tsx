import Link from "next/link";

const socialClass =
  "flex h-10 w-10 items-center justify-center border border-white/20 text-sm font-semibold text-parchment/70 transition hover:border-rose hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-14 text-parchment sm:px-8 lg:px-12">
      <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl font-bold tracking-[0.14em]">
            LEXORA
          </p>
          <p className="mt-1 text-[10px] tracking-[0.3em] text-rose">
            LEGAL ASSOCIATES
          </p>
          <p className="mt-5 max-w-xs text-sm leading-6 text-parchment/55">
            Plain-language legal guidance for families, founders and businesses
            in Delhi NCR.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-rose">
            EXPLORE
          </h3>
          <div className="flex flex-col gap-3 text-sm text-parchment/65">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link
              href="/practice-areas"
              className="transition hover:text-white"
            >
              Practice Areas
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Free Consultation
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-rose">
            FOLLOW
          </h3>
          <div className="flex gap-3">
            <a href="#" aria-label="LinkedIn" className={socialClass}>
              in
            </a>
            <a href="#" aria-label="Facebook" className={socialClass}>
              f
            </a>
            <a href="#" aria-label="X" className={socialClass}>
              X
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 pt-8 text-xs text-parchment/45 md:flex-row">
        <p>© 2026 Lexora Legal Associates. All rights reserved.</p>
        <p className="text-rose">Demo website · Sample content</p>
      </div>
      <p className="mt-4 max-w-3xl text-[11px] leading-5 text-parchment/35">
        This is a demonstration website. Nothing here is legal advice, and no
        lawyer-client relationship is created by using it.
      </p>
    </footer>
  );
}
