"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Contact", href: "/contact" },
];

function Brand() {
  return (
    <span className="block leading-tight">
      <span className="block font-serif text-3xl font-bold tracking-[0.14em] text-parchment">
        LEXORA
      </span>
      <span className="mt-1 block text-[10px] tracking-[0.3em] text-rose">
        LEGAL ASSOCIATES
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between bg-ink px-8 py-10 text-parchment lg:flex">
        <div>
          <Link href="/" aria-label="Lexora home">
            <Brand />
          </Link>

          <nav className="mt-14 flex flex-col gap-1" aria-label="Main">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-l-2 py-3 pl-4 text-sm tracking-wide transition ${
                    active
                      ? "border-maroon bg-white/5 text-white"
                      : "border-transparent text-parchment/65 hover:border-rose hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <Link
            href="/contact"
            className="block bg-maroon px-5 py-4 text-center text-xs font-semibold tracking-[0.18em] text-white transition hover:bg-maroon-dark"
          >
            FREE CONSULTATION
          </Link>
          <p className="mt-5 text-xs leading-6 text-parchment/50">
            New Delhi
            <br />
            Mon – Sat · 10 AM – 6 PM
          </p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 bg-ink text-parchment lg:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <Link
            href="/"
            aria-label="Lexora home"
            onClick={() => setOpen(false)}
          >
            <Brand />
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center border border-white/25"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-white/10 px-5 pb-6 pt-2"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-white/10 py-4 text-base ${
                  pathname === link.href ? "text-white" : "text-parchment/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 block bg-maroon px-5 py-4 text-center text-xs font-semibold tracking-[0.18em] text-white"
            >
              FREE CONSULTATION
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
