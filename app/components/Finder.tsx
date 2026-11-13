"use client";

import Link from "next/link";
import { useState } from "react";
import { practiceAreas, situations } from "../data";

export default function Finder() {
  const [selected, setSelected] = useState("");

  const situation = situations.find((s) => s.label === selected);
  const area = practiceAreas.find((a) => a.id === situation?.areaId);

  return (
    <div className="border border-line bg-paper p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-[0.25em] text-maroon">
        NOT SURE WHERE TO START?
      </p>
      <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
        Find the right practice area
      </h2>

      <label htmlFor="situation" className="mt-6 block text-sm font-medium">
        What best describes your situation?
      </label>
      <select
        id="situation"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="mt-2 w-full border border-line bg-white px-4 py-3.5 text-base outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/15"
      >
        <option value="">Select your situation</option>
        {situations.map((s) => (
          <option key={s.label} value={s.label}>
            {s.label}
          </option>
        ))}
      </select>

      {area && (
        <div className="mt-6 border-l-4 border-maroon bg-parchment p-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-muted">
            RECOMMENDED AREA
          </p>
          <h3 className="mt-2 font-serif text-2xl font-bold">{area.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{area.summary}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={`#${area.id}`}
              className="border border-ink px-6 py-3 text-center text-xs font-semibold tracking-[0.15em] transition hover:bg-ink hover:text-white"
            >
              READ MORE
            </a>
            <Link
              href={`/contact?area=${encodeURIComponent(area.title)}`}
              className="bg-maroon px-6 py-3 text-center text-xs font-semibold tracking-[0.15em] text-white transition hover:bg-maroon-dark"
            >
              BOOK FREE CONSULTATION
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
