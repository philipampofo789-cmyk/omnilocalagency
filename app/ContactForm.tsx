"use client";

import { useState } from "react";
import styles from "./page.module.css";

const SERVICES = [
  "Web Design & Development",
  "Graphic Design & Branding",
  "Google Business Profile Optimization",
  "AI Chatbot Development",
  "Not sure yet",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `New enquiry: ${service}`;
    const body = [
      `Name: ${name}`,
      `Business: ${business}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:omnilocalagency@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <div className={`${styles.formRow} ${styles.two}`}>
        <div className={styles.field}>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ama Mensah"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="business">Business name</label>
          <input
            id="business"
            required
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="e.g. Mensah Foods"
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="service">Service you need</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="message">Tell us about your business</label>
          <textarea
            id="message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What do you sell, and what's the one thing you want your online presence to do for you?"
          />
        </div>
      </div>

      <button type="submit" className={styles.submitBtn}>
        {sent ? "Opening your email…" : "Send enquiry"}
      </button>
      <p className={styles.formNote}>
        Opens your email app addressed to omnilocalagency@gmail.com — or skip
        the form and message us on WhatsApp instead.
      </p>
    </form>
  );
}
