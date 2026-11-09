"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    );
    formData.append("subject", "New Legal Enquiry - Lexora Legal Associates");

    setStatus("Sending your enquiry...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Thank you! Your enquiry has been submitted successfully.");
        form.reset();
      } else {
        setStatus(
          result.message || "Unable to submit your enquiry. Please try again.",
        );
      }
    } catch {
      setStatus("Unable to submit your enquiry. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full border-b border-[#ddd8cd] bg-transparent py-4 text-sm outline-none focus:border-[#a17d42]"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full border-b border-[#ddd8cd] bg-transparent py-4 text-sm outline-none focus:border-[#a17d42]"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full border-b border-[#ddd8cd] bg-transparent py-4 text-sm outline-none focus:border-[#a17d42]"
      />

      <select
        name="practice_area"
        defaultValue=""
        required
        className="w-full border-b border-[#ddd8cd] bg-white py-4 text-sm text-[#777] outline-none focus:border-[#a17d42]"
      >
        <option value="" disabled>
          Select Practice Area
        </option>
        <option>Corporate Law</option>
        <option>Family Law</option>
        <option>Property Law</option>
        <option>Civil Litigation</option>
        <option>Employment Law</option>
        <option>Contract Law</option>
        <option>Other Enquiry</option>
      </select>

      <textarea
        name="message"
        rows={4}
        placeholder="Briefly describe your enquiry (do not include confidential details)"
        required
        className="w-full resize-none border-b border-[#ddd8cd] bg-transparent py-4 text-sm outline-none focus:border-[#a17d42]"
      />

      <button
        type="submit"
        className="w-full bg-[#101d30] px-8 py-5 text-xs tracking-widest text-white transition hover:bg-[#263c59]"
      >
        SEND ENQUIRY
      </button>

      {status && (
        <p className="text-sm leading-6 text-[#80602e]" role="status">
          {status}
        </p>
      )}

      <p className="text-[10px] leading-5 text-[#999]">
        Please do not submit confidential or sensitive legal information through
        this demonstration form.
      </p>
    </form>
  );
}
