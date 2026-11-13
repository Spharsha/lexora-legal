"use client";

import { useEffect, useState, type FormEvent } from "react";
import { practiceAreas } from "../data";

function classify(value: string): "email" | "phone" | null {
  const v = value.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "email";
  const digits = v.replace(/[\s\-()+]/g, "");
  if (/^(91)?[6-9]\d{9}$/.test(digits)) return "phone";
  return null;
}

export default function ContactForm() {
  const [caseType, setCaseType] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const area = new URLSearchParams(window.location.search).get("area");
    if (area && practiceAreas.some((a) => a.title === area)) {
      setCaseType(area);
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const contact = String(formData.get("contact") || "");
    const kind = classify(contact);

    if (!kind) {
      setError(
        "Please enter a valid email address or a 10-digit mobile number.",
      );
      return;
    }

    setLoading(true);

    const payload: Record<string, unknown> = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: "New Legal Enquiry - Lexora Legal Associates (Demo)",
      name: formData.get("name"),
      contact,
      case_type: caseType,
      message: formData.get("message"),
    };
    if (kind === "email") payload.email = contact.trim();
    if (kind === "phone") payload.phone = contact.trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        setStatus(
          "Thank you. Your enquiry has been sent. We will get back to you soon.",
        );
        form.reset();
        setCaseType("");
      } else {
        setError(
          result.message || "Unable to send your enquiry. Please try again.",
        );
      }
    } catch {
      setError("Unable to send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full border border-line bg-paper px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-ink/40 focus:border-maroon focus:ring-2 focus:ring-maroon/15";
  const labelClass = "mb-2 block text-sm font-medium text-ink";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className={labelClass}>
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Enter your name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact" className={labelClass}>
          Email or Phone Number
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          autoComplete="email"
          placeholder="Email address or 10-digit mobile number"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="case_type" className={labelClass}>
          Type of Matter
        </label>
        <select
          id="case_type"
          name="case_type"
          required
          value={caseType}
          onChange={(e) => setCaseType(e.target.value)}
          className={fieldClass}
        >
          <option value="" disabled>
            Select practice area
          </option>
          {practiceAreas.map((area) => (
            <option key={area.id} value={area.title}>
              {area.title}
            </option>
          ))}
          <option value="Other Enquiry">Other Enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Briefly describe your matter (no confidential details)"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-maroon px-8 py-4 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-maroon-dark disabled:opacity-50"
      >
        {loading ? "SENDING..." : "SEND ENQUIRY"}
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
      {status && (
        <p role="status" className="text-sm text-maroon">
          {status}
        </p>
      )}

      <p className="text-xs leading-5 text-muted">
        Please do not submit confidential or sensitive legal information through
        this demonstration form.
      </p>
    </form>
  );
}
