import React, { useEffect, useRef, useState } from 'react';
import './Modularfactory.css';

/* ═══════════════════════════════════════════════════
   RELIABLE IMAGE SOURCES — all verified working
═══════════════════════════════════════════════════ */
const I = {
  // Hero
  heroMain:   'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  heroFloat:  'https://static.vecteezy.com/system/resources/previews/037/962/164/non_2x/ai-generated-laser-cutting-of-metal-on-cnc-machines-modern-industrial-technology-for-manufacturing-industrial-parts-modern-metalworking-photo.jpg',
  // Gallery strip — all verified
  gal1: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kdWxhciUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
  gal2: 'https://static.vecteezy.com/system/resources/thumbnails/028/623/809/small/indoor-close-up-realistic-minimalist-modern-cupboard-ai-generative-free-photo.jpg',
  gal3: 'https://t4.ftcdn.net/jpg/06/95/15/09/360_F_695150920_qoXcO4ANBZb78TJSbgclOrWYExfZ7MeG.jpg',
  gal4: 'https://www.avikalp.com/cdn/shop/products/MWZ3345_wallpaper3.jpg?v=1746037987',
  gal5: 'https://img.freepik.com/free-photo/closeup-worker-spraying-paint-processed-wood-production-facility_637285-12069.jpg?semt=ais_hybrid&w=740&q=80',
  gal6: 'https://images6.alphacoders.com/329/thumb-1920-329921.jpg',
  // Why Factory
  whyBig: 'https://t4.ftcdn.net/jpg/07/26/28/45/360_F_726284561_WEUmKV7Ia5NacUcdbMje3PZ7H1thGvbQ.jpg',
  whySm1: 'https://s3.ap-south-1.amazonaws.com/images.woodenstreet.de/image/data/blog-images/cnc-cutting-design/cnc-laser-cutting-design.jpg',
  whySm2: 'https://thumbs.dreamstime.com/b/carpenter-works-edge-banding-machine-workshop-carpenter-works-edge-banding-machine-workshop-115246708.jpg',
  // Showcase
  sc1: 'https://www.finetoshine.com/wp-content/uploads/2020/07/Modular-Kitchen-Designs-Hd-Photos.png',
  sc2: 'https://5.imimg.com/data5/SELLER/Default/2023/2/BQ/TU/AF/33934380/modern-bedroom-wardrobe.jpg',
  sc3: 'https://i.pinimg.com/originals/82/2f/d3/822fd3a227370187957ecef8ee6f2f0e.jpg',
  sc4: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  sc5: 'https://www.craftedbeds.co.uk/cdn/shop/articles/c6229643564835.57f4204983b16.jpg?v=1654414798',
  // Materials
  matTall: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  matSm1:  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80',
  matSm2:  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=400&q=80',
  // B2B
  b2b: 'https://media.istockphoto.com/id/134581710/photo/man-constructing-cabinet-units-in-new-kitchen.jpg?s=612x612&w=0&k=20&c=qM8RekDmXiTt-T66n2AJSW7hiBJ6whwctBPw9D-j2xk=',
  // Ideal cards
  ideal1: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&w=600&q=80',
  ideal2: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80',
  ideal3: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
  // Banner
  banner: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80',
  // About
  aboutTall: 'https://img.freepik.com/free-photo/marking-wall_1098-19455.jpg?semt=ais_rp_50_assets&w=740&q=80',
  aboutSm1:  'https://media.istockphoto.com/id/134581710/photo/man-constructing-cabinet-units-in-new-kitchen.jpg?s=612x612&w=0&k=20&c=qM8RekDmXiTt-T66n2AJSW7hiBJ6whwctBPw9D-j2xk=',
  aboutSm2:  'https://thumbs.dreamstime.com/b/advanced-cnc-wood-cutting-machine-exemplifies-precision-automation-modern-woodworking-its-numerical-control-system-350876452.jpg',
};

/* ═══════════════════════════════════════════════════
   SCROLL REVEAL HOOK
═══════════════════════════════════════════════════ */
function useReveal() {
  
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* Reveal wrapper */
function R({ children, dir = '', delay = 0, className = '' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${dir} ${className}`}
         style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   NAV — sticky with scroll effect
═══════════════════════════════════════════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className={`mf-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">Modular <span>Factory</span></div>
      {/* <div className="nav-links">
        <a href="#factory">Factory</a>
        <a href="#process">Process</a>
        <a href="#projects">Projects</a>
        <a href="#b2b">B2B</a>
        <a href="#about">About</a>
        <a href="#form">Contact</a>
      </div> */}
      <a href="#form" className="btn btn-orange" style={{ padding: '10px 22px', fontSize: '0.8rem' }}>
        Book Visit →
      </a>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════
   HERO — stats now horizontal on left
═══════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow1" />
        <div className="hero-bg-glow2" />
        <div className="hero-bg-ring" />
        <div className="hero-bg-ring2" />
      </div>

      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">Hyderabad's Premier Modular Factory</span>
          </div>
          <h1>
            Precision Built.
            <span className="line-or">Factory Finished.</span>
            Delivered.
          </h1>
          <p className="hero-desc">
            Deeraj Modulars operates a 15,000+ sq.ft state-of-the-art production facility
            delivering precision, consistency, and premium finish for kitchens, wardrobes
            and bespoke furniture across Hyderabad.
          </p>
          <div className="hero-ctas">
            <a href="#form"   className="btn btn-orange">🏭 Book Factory Visit</a>
            <a href="#b2b"    className="btn btn-outline-white">🤝 B2B Partnership</a>
          </div>

          {/* ─── MOVED HERE ─── horizontal stats on left side ─── */}
          <div className="hero-stats-horizontal">
            {[
              ['15K+', 'SQ.FT AREA'],
              ['50+',  'TECHNICIANS'],
              ['1000', 'SETS/MONTH'],
              ['500+', 'PROJECTS DONE']
            ].map(([num, label], i) => (
              <div key={i} className="hero-stat-item">
                <div className="hero-stat-num">{num}</div>
                <div className="hero-stat-label">{label}</div>
              </div>
            ))}
          </div>
          {/* ──────────────────────────────────────────────── */}

        </div>

        {/* RIGHT — image stack */}
        <div className="hero-right">
          <div className="hero-img-wrap">
            <img className="hero-img-main" src={I.heroMain} alt="Factory production floor" />
            <img className="hero-img-float" src={I.heroFloat} alt="CNC precision cutting" />
            <div className="hero-badge-float">
              <div className="big">9+</div>
              <div className="sm">Process Stages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   TICKER / MARQUEE
═══════════════════════════════════════════════════ */
const TICKS = ['Factory-Made Quality','15,000+ Sq.Ft Facility','500–1000 Sets Per Month','CNC Precision Cutting','Edge Banding','Multi-Boring','Premium Laminates','Hettich Hardware','White-Label Support','On-Time Delivery'];

function Ticker() {
  const items = [...TICKS, ...TICKS];
  return (
    <div className="mf-ticker">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span className="ticker-item" key={i}>
            <span className="ticker-dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   GLANCE
═══════════════════════════════════════════════════ */
const GLANCE_DATA = [
  { icon: '🏗️', num: '15,000', unit: '+', desc: 'Sq.Ft Covered Production Area' },
  { icon: '👷', num: '50',     unit: '+', desc: 'Skilled Technicians & Supervisors' },
  { icon: '📦', num: '1000',   unit: '',  desc: 'Modular Sets Per Month' },
  { icon: '⚙️', num: '9',      unit: '',  desc: 'Advanced Machinery Stages' },
  { icon: '🏆', num: '500',    unit: '+', desc: 'Projects Delivered' },
];

function Glance() {
  return (
    <section className="section glance" id="factory">
      <div className="inner">
        <R>
          <div className="glance-head">
            <div className="eyebrow">Factory at a Glance</div>
            <h2 className="h-section" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', color: 'var(--navy)', marginBottom: 16 }}>
              Professional Execution <span style={{ color: 'var(--orange)' }}>at Scale</span>
            </h2>
            <p className="mf-sub">
              Our in-house facility is equipped with advanced CNC machinery, a skilled team, and
              a structured production workflow that ensures consistent quality at every scale.
            </p>
          </div>
        </R>
        <div className="glance-grid">
          {GLANCE_DATA.map((c, i) => (
            <R key={i} delay={i * 0.08}>
              <div className="glance-card">
                <div className="glance-icon">{c.icon}</div>
                <div className="glance-num h-number" style={{ fontSize: '2.4rem' }}>
                  {c.num}<span>{c.unit}</span>
                </div>
                <div className="glance-desc">{c.desc}</div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   GALLERY STRIP
═══════════════════════════════════════════════════ */
const GAL = [
  { src: I.gal1, label: 'Modular Kitchen' },
  { src: I.gal2, label: 'Wardrobe Design' },
  { src: I.gal3, label: 'Factory Floor' },
  { src: I.gal4, label: 'Living Spaces' },
  { src: I.gal5, label: 'Surface Finishes' },
  { src: I.gal6, label: 'Bedroom Interiors' },
];

function GalleryStrip() {
  return (
    <div className="gallery-strip">
      {GAL.map((g, i) => (
        <div className="gallery-strip-item" key={i}>
          <img src={g.src} alt={g.label} loading="lazy" />
          <div className="gal-label">{g.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   WHY FACTORY
═══════════════════════════════════════════════════ */
const WHY_DATA = [
  { icon: '✨', title: 'Perfect Finishing',  desc: 'Uniform edge banding and panel alignment across every single unit — no variation.' },
  { icon: '⚡', title: 'Faster Handover',    desc: 'Pre-built modules drastically reduce on-site installation time and mess.' },
  { icon: '🛡️', title: 'Higher Durability',  desc: 'Stronger joints and controlled assembly conditions ensure years of performance.' },
  { icon: '🔍', title: 'Quality Assurance',  desc: 'Multiple-stage inspection at every step before any module is dispatched.' },
  { icon: '🎨', title: 'Full Customization', desc: 'Built precisely to your layout, storage needs, and finish preferences.' },
];

function WhyFactory() {
  return (
    <section className="section why">
      <div className="inner">
        <div className="why-grid">
          <R dir="from-right">
            <div className="why-imgs">
              <img className="why-img-big"  src={I.whyBig}  alt="Factory production" />
              <img className="why-img-sm"   src={I.whySm1}  alt="CNC cutting" />
              <img className="why-img-sm"   src={I.whySm2}  alt="Edge banding process" />
            </div>
          </R>
          <R dir="from-left" delay={0.15}>
            <div>
              <div className="eyebrow eyebrow--white">Why Factory-Based</div>
              <h2 className="h-section" style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)', color: 'var(--white)', marginBottom: 16 }}>
                Superior Results from <span style={{ color: 'var(--orange)' }}>Controlled Production</span>
              </h2>
              <p style={{ color: 'var(--white-60)', lineHeight: 1.78, fontSize: '1rem', maxWidth: 480 }}>
                Every panel, edge, and fitting meets our strict quality benchmarks before leaving
                the factory floor — no shortcuts, no surprises on-site.
              </p>
              <ul className="why-items">
                {WHY_DATA.map((w, i) => (
                  <li className="why-item" key={i}>
                    <div className="why-item-ic">{w.icon}</div>
                    <div>
                      <div className="why-item-title">{w.title}</div>
                      <div className="why-item-desc">{w.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PROCESS
═══════════════════════════════════════════════════ */
const PROCESS_DATA = [
  { icon: '📐', title: 'Design & Cutlist',       desc: '2D layouts, 3D visualizations, material & hardware specs prepared and converted to CNC-readable data.', tags: ['2D Layout','3D Viz','CNC Data'] },
  { icon: '🔪', title: 'CNC Panel Cutting',       desc: 'Plywood, MDF, HDHMR boards precision-cut using CNC panel saws for perfect dimensional accuracy.', tags: ['Panel Saw','Nesting','Batch'] },
  { icon: '🖼️', title: 'Laminate Pressing',       desc: 'Decorative laminates pressed using hot press, cold press & vacuum membrane for bubble-free finish.', tags: ['Hot Press','Cold Press','Vacuum'] },
  { icon: '🔲', title: 'Edge Banding',            desc: 'Exposed board edges sealed with premium PVC/ABS tape for moisture protection and superior aesthetics.', tags: ['PVC','ABS','Moisture Proof'] },
  { icon: '🔩', title: 'Multi-Boring & Drilling', desc: 'Precision holes drilled for hinges, drawer channels, connectors, shelf supports and assembly fittings.', tags: ['Hinges','Drawers','Connectors'] },
  { icon: '✂️', title: 'CNC Routing',             desc: 'Decorative cutting, slotting, grooving, handle profiles and custom design patterns executed precisely.', tags: ['Routing','Grooving','Profiles'] },
  { icon: '🧩', title: 'Assembly & QC',           desc: 'Modules assembled to verify structural strength, alignment, hardware fitting and finish quality before dispatch.', tags: ['Strength','Alignment','Hardware QC'] },
  { icon: '📦', title: 'Packing & Logistics',     desc: 'Each panel packed with protective foam, edge protectors, moisture-resistant wrap and label identification.', tags: ['Foam','Edge Guards','Labels'] },
  { icon: '🔧', title: 'Site Installation',       desc: 'On-site team handles module fitting, door alignment, drawer installation and final cleaning.', tags: ['Fitting','Alignment','Finishing'] },
];

function Process() {
  return (
    <section className="section process" id="process">
      <div className="inner">
        <R>
          <div className="process-head">
            <div className="eyebrow">Manufacturing Workflow</div>
            <h2 className="h-section" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', color: 'var(--navy)', marginBottom: 16 }}>
              9-Stage Precision <span style={{ color: 'var(--orange)' }}>Production Process</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
              From design to site-ready installation — every stage engineered for accuracy.
            </p>
          </div>
        </R>
        <div className="process-grid">
          {PROCESS_DATA.map((s, i) => (
            <R key={i} delay={i * 0.05}>
              <div className="process-card">
                <div className="pc-step-num">{String(i+1).padStart(2,'0')}</div>
                <div className="pc-icon">{s.icon}</div>
                <div className="pc-title">{s.title}</div>
                <div className="pc-desc">{s.desc}</div>
                <div className="pc-tags">
                  {s.tags.map((t, j) => <span className="pc-tag" key={j}>{t}</span>)}
                </div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SHOWCASE
═══════════════════════════════════════════════════ */
const SC_DATA = [
  { src: I.sc1, cls: 'sc-1', tag: 'Modular Kitchen',   title: 'Premium Kitchen Suite',    sub: 'Villa Project · Kompally' },
  { src: I.sc2, cls: 'sc-2', tag: 'Wardrobe',          title: 'Full-Wall Wardrobe',        sub: '3BHK · Hyderabad' },
  { src: I.sc3, cls: 'sc-3', tag: 'Living Interiors',  title: 'Bespoke Living Room',       sub: 'Apartment · Secunderabad' },
  { src: I.sc4, cls: 'sc-4', tag: 'Surface Finishes',  title: 'Premium Acrylic Finish',    sub: 'Commercial · Jubilee Hills' },
  { src: I.sc5, cls: 'sc-5', tag: 'Bedroom Interiors', title: 'Master Bedroom Suite',      sub: 'Residential · Gachibowli' },
];

function Showcase() {
  return (
    <section className="section showcase" id="projects">
      <div className="inner">
        <R>
          <div className="showcase-head">
            <div>
              <div className="eyebrow eyebrow--white">Our Work</div>
              <h2 className="h-section" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', color: 'var(--white)' }}>
                Projects That <span style={{ color: 'var(--orange)' }}>Speak Quality</span>
              </h2>
            </div>
            <a href="#form" className="btn btn-orange">Discuss Your Project →</a>
          </div>
        </R>
        <R delay={0.1}>
          <div className="showcase-grid">
            {SC_DATA.map((item, i) => (
              <div className={`sc ${item.cls}`} key={i}>
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="sc-overlay">
                  <div>
                    <div className="sc-tag-pill">{item.tag}</div>
                    <div className="sc-title">{item.title}</div>
                    <div className="sc-sub">{item.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </R>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   MATERIALS
═══════════════════════════════════════════════════ */
const MAT_DATA = [
  { name: 'BWP / Best Plywood',       desc: 'Boiling water-proof calibrated plywood — superior moisture resistance and structural strength.' },
  { name: 'Decorative Laminates',     desc: 'Wide range of textures and colours for stylish, durable surface finishes.' },
  { name: 'Acrylic High-Gloss',       desc: 'Premium acrylic for a sleek, modern look with easy-clean maintenance.' },
  { name: 'PU Coating',               desc: 'Polyurethane finish for a smooth, scratch-resistant, long-lasting surface.' },
  { name: 'Natural Wood Veneers',     desc: 'Real wood veneers for an organic, luxury aesthetic in premium projects.' },
  { name: 'Hettich / Hafele Hardware',desc: 'Branded hardware ensuring smooth, silent, long-term operation.' },
];

function Materials() {
  return (
    <section className="section materials">
      <div className="inner">
        <div className="mat-grid">
          <R dir="from-right">
            <div className="mat-imgs">
              <img className="mat-img-tall" src={I.matTall} alt="Premium material finishes" />
              <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
                <img className="mat-img-sm" src={I.matSm1} alt="Interior bedroom finish" />
                <img className="mat-img-sm" src={I.matSm2} alt="Wardrobe finish" />
              </div>
            </div>
          </R>
          <R dir="from-left" delay={0.15}>
            <div>
              <div className="eyebrow">Materials & Finishes</div>
              <h2 className="h-section" style={{ fontSize: 'clamp(2rem,3.5vw,2.6rem)', color: 'var(--navy)', marginBottom: 16 }}>
                Premium Materials. <span style={{ color: 'var(--orange)' }}>Reliable Hardware.</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.78, maxWidth: 480 }}>
                Carefully curated material and finish combinations based on budget, performance,
                and design requirements — ensuring lasting beauty with every module.
              </p>
              <div className="mat-items">
                {MAT_DATA.map((m, i) => (
                  <div className="mat-item" key={i}>
                    <div className="mat-bullet" />
                    <div>
                      <div className="mat-name">{m.name}</div>
                      <div className="mat-info">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   B2B
═══════════════════════════════════════════════════ */
const B2B_FEATS = [
  { icon: '🏭', title: 'Factory Production',         desc: 'Consistent quality from controlled factory environment.' },
  { icon: '📐', title: 'Per-Drawing Accuracy',        desc: 'Designs executed exactly as specified — zero deviation.' },
  { icon: '📊', title: 'Bulk Project Handling',       desc: 'Scaled capacity for large apartment complexes.' },
  { icon: '🧹', title: 'Clean Site Installation',     desc: 'Minimal mess, professional finish every time.' },
  { icon: '👥', title: 'Dedicated Coordination',      desc: 'Single point of contact for your entire project.' },
  { icon: '🏷️', title: 'White-Label Support',         desc: 'Execute seamlessly under your brand name.' },
  { icon: '⏱️', title: 'Timeline Discipline',         desc: 'On-time delivery with clear milestone tracking.' },
  { icon: '💰', title: 'Transparent Costing',         desc: 'No hidden charges. Clear itemized pricing always.' },
];

const IDEAL_DATA = [
  { title: 'For Architects',         img: I.ideal1, items: ['Protect design intent throughout','Technical detailing support','White-label execution available','No micromanagement needed','Precision as per your drawings'] },
  { title: 'For Interior Designers', img: I.ideal2, items: ['Clean factory finish every time','Custom modular solutions','Respect for creative concepts','Any material & finish combination','Professional handover experience'] },
  { title: 'For Builders',           img: I.ideal3, items: ['Bulk unit production at scale','On-time delivery for apartments','Standardized quality across all flats','Dedicated project team assigned','Milestone-based execution plan'] },
];

function B2B() {
  return (
    <section className="section b2b" id="b2b">
      <div className="inner">
        {/* Top split */}
        <div className="b2b-top">
          <R dir="from-right">
            <img className="b2b-img" src={I.b2b} alt="B2B execution partner" />
          </R>
          <R dir="from-left" delay={0.15}>
            <div>
              <div className="eyebrow eyebrow--white">B2B Collaboration</div>
              <h2 className="h-section" style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)', color: 'var(--white)', marginBottom: 16 }}>
                Execution Partner for <span style={{ color: 'var(--orange)' }}>Architects & Builders</span>
              </h2>
              <p style={{ color: 'var(--white-60)', lineHeight: 1.78, marginBottom: 36 }}>
                We support architects, interior designers, and builders as a reliable execution
                and modular manufacturing partner — ensuring your designs are brought to life
                with precision, consistency, and timely delivery.
              </p>
              <div style={{ display:'flex', gap: 14, flexWrap:'wrap' }}>
                <a href="#form" className="btn btn-orange">🤝 Partner With Us</a>
                <a href="https://wa.me/91 9000700930" className="btn btn-outline-white">💬 WhatsApp Us</a>
              </div>
            </div>
          </R>
        </div>

        {/* Features */}
        <R>
          <div className="eyebrow eyebrow--white" style={{ marginBottom: 20 }}>Why Partner With Us</div>
          <div className="b2b-feat-grid">
            {B2B_FEATS.map((f, i) => (
              <div className="b2b-card" key={i}>
                <div className="b2b-card-ic">{f.icon}</div>
                <div className="b2b-card-title">{f.title}</div>
                <div className="b2b-card-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </R>

        {/* Ideal clients */}
        <R delay={0.1}>
          <div className="eyebrow eyebrow--white" style={{ marginBottom: 20, marginTop: 24 }}>Who We Work With</div>
          <div className="b2b-ideal-grid">
            {IDEAL_DATA.map((col, i) => (
              <div className="b2b-ideal-card" key={i}>
                <img className="b2b-ideal-img" src={col.img} alt={col.title} loading="lazy" />
                <div className="b2b-ideal-body">
                  <div className="b2b-ideal-title">{col.title}</div>
                  <ul className="b2b-ideal-list">
                    {col.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </R>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FULL-BLEED BANNER
═══════════════════════════════════════════════════ */
function Banner() {
  return (
    <div className="banner">
      <img src={I.banner} alt="Deeraj factory facility" />
      <div className="banner-ov">
        <div className="banner-content">
          <R>
            <>
              <h2>15,000+ Sq.Ft of <span>Pure</span><br />Manufacturing Power</h2>
              <p>
                Visit our factory and experience the difference in build quality — advanced CNC
                machinery, skilled 50+ member teams, and zero-compromise quality checks at every stage.
              </p>
              <div className="banner-btns">
                <a href="#form" className="btn btn-orange">📍 Book a Factory Visit</a>
                <a href="tel:+91 9000700930" className="btn btn-outline-white">📞 Call Now</a>
              </div>
            </>
          </R>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════════ */
const TESTI_DATA = [
  { name: 'Ar. Rajesh Kumar',   role: 'Principal Architect – RK Designs',     proj: 'Residential Villa Project',  init: 'RK', text: 'Deeraj Interiors executed our modular kitchen and wardrobe work exactly as per our drawings. The factory finish and alignment were impressive. Their team maintained proper coordination throughout.' },
  { name: 'Mr. Srinivas Reddy', role: 'Project Director – XYZ Constructions', proj: '45 Flat Apartment Project',   init: 'SR', text: 'We partnered with Deeraj Interiors for modular kitchen job work across multiple units. Their factory production helped us maintain timeline discipline and consistent quality across all flats.' },
  { name: 'Ms. Sneha Sharma',   role: 'Interior Designer – SS Studio',         proj: 'Premium 3BHK Project',       init: 'SS', text: 'I prefer working with Deeraj Interiors for modular execution because they truly respect design intent and deliver clean finishing. Their white-label support is also very professional.' },
];

function Testimonials() {
  return (
    <section className="section testi">
      <div className="inner">
        <R>
          <div className="testi-head">
            <div className="eyebrow">Client Stories</div>
            <h2 className="h-section" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', color: 'var(--navy)', marginBottom: 12 }}>
              What Our <span style={{ color: 'var(--orange)' }}>Partners Say</span>
            </h2>
          </div>
        </R>
        <div className="testi-grid">
          {TESTI_DATA.map((t, i) => (
            <R key={i} delay={i * 0.12}>
              <div className="testi-card">
                <div className="testi-quote-bg">"</div>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-profile">
                  <div className="testi-avatar">{t.init}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                    <div className="testi-project">{t.proj}</div>
                  </div>
                </div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════ */
const ABOUT_PTS = [
  'In-house modular manufacturing facility', 'Structured project management approach',
  'Dedicated coordination team', 'Clean site installation process',
  'Support for architects, designers & builders', 'Experience Center — live material selection',
  'Transparent costing & milestone-based execution', 'After-sales support and service commitment',
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="inner">
        <div className="about-grid">
          <R dir="from-right">
            <div className="about-imgs">
              <img className="about-img-tall" src={I.aboutTall} alt="Deeraj Modulars facility" />
              <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
                <img className="about-img-sm" src={I.aboutSm1} alt="Kitchen installation" />
                <img className="about-img-sm" src={I.aboutSm2} alt="Precision machining" />
              </div>
            </div>
          </R>
          <R dir="from-left" delay={0.15}>
            <div>
              <div className="eyebrow">About Us</div>
              <h2 className="h-section" style={{ fontSize: 'clamp(2rem,3.5vw,2.6rem)', color: 'var(--navy)', marginBottom: 16 }}>
                Deeraj Interiors / <span style={{ color: 'var(--orange)' }}>Deeraj Modulars</span>
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.78, marginBottom: 14, fontSize: '0.97rem' }}>
                A Hyderabad-based modular manufacturing and interior execution company committed to
                delivering precision-built, factory-finished interior solutions from our 15,000+ sq.ft
                in-house facility and Experience Center at Kompally.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.78, marginBottom: 24, fontSize: '0.9rem' }}>
                Specializing in Modular Kitchens, Wardrobes, Bespoke Furniture, Commercial Interiors,
                Corporate Offices, and complete Home Décor &amp; Furnishing Solutions.
              </p>
              <div className="eyebrow" style={{ marginBottom: 12, fontSize: '0.68rem' }}>Our Mission</div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.88rem', marginBottom: 28 }}>
                100+ quality projects annually · 5 experience centers each year · 100+ happy customers —
                built on trust, quality, and total transparency.
              </p>
              <div className="about-pts">
                {ABOUT_PTS.map((p, i) => (
                  <div className="about-pt" key={i}>{p}</div>
                ))}
              </div>
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   TEAM
═══════════════════════════════════════════════════ */
const TEAM_DATA = [
  { init: 'S',  name: 'Ms. Shanthi',       role: 'Founder & Managing Director',              bio: 'Leads Deeraj Interiors with a strong focus on structured operations, customer experience, and long-term brand development — building a professionally managed modular manufacturing ecosystem.' },
  { init: 'S',  name: 'Mr. Sunder',         role: 'Director – Operations | Sales | Execution', bio: 'Drives sales growth while overseeing factory production, project execution, and quality control. Ensures timelines, finishing standards, and customer satisfaction are consistently delivered.' },
  { init: 'SR', name: 'Mr. Seshagiri Raju', role: 'Advisory Director – Strategy & Expansion', bio: 'Supports strategic planning, business expansion, and sales enhancement. Focuses on growth planning, operational scalability, factory process improvement, and market positioning.' },
];

function Team() {
  return (
    <section className="section team">
      <div className="inner">
        <R>
          <div className="team-head">
            <div className="eyebrow eyebrow--white">Our Leadership</div>
            <h2 className="h-section" style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', color: 'var(--white)' }}>
              The <span style={{ color: 'var(--orange)' }}>People</span> Behind the Quality
            </h2>
          </div>
        </R>
        <div className="team-grid">
          {TEAM_DATA.map((m, i) => (
            <R key={i} delay={i * 0.12}>
              <div className="team-card">
                <div className="team-photo">
                  <div className="team-avatar">{m.init}</div>
                </div>
                <div className="team-info">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                  <div className="team-bio">{m.bio}</div>
                </div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   CTA STRIP
═══════════════════════════════════════════════════ */
function CTAStrip() {
  return (
    <section className="cta-strip">
      <div className="cta-strip-inner">
        <R>
          <h2>Let's Build Better<br />Spaces Together.</h2>
          <p>
            📍 Visit our factory — experience the difference firsthand.<br />
            Book a factory visit or schedule a collaboration meeting today.
          </p>
          <div className="cta-strip-btns">
            <a href="#form" className="btn btn-white">🤝 Become a Business Associate</a>
            <a href="#form" className="btn btn-outline-white">📅 Schedule Collaboration</a>
            <a href="tel:+91 9000700930" className="btn btn-outline-white">📞 Call Now</a>
            <a href="https://wa.me/91 9000700930" className="btn btn-outline-white">💬 WhatsApp</a>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FORM
═══════════════════════════════════════════════════ */
function FormSection() {
  return (
    <section className="section form-section" id="form">
      <div className="inner">
        <div className="form-wrap">
          <R dir="from-right">
            <div className="form-info">
              <div className="eyebrow eyebrow--white">Partner With Us</div>
              <h2 className="h-section" style={{ fontSize: 'clamp(2rem,3.5vw,2.6rem)', color: 'var(--white)', marginBottom: 0 }}>
                Request <span style={{ color: 'var(--orange)' }}>Collaboration</span>
              </h2>
              <p>
                Whether you're an architect, builder, or interior designer — our team will reach
                out within 24 hours to discuss your project requirements.
              </p>
              <ul className="form-contacts">
                <li><span style={{ fontSize: '1.2rem' }}>📍</span> Experience Center, Kompally, Hyderabad</li>
                <li><span style={{ fontSize: '1.2rem' }}>📞</span> +91 9000700930</li>
                <li><span style={{ fontSize: '1.2rem' }}>💬</span> WhatsApp: +91 9000700930</li>
                <li><span style={{ fontSize: '1.2rem' }}>✉️</span> deerajinteriors@gmail.com</li>
              </ul>
            </div>
          </R>

          <R dir="from-left" delay={0.15}>
            <div className="form-box">
              {[['Your Name','text','Full name'],['Company Name','text','Company / Studio']].map(([l,t,p],i) => (
                <div key={i}>
                  <label>{l}</label>
                  <input type={t} placeholder={p} />
                </div>
              ))}
              <div>
                <label>Your Role</label>
                <select>
                  <option value="">Select Role</option>
                  {['Architect','Interior Designer','Builder / Developer','Business Associate','Homeowner'].map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label>Project Type</label>
                <select>
                  <option value="">Select Type</option>
                  {['Residential Villa','Apartment Complex','Commercial Office','Retail / Showroom','Hospitality'].map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label>Phone</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label>WhatsApp</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label>Expected Volume</label>
                <input type="text" placeholder="e.g. 10 units, 1 villa" />
              </div>
              <div>
                <label>Your Location</label>
                <input type="text" placeholder="City / Area" />
              </div>
              <div className="form-full">
                <label>Message</label>
                <textarea placeholder="Tell us about your project requirements..." />
              </div>
              <button className="btn btn-orange form-submit form-full">
                🚀 Request Collaboration
              </button>
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════ */
function Footer() {
  
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">Deeraj <span>Modulars</span></div>
            <p className="footer-desc">
              Hyderabad's trusted factory-based modular interior manufacturing brand.
              From design to installation — precision, consistency, and premium finish every time.
            </p>
            <div className="footer-socials">
              {['📘','📸','▶️','💼'].map((ic,i) => <a key={i} href="#" className="footer-social">{ic}</a>)}
            </div>
          </div>
          {[
            { h: 'Services',  l: ['Modular Kitchens','Wardrobes & Storage','Bespoke Furniture','Commercial Interiors','Home Décor & Styling'] },
            { h: 'B2B',       l: ['For Architects','For Builders','For Designers','Factory Job Work','Partner With Us'] },
            { h: 'Company',   l: ['About Us','Our Factory','Experience Center','Leadership Team','Contact Us'] },
          ].map(col => (
            <div className="footer-col" key={col.h}>
              <h4>{col.h}</h4>
              <ul className="footer-links">
                {col.l.map(s => <li key={s}><a href="#">{s}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© DEERAJ TECHNOLOGIES PRIVATE LIMITED. | Kompally, Hyderabad</span>
          <span>Precision Built. Professionally Delivered.</span>
        </div>
      </div>
    </footer>
  );

}

/* ═══════════════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════════════ */
export default function ModularFactory() {
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  return (
    <div className="mf">
      <Nav />
      <Hero />
      <Ticker />
      <Glance />
      <GalleryStrip />
      <WhyFactory />
      <Process />
      <Showcase />
      <Materials />
      <B2B />
      <Banner />
      <Testimonials />
      <About />
      <Team />
      <CTAStrip />
      <FormSection />
      <Footer />
    </div>
    
  );
  
}