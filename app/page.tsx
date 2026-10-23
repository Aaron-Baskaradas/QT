"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  RadioTower,
  Radar,
  Plane,
  ShieldCheck,
  Cpu,
  Menu,
  X,
  MapPin,
  Mail,
  ExternalLink,
  Waves,
  CircuitBoard,
  Crosshair
} from "lucide-react";

const email = "quartodondatech@gmail.com";
const address = "41, Valampuri Street, Vennar Bank Post, Thanjavur, Tamil Nadu 613003";

const capabilities = [
  {
    number: "01",
    icon: RadioTower,
    title: "RF Engineering",
    description:
      "Radio-frequency engineering and system-level thinking for demanding real-world applications."
  },
  {
    number: "02",
    icon: Radar,
    title: "Radio & Radar Systems",
    description:
      "Radio- and radar-based concepts for sensing, surveillance and situational awareness."
  },
  {
    number: "03",
    icon: Plane,
    title: "Airborne Applications",
    description:
      "Technology concepts designed with the needs of airborne platforms and aerospace environments in mind."
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Tactical & Civilian Use",
    description:
      "A focus on adaptable RF solutions for both tactical and civilian application areas."
  }
];

const principles = [
  {
    icon: Crosshair,
    title: "Purpose-led engineering",
    text: "Start with the mission, the operating environment and the problem that needs solving."
  },
  {
    icon: Waves,
    title: "Working with the spectrum",
    text: "Treat RF performance, signal behaviour and system integration as connected design challenges."
  },
  {
    icon: CircuitBoard,
    title: "From concept to system",
    text: "Bring hardware, signal processing and practical deployment constraints into the same conversation."
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <main>
      <div className="topline">
        <span className="status-dot" />
        <span>ENGINEERING AT THE INTERSECTION OF RF, RADIO & RADAR</span>
        <span className="topline-right">THANJAVUR · INDIA</span>
      </div>

      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Quartodonda home" onClick={closeMenu}>
          <span className="brand-mark"><Image src="/quartodonda-logo.png" alt="Quartodonda Technologies logo" width={82} height={52} priority /></span>
          <span className="brand-copy">
            <strong>QUARTODONDA</strong>
            <small>TECHNOLOGIES</small>
          </span>
        </a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#company" onClick={closeMenu}>Company</a>
          <a href="/careers" onClick={closeMenu}>Careers</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <ArrowDownRight size={16} /></a>
        </nav>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span>01 / INTRODUCTION</span><span className="eyebrow-line" /></div>
            <h1>Fields<br /><em>shape</em> reality<span className="period">.</span></h1>
            <p className="hero-lede">
              Engineering radio-frequency, radio and radar-based solutions for complex missions — on the ground and in the air.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#capabilities">Explore capabilities <ArrowRight size={17} /></a>
              <a className="text-link" href="#company">Discover Quartodonda <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-note">
              <span className="note-rule" />
              <span>Precision in the invisible.<br />Purpose in every system.</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract electromagnetic field illustration">
            <div className="art-label label-top"><span>FIELD / 01</span><span>RF SYSTEMS</span></div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orbit orbit-four" />
            <div className="art-core"><Radar size={60} strokeWidth={0.9} /></div>
            <div className="signal signal-a" />
            <div className="signal signal-b" />
            <div className="signal signal-c" />
            <div className="coordinate coord-a">10°47&apos; N</div>
            <div className="coordinate coord-b">79°08&apos; E</div>
            <div className="art-label label-bottom"><span>FIG. 001</span><span>ENERGY · SIGNAL · SYSTEM</span></div>
            <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>
          </div>
        </div>
        <div className="hero-footer">
          <span>INDEPENDENT THINKING. APPLIED ENGINEERING.</span>
          <a href="#capabilities">Scroll to explore <span className="scroll-line" /></a>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-shell intro-grid">
          <p className="section-kicker">THE BIG PICTURE <span>— 01</span></p>
          <div>
            <h2>Turning invisible<br /><span>forces into useful systems.</span></h2>
            <p className="intro-text">
              Quartodonda Technologies is an engineering company based in Thanjavur, Tamil Nadu. Its publicly described focus is the design and development of ground-based and airborne radio- and radar-based solutions for tactical and civilian applications.
            </p>
          </div>
          <div className="intro-aside">
            <div className="aside-icon"><Cpu size={23} /></div>
            <span>ENGINEERED FOR THE REAL WORLD</span>
            <p>RF is more than a signal. It is a system, an environment and a mission.</p>
          </div>
        </div>
      </section>

      <section className="capabilities section-shell" id="capabilities">
        <div className="section-heading">
          <div>
            <p className="section-kicker">WHAT WE FOCUS ON <span>— 02</span></p>
            <h2>Capabilities<span className="period">.</span></h2>
          </div>
          <p className="heading-side">A systems-minded perspective on technologies that operate through signals, fields and sensing.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article className="capability-card" key={item.number}>
                <div className="card-top"><span>{item.number}</span><Icon size={24} strokeWidth={1.3} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-bottom"><span>CAPABILITY AREA</span><ArrowDownRight size={18} /></div>
              </article>
            );
          })}
        </div>
        <p className="disclaimer">The areas above summarise the company&apos;s publicly described focus and are not a claim that every listed solution is currently available as a commercial product.</p>
      </section>

      <section className="approach" id="approach">
        <div className="section-shell approach-layout">
          <div className="approach-title">
            <p className="section-kicker">HOW WE THINK <span>— 03</span></p>
            <h2>Built around<br /><em>the mission.</em></h2>
            <p>Good engineering starts by understanding the conditions a system must work in — then connecting the right technical pieces.</p>
            <a className="text-link" href="#contact">Start a conversation <ArrowRight size={16} /></a>
          </div>
          <div className="principles">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return <article className="principle" key={item.title}>
                <span className="principle-num">0{index + 1}</span>
                <div className="principle-icon"><Icon size={22} strokeWidth={1.4} /></div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <ArrowDownRight className="principle-arrow" size={19} />
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="company section-shell" id="company">
        <div className="company-visual">
          <div className="company-logo-frame">
            <Image src="/quartodonda-logo.png" alt="Quartodonda Technologies logo" width={442} height={280} />
          </div>
          <div className="company-stamp"><span>Q</span><small>FIELDS<br />SHAPE<br />REALITY</small></div>
          <span className="visual-caption">QUARTODONDA / EST. 2021</span>
        </div>
        <div className="company-copy">
          <p className="section-kicker">THE COMPANY <span>— 04</span></p>
          <h2>Rooted in<br /><em>engineering.</em></h2>
          <p>Quartodonda Technologies Private Limited is an Indian private limited company incorporated in December 2021 and registered in Thanjavur, Tamil Nadu.</p>
          <p>Our name and identity reflect a belief that the unseen — electromagnetic fields, waves and signals — can shape tangible outcomes when engineering is applied with intent.</p>
          <div className="company-facts">
            <div><span>INCORPORATED</span><strong>2021</strong></div>
            <div><span>BASED IN</span><strong>Thanjavur, India</strong></div>
            <div><span>COMPANY TYPE</span><strong>Private Limited</strong></div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-shell contact-inner">
          <div className="contact-top">
            <p className="section-kicker">LET&apos;S CONNECT <span>— 05</span></p>
            <span className="contact-index">Q / 2026</span>
          </div>
          <h2>Have a technical<br />challenge in mind<span className="period">?</span></h2>
          <p className="contact-lede">Tell us what you are working on. We welcome conversations around RF engineering, radio and radar-based systems, and potential collaborations.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${email}?subject=${encodeURIComponent("Enquiry for Quartodonda Technologies")}`}>Email the team <ArrowRight size={17} /></a>
            <button className="button button-outline" onClick={copyEmail}><Mail size={16} /> {copied ? "Email copied" : email}</button>
          </div>
          <div className="contact-details">
            <div className="contact-detail"><MapPin size={19} /><div><span>REGISTERED OFFICE</span><p>{address}</p><a href="https://www.google.com/maps/search/?api=1&query=41%20Valampuri%20Street%20Vennar%20Bank%20Thanjavur%20613003" target="_blank" rel="noreferrer">Open in Maps <ExternalLink size={13} /></a></div></div>
            <div className="contact-detail"><Mail size={19} /><div><span>EMAIL</span><p>{email}</p><a href={`mailto:${email}`}>Write an email <ArrowRight size={13} /></a></div></div>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <a className="footer-brand" href="#home">QUARTODONDA<span>®</span></a>
        <p>Fields shape reality.</p>
        <div className="footer-right"><span>© {new Date().getFullYear()} Quartodonda Technologies Private Limited</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
