import styles from "./page.module.css";
import ContactForm from "./ContactForm";

const WA_NUMBER = "233209573700";
const WA_MESSAGE = encodeURIComponent(
  "Hi OmniLocal, I'd like to talk about getting my business online."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const SERVICES = [
  {
    title: "Web Design & Development",
    body: "A fast, mobile-ready website that turns visitors into customers — built and launched, not just designed.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="13" rx="2" stroke="#fff" strokeWidth="1.6" />
        <path d="M8 21h8M12 17v4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Graphic Design & Branding",
    body: "A logo, colors, and visuals that look the same on your signboard, your Instagram, and your invoices.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Google Business Profile Optimization",
    body: "Show up when nearby customers search for what you sell, with a profile that's complete, accurate, and active.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s7-6.3 7-11.5A7 7 0 105 9.5C5 14.7 12 21 12 21z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="9.5" r="2.4" stroke="#fff" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "AI Chatbot Development",
    body: "Answer customer questions and take bookings on WhatsApp or your site, even while you're serving someone in person.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="5" width="16" height="12" rx="3" stroke="#fff" strokeWidth="1.6" />
        <path d="M9 20l2.5-3h1L15 20" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="11" r="1" fill="#fff" />
        <circle cx="15" cy="11" r="1" fill="#fff" />
      </svg>
    ),
  },
];

const WHY = [
  {
    title: "Integrated solutions",
    body: "Your site, your brand, your Google profile, and your chatbot all connected — not four freelancers who don't talk to each other.",
  },
  {
    title: "Tech-forward approach",
    body: "We build with the same AI tools reshaping the industry, so you get modern work at a local price.",
  },
  {
    title: "Local focus",
    body: "We know what a Kasoa customer searches for and how they decide who to call — that shapes everything we build.",
  },
  {
    title: "Measurable growth",
    body: "You'll know what's working: profile views, site visits, and enquiries, reported in plain language.",
  },
];

const PORTFOLIO = [
  {
    label: "Restaurant & Café Sites",
    note: "Sample layout",
    img: "https://images.unsplash.com/photo-1564486054178-d8de60bd3071?w=800&q=75&auto=format&fit=crop",
  },
  {
    label: "Retail & Boutique Sites",
    note: "Sample layout",
    img: "https://images.unsplash.com/photo-1556740767-414a9c4860c1?w=800&q=75&auto=format&fit=crop",
  },
  {
    label: "Service Business Sites",
    note: "Sample layout",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=75&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <div className={styles.logo}>
            <PinMark size={22} />
            Omni<span>Local</span>
          </div>
          <nav className={styles.nav}>
            <a href="#services">Services</a>
            <a href="#why">Why Us</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.headerCta}>
            WhatsApp Us
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>Kasoa, Ghana — Digital Growth Agency</p>
                <h1 className={styles.heroTitle}>
                  Your business is real.<br />Make it <em>findable.</em>
                </h1>
                <p className={styles.heroSub}>
                  OmniLocal builds the website, brand, Google presence, and chatbot
                  that turn people searching nearby into people walking through
                  your door — or messaging you directly.
                </p>
                <div className={styles.heroActions}>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                    Chat on WhatsApp →
                  </a>
                  <a href="#services" className={styles.btnGhost}>
                    See what we do
                  </a>
                </div>
                <div className={styles.heroStats}>
                  <div className={styles.heroStat}>
                    <b>4</b>
                    <span>Core Services</span>
                  </div>
                  <div className={styles.heroStat}>
                    <b>24/7</b>
                    <span>Online Presence</span>
                  </div>
                  <div className={styles.heroStat}>
                    <b>1</b>
                    <span>Point of Contact</span>
                  </div>
                </div>
              </div>

              <div className={styles.signStage}>
                <div className={styles.sign}>
                  <div className={styles.signGlow} />
                  <div className={styles.signPin}>
                    <PinMark size={26} />
                  </div>
                  <p className={styles.signTitle}>
                    Omni<span>Local</span>
                  </p>
                  <p className={styles.signSub}>Now open for business</p>

                  <div className={styles.signRow}>
                    <span><i className={styles.signDot} />Web Design</span>
                    <span>Live</span>
                  </div>
                  <div className={styles.signRow}>
                    <span><i className={styles.signDot} />Branding</span>
                    <span>Live</span>
                  </div>
                  <div className={styles.signRow}>
                    <span><i className={styles.signDot} />Google Profile</span>
                    <span>Live</span>
                  </div>
                  <div className={styles.signRow}>
                    <span><i className={styles.signDot} />AI Chatbot</span>
                    <span>Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.tickerOuter}>
            <div className={styles.tickerTrack}>
              {[...Array(2)].map((_, i) => (
                <div key={i} style={{ display: "flex" }}>
                  <span className={styles.tickerItem}><b>Web Design</b> & Development</span>
                  <span className={styles.tickerItem}><b>Graphic Design</b> & Branding</span>
                  <span className={styles.tickerItem}><b>Google Business</b> Profile Optimization</span>
                  <span className={styles.tickerItem}><b>AI Chatbot</b> Development</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className={styles.section} id="services">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>What We Do</p>
              <h2 className={styles.sectionTitle}>Four services. One local growth engine.</h2>
              <p className={styles.sectionBody}>
                Everything a local business needs to be found, trusted, and
                contacted online — handled under one roof.
              </p>
            </div>
            <div className={styles.services}>
              {SERVICES.map((s) => (
                <div className={styles.card} key={s.title}>
                  <div className={styles.cardIcon}>{s.icon}</div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardBody}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className={`${styles.section} ${styles.why}`} id="why">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker} style={{ color: "var(--gold)" }}>
                Why OmniLocal
              </p>
              <h2 className={styles.sectionTitle} style={{ color: "#fff" }}>
                Built for businesses that don&apos;t have time to chase four vendors.
              </h2>
            </div>
            <div className={styles.whyGrid}>
              {WHY.map((w) => (
                <div className={styles.whyItem} key={w.title}>
                  <h3 className={styles.whyTitle}>{w.title}</h3>
                  <p className={styles.whyBody}>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className={styles.section} id="work">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Our Work</p>
              <h2 className={styles.sectionTitle}>Sample layouts</h2>
              <p className={styles.sectionBody}>
                We&apos;re a young agency building our first client showcase.
                These are sample layouts in the style we build — real projects
                will replace them as they launch.
              </p>
            </div>
            <div className={styles.portGrid}>
              {PORTFOLIO.map((p, i) => (
                <div className={styles.browser} key={p.label}>
                  <div className={styles.browserBar}>
                    <span className={styles.browserDot} />
                    <span className={styles.browserDot} />
                    <span className={styles.browserDot} />
                  </div>
                  <div className={styles.browserScreen}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.label}
                      className={styles.browserImg}
                      loading="lazy"
                    />
                    <span className={styles.browserBadge}>Sample Style</span>
                  </div>
                  <div className={styles.portCaption}>
                    <b>{p.label}</b>
                    <span>{p.note}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.portNote}>
              Want to be our first featured project? Ask about launch pricing when you reach out.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className={`${styles.section} ${styles.contact}`} id="contact">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Get In Touch</p>
              <h2 className={styles.sectionTitle}>Tell us about your business</h2>
              <p className={styles.sectionBody}>
                Fastest way to reach us is WhatsApp. Prefer email? Use the form
                and we&apos;ll reply within a day.
              </p>
            </div>
            <div className={styles.contactGrid}>
              <div className={styles.waCard}>
                <div>
                  <div className={styles.waBubble}>
                    <b>OmniBot:</b> Hi 👋 tell us what your business does and
                    what you need help with, and we&apos;ll get right back to you.
                  </div>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                    Message us on WhatsApp →
                  </a>
                </div>
                <div className={styles.waMeta}>
                  +233 20 957 3700<br />
                  omnilocalagency@gmail.com<br />
                  Kasoa, Ghana
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footerRow}>
            <div className={styles.logo} style={{ fontSize: "1rem" }}>
              <PinMark size={18} />
              Omni<span>Local</span>
            </div>
            <div className={styles.footerLinks}>
              <a href="tel:+233209573700">+233 20 957 3700</a>
              <a href="mailto:omnilocalagency@gmail.com">omnilocalagency@gmail.com</a>
              <span>Kasoa, Ghana</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function PinMark({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7.5-6.8 7.5-12.5A7.5 7.5 0 104.5 9.5C4.5 15.2 12 22 12 22z"
        fill="url(#pinGrad)"
      />
      <circle cx="12" cy="9.5" r="3" fill="#0b1c39" />
      <defs>
        <linearGradient id="pinGrad" x1="4.5" y1="2" x2="19.5" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5b8fff" />
          <stop offset="1" stopColor="#3b74f0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
