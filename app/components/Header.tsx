const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PRACTICE AREAS", href: "#practice" },
  { label: "ATTORNEYS", href: "#attorneys" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full border-b border-white/15 bg-[#101d30]/95 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="leading-tight">
          <span className="block font-serif text-2xl tracking-[0.12em] text-[#d2b47c]">
            LEXORA
          </span>
          <span className="mt-1 block text-[9px] tracking-[0.35em] text-white/70">
            LEGAL ASSOCIATES
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] tracking-[0.16em] text-white/80 transition hover:text-[#d2b47c]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border border-[#c5a46d] px-5 py-3 text-[10px] tracking-[0.15em] text-[#d2b47c] transition hover:bg-[#c5a46d] hover:text-[#101d30] md:block"
        >
          FREE CONSULTATION
        </a>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-3xl text-[#d2b47c]">
            ☰
          </summary>
          <nav className="absolute right-0 top-12 flex w-64 flex-col gap-5 border border-white/10 bg-[#101d30] p-6 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-widest text-white/90 hover:text-[#d2b47c]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-xs tracking-widest text-[#d2b47c]"
            >
              FREE CONSULTATION
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
