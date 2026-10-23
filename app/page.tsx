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
  Waves,
  CircuitBoard,
  Crosshair
} from "lucide-react";

const email = "quartodondatech@gmail.com";

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
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="page-flow">
      <div className="topline">
        <span className="status-dot" />
        <span>ENGINEERING AT THE INTERSECTION OF RF, RADIO & RADAR</span>
        <span className="topline-right">THANJAVUR · INDIA</span>
      </div>

      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Quartodonda home" onClick={closeMenu}>
          <span className="brand-mark"><Image src="/quartodonda-logo.png" alt="Quartodonda Technologies logo" width={82} height={61} priority /></span>
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
          <a className="nav-cta" href={`mailto:${email}`} onClick={closeMenu}>Get in touch <ArrowDownRight size={16} /></a>
        </nav>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
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

        </div>
        <div className="hero-footer">
          <span>INDEPENDENT THINKING. APPLIED ENGINEERING.</span>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-shell intro-grid">
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
      </section>

      <section className="approach" id="approach">
        <div className="section-shell approach-layout">
          <div className="approach-title">
            <h2>Built around<br /><em>the mission.</em></h2>
            <p>Good engineering starts by understanding the conditions a system must work in — then connecting the right technical pieces.</p>
            <a className="text-link" href={`mailto:${email}?subject=${encodeURIComponent("Enquiry for Quartodonda Technologies")}`}>Start a conversation <ArrowRight size={16} /></a>
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
            <Image src="/quartodonda-logo.png" alt="Quartodonda Technologies logo" width={496} height={368} />
          </div>
          <div className="company-stamp"><span>Q</span><small>FIELDS<br />SHAPE<br />REALITY</small></div>
          <span className="visual-caption">QUARTODONDA / EST. 2021</span>
        </div>
        <div className="company-copy">
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

      <footer className="footer section-shell">
        <div className="footer-main-row">
          <a className="footer-brand" href="#home">Quartodonda Technologies</a>
          <p>Fields shape reality.</p>
        </div>
        <span className="footer-copyright">© 2021 Quartodonda Technologies Private Limited</span>
      </footer>
    </main>
  );
}
