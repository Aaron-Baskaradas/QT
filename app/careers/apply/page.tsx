"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { FormEvent, useState } from "react";

export default function CareerApplication() {
  const [submitted, setSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState("");

  function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const role = String(form.get("role") || "");
    const location = String(form.get("location") || "");
    const experience = String(form.get("experience") || "");
    const message = String(form.get("message") || "");
    const subject = `Career application: ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Area of interest: ${role}`,
      `Current location: ${location}`,
      `Experience: ${experience}`,
      "",
      "Why would you like to work with Quartodonda?",
      message,
      "",
      resumeName ? `Resume selected: ${resumeName}` : "Resume: I will attach my resume before sending."
    ].join("\n");

    window.location.href = `mailto:quartodondatech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <main className="page-flow careers-page">
      <div className="topline">
        <span className="status-dot" />
        <span>ENGINEERING AT THE INTERSECTION OF RF, RADIO & RADAR</span>
        <span className="topline-right">THANJAVUR · INDIA</span>
      </div>

      <header className="nav-wrap">
        <Link className="brand" href="/" aria-label="Quartodonda home">
          <span className="brand-mark"><Image src="/quartodonda-logo.png" alt="Quartodonda Technologies logo" width={82} height={61} priority /></span>
          <span className="brand-copy"><strong>QUARTODONDA</strong><small>TECHNOLOGIES</small></span>
        </Link>
        <nav className="nav-links careers-nav">
          <Link href="/">Home</Link>
          <Link href="/careers">Careers</Link>
          <Link className="nav-cta" href="mailto:quartodondatech@gmail.com">Get in touch <ArrowDownRight size={16} /></Link>
        </nav>
      </header>

      <section className="application-shell section-shell">
        <Link className="back-link" href="/careers"><ArrowLeft size={15} /> Back to careers</Link>
        <div className="application-heading">
          <h1>Start with<br /><em>curiosity.</em><span className="period">.</span></h1>
          <p>Tell us a little about yourself and the kind of problems you want to solve. We review every thoughtful application.</p>
        </div>

        <form className="application-form" onSubmit={submitApplication}>
          <div className="form-section">
            <div className="form-grid">
              <label><span>FULL NAME *</span><input name="name" required placeholder="Your name" /></label>
              <label><span>EMAIL ADDRESS *</span><input name="email" type="email" required placeholder="you@example.com" /></label>
              <label><span>PHONE NUMBER</span><input name="phone" type="tel" placeholder="+91 ..." /></label>
              <label><span>CURRENT LOCATION</span><input name="location" placeholder="City, country" /></label>
            </div>
          </div>

          <div className="form-section">
            <div className="form-grid">
              <label><span>AREA OF INTEREST *</span>
                <select name="role" required defaultValue="">
                  <option value="" disabled>Select an area</option>
                  <option>RF & Microwave Engineering</option>
                  <option>Embedded & Signal Processing</option>
                  <option>Radar Systems & Research</option>
                  <option>Other / General application</option>
                </select>
              </label>
              <label><span>YEARS OF EXPERIENCE</span><input name="experience" placeholder="e.g. 2 years / Graduate" /></label>
              <label className="full-width"><span>WHY WOULD YOU LIKE TO WORK WITH US? *</span><textarea name="message" required rows={5} placeholder="Tell us what you build, what you want to learn, or what interests you about Quartodonda." /></label>
            </div>
          </div>

          <div className="form-section">
            <label className="resume-upload">
              <FileText size={22} />
              <span><strong>{resumeName || "Choose your resume"}</strong><small>PDF, DOC or DOCX · 10 MB recommended maximum</small></span>
              <input type="file" accept=".pdf,.doc,.docx" onChange={(event) => setResumeName(event.target.files?.[0]?.name || "")} />
            </label>
            <p className="upload-note">Your resume cannot be attached automatically through an email draft. After clicking submit, please attach the selected file to the email before sending.</p>
          </div>

          <div className="application-submit">
            <button className="button button-primary" type="submit">Open application email <ArrowRight size={17} /></button>
            {submitted && <p className="submit-status"><CheckCircle2 size={17} /> Your email draft should be open. Attach your resume, then send it to complete your application.</p>}
          </div>
        </form>
      </section>

      <footer className="footer section-shell">
        <Link className="footer-brand" href="/">Quartodonda Technologies</Link>
        <p>Precision in the invisible.</p>
        <div className="footer-right"><span>© 2021 Quartodonda Technologies Private Limited</span><Link href="/careers">Back to careers ↑</Link></div>
      </footer>
    </main>
  );
}
