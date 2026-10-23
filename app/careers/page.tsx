import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowRight, Cpu, RadioTower, Radar } from "lucide-react";

const opportunities = [
  {
    number: "01",
    title: "RF & Microwave Engineering",
    description: "Work across radio-frequency systems, antenna concepts and the engineering decisions that turn signals into dependable capability.",
    icon: RadioTower
  },
  {
    number: "02",
    title: "Embedded & Signal Processing",
    description: "Help build the software and embedded intelligence that makes sensing, communications and radar systems useful in the real world.",
    icon: Cpu
  },
  {
    number: "03",
    title: "Radar Systems & Research",
    description: "Explore sensing, detection and system integration challenges alongside a team focused on practical, mission-led engineering.",
    icon: Radar
  }
];

export default function Careers() {
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
          <Link href="/#company">Company</Link>
          <Link className="nav-cta" href="mailto:quartodondatech@gmail.com?subject=Careers%20at%20Quartodonda">Start a conversation <ArrowDownRight size={16} /></Link>
        </nav>
      </header>

      <section className="careers-hero section-shell">
        <Link className="back-link" href="/"><ArrowLeft size={15} /> Back to Quartodonda</Link>
        <div className="careers-hero-grid">
          <div>
            <h1>Build what<br /><em>travels unseen.</em><span className="period">.</span></h1>
          </div>
          <div className="careers-intro">
            <p>We are building an engineering culture for people who are curious about the invisible forces that connect the world.</p>
            <p>At Quartodonda, you will work close to the problem, learn across disciplines and help shape systems for demanding environments.</p>
            <Link className="button button-primary" href="/careers/apply">Introduce yourself <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="careers-band">
        <div className="section-shell careers-band-grid">
          <div>
            <h2>Make the invisible<br /><em>matter.</em></h2>
            <p>Our work sits where engineering meets purpose: radio, radar and RF systems that need to perform beyond the lab. We value clear thinking, careful experimentation and people who want to make a meaningful contribution from day one.</p>
          </div>
        </div>
      </section>

      <section className="careers-opportunities section-shell">
        <div className="section-heading">
          <div>
            <h2>Open fields<span className="period">.</span></h2>
          </div>
          <p className="heading-side">We welcome thoughtful applications even when a specific role is not listed.</p>
        </div>
        <div className="opportunity-grid">
          {opportunities.map((item) => {
            const Icon = item.icon;
            return <article className="opportunity-card" key={item.number}>
              <div className="card-top"><span>{item.number}</span><Icon size={24} strokeWidth={1.3} /></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="card-bottom"><span>AREAS OF INTEREST</span><ArrowDownRight size={18} /></div>
            </article>;
          })}
        </div>
      </section>

      <section className="careers-cta">
        <div className="section-shell careers-cta-inner">
          <h2>No perfect profile.<br /><em>Just real curiosity.</em></h2>
          <p>Tell us what you build, what you want to learn and where you think you can make a difference.</p>
          <Link className="button button-primary" href="/careers/apply">Start your application <ArrowRight size={17} /></Link>
        </div>
      </section>

      <footer className="footer section-shell">
        <Link className="footer-brand" href="/">Quartodonda Technologies</Link>
        <p>Precision in the invisible.</p>
        <div className="footer-right"><span>© 2021 Quartodonda Technologies Private Limited</span><Link href="/">Back to home ↑</Link></div>
      </footer>
    </main>
  );
}
