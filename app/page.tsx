import ClientShell from '@/components/ClientShell';
import Nav from '@/components/Nav';
import ScrollReveal from '@/components/ScrollReveal';
import ProductGrid from '@/components/ProductGrid';
import { watchThemes, collections } from '@/data/themes';

export default function Home() {
  return (
    <>
      <ClientShell />
      <div className="grain" />
      <div className="page-content">
        <Nav />

        {/* ── HERO ── */}
        <section id="hero" className="hero-section">
          <div className="hero-bg">
            <img src={watchThemes[0].image} alt="" className="hero-bg-img" />
            <div className="hero-overlay" />
          </div>
          <div className="hero-text">
            <p className="hero-label">Pakistan's Premium Watch Destination</p>
            <h1 className="hero-title">
              <span>JACK</span>
              <span><em>WATCHES</em></span>
            </h1>
            <p className="hero-sub">Authentic timepieces · Unbeatable prices · Delivered to your door</p>
            <div className="hero-cta">
              <a href="#shop" className="btn-primary">Shop Now</a>
              <a href="#brands" className="btn-ghost">Our Brands</a>
            </div>
          </div>
          <div className="scroll-indicator">
            <span className="scroll-text">Scroll</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[
              'Skmei', 'Patek Philippe', 'Rolex', 'Tissot', 'Dual Time', 'Chronograph',
              'Automatic', 'Quartz', 'Leather Strap', 'Skeleton', 'Skmei', 'Patek Philippe',
            ].map((item, i) => (
              <span key={i}>
                <span className="marquee-item">{item}</span>
                <span className="marquee-dot">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── COLLECTIONS ── */}
        <section id="shop" className="section-center">
          <span className="section-number">I</span>
          <ScrollReveal>
            <p className="section-label">I · Shop Collections</p>
            <h2 className="display-title" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
              Premium Watches at <em>Factory Prices</em>
            </h2>
            <p className="body-text" style={{ maxWidth: 500, margin: '0 auto 48px', textAlign: 'center' }}>
              From sporty chronographs to luxury automatics — explore our curated selection of the world's finest watch brands.
            </p>
          </ScrollReveal>

          <div className="brand-pills">
            {collections.map(c => (
              <a key={c.id} href={`#${c.id}`} className="pill">
                {c.name}
                <span className="pill-count">{c.count}</span>
              </a>
            ))}
          </div>

          <div id="skmei" style={{ marginTop: 88, width: '100%' }}>
            <ScrollReveal>
              <h3 className="collection-heading">Skmei Dual Time</h3>
              <p className="collection-desc">Durable, sporty dual-time watches built for everyday wear.</p>
            </ScrollReveal>
            <ProductGrid watches={watchThemes.filter(w => w.collection === 'skmei')} />
          </div>

          <div id="rlx" style={{ marginTop: 88, width: '100%' }}>
            <ScrollReveal>
              <h3 className="collection-heading">Rolex</h3>
              <p className="collection-desc">The most iconic watches on earth — Land Dweller, Daytona and GMT Master.</p>
            </ScrollReveal>
            <ProductGrid watches={watchThemes.filter(w => w.collection === 'rlx')} />
          </div>

          <div id="tissot" style={{ marginTop: 88, width: '100%' }}>
            <ScrollReveal>
              <h3 className="collection-heading">Tissot</h3>
              <p className="collection-desc">Swiss heritage, modern design. Leather chronographs and PRX automatics.</p>
            </ScrollReveal>
            <ProductGrid watches={watchThemes.filter(w => w.collection === 'tissot')} />
          </div>
        </section>

        {/* ── PATEK SHOWCASE ── */}
        <section id="patek" className="patek-showcase">
          <span className="section-number">II</span>
          <div className="patek-inner">
            <ScrollReveal direction="left" className="patek-content">
              <p className="section-label">II · Patek Philippe Nautilus</p>
              <h2 className="display-title">
                The Architecture of <em>Eternity</em>
              </h2>
              <p className="body-text" style={{ maxWidth: 'none' }}>
                Luxury-grade replicas with automatic and quartz movements. Stainless steel,
                sapphire crystal, and the unmistakable Nautilus silhouette — now within reach.
              </p>
              <div className="patek-highlights">
                <div>
                  <span className="patek-highlight-num">Rs.3,500</span>
                  <span className="patek-highlight-label">Starting Price</span>
                </div>
                <div>
                  <span className="patek-highlight-num">6</span>
                  <span className="patek-highlight-label">Models</span>
                </div>
                <div>
                  <span className="patek-highlight-num">3</span>
                  <span className="patek-highlight-label">Dial Colors</span>
                </div>
              </div>
              <ProductGrid watches={watchThemes.filter(w => w.collection === 'patek')} />
            </ScrollReveal>
          </div>
        </section>

        {/* ── BRANDS ── */}
        <section id="brands" className="section-center" style={{ background: 'rgba(201,168,76,.015)' }}>
          <div className="section-bg" />
          <span className="section-number">III</span>
          <ScrollReveal>
            <p className="section-label">III · Brands We Carry</p>
            <h2 className="display-title" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              Authentic Timepieces from the World's <em>Finest</em> Houses
            </h2>
          </ScrollReveal>
          <div className="brands-grid">
            {[
              { name: 'Skmei',          tag: 'Sport · Dual Time',   img: watchThemes[0].image, href: '#skmei' },
              { name: 'Patek Philippe', tag: 'Luxury · Automatic',  img: watchThemes[1].image, href: '#patek' },
              { name: 'Rolex',          tag: 'Iconic · Heritage',   img: watchThemes[4].image, href: '#rlx'   },
              { name: 'Tissot',         tag: 'Swiss · Precision',   img: watchThemes[7].image, href: '#tissot'},
            ].map(b => (
              <a key={b.name} href={b.href} className="brand-card">
                <div className="brand-image-wrap">
                  <img src={b.img} alt={b.name} loading="lazy" />
                </div>
                <div className="brand-info">
                  <h3 className="brand-name">{b.name}</h3>
                  <p className="brand-tag">{b.tag}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="section-center">
          <span className="section-number">IV</span>
          <ScrollReveal>
            <p className="section-label">IV · Why Jack Watches</p>
            <h2 className="display-title" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
              Quality You Can <em>Trust</em>
            </h2>
          </ScrollReveal>
          <div className="features-grid" style={{ marginTop: 52 }}>
            {[
              { n: '01', t: 'Premium Quality',   d: 'Every watch is hand-inspected before shipping. We stand behind every timepiece we sell.' },
              { n: '02', t: 'Best Prices',        d: 'Factory-direct pricing means you get luxury watches without the luxury markup.' },
              { n: '03', t: 'Fast Delivery',      d: 'Nationwide shipping with tracking. Your watch arrives safely, anywhere in Pakistan.' },
              { n: '04', t: 'Customer Support',   d: 'Real people, real help. Message us anytime — we answer within hours, not days.' },
            ].map(f => (
              <div key={f.n} className="feature-card">
                <div className="feature-num">{f.n}</div>
                <div className="feature-title">{f.t}</div>
                <div className="feature-text">{f.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── POLICY ── */}
        <section id="policy" className="section-center" style={{ background: 'rgba(201,168,76,.015)' }}>
          <div className="section-bg" />
          <span className="section-number">V</span>
          <ScrollReveal>
            <p className="section-label">V · Our Policy</p>
            <h2 className="display-title" style={{ textAlign: 'center' }}>
              Shopping with <em>Confidence</em>
            </h2>
          </ScrollReveal>
          <div className="policy-grid">
            {[
              {
                label: 'Security',
                title: 'Secure Payments',
                body:  'All transactions are processed securely. We accept bank transfers, EasyPaisa, and JazzCash.',
              },
              {
                label: 'Logistics',
                title: 'Shipping & Delivery',
                body:  'Free shipping on orders over Rs.5,000. Standard delivery takes 2–5 business days nationwide via Leopards Courier.',
              },
              {
                label: 'Satisfaction',
                title: 'Returns & Exchanges',
                body:  'Not happy? Return within 7 days for a full refund. Watches must be unused and in original packaging.',
              },
              {
                label: 'Assurance',
                title: 'Warranty',
                body:  'All watches carry a 30-day warranty against manufacturing defects. We\'ll repair or replace at no cost.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i as 0 | 1 | 2 | 3}>
                <div className="glass-panel" style={{ maxWidth: 'none' }}>
                  <span className="glass-label">{item.label}</span>
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="body-text" style={{ maxWidth: 'none' }}>{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── TERMS ── */}
        <section id="terms" className="section-center">
          <span className="section-number">VI</span>
          <ScrollReveal>
            <p className="section-label">VI · Terms of Service</p>
            <h2 className="display-title" style={{ textAlign: 'center' }}>
              How We <em>Operate</em>
            </h2>
          </ScrollReveal>
          <div className="terms-content">
            <ScrollReveal delay={0}>
              <div className="glass-panel" style={{ maxWidth: 720, margin: '0 auto' }}>
                <span className="glass-label">Agreement</span>
                <p className="body-text" style={{ maxWidth: 'none', marginBottom: 8 }}>
                  By purchasing from Jack Watches, you agree to the following terms:
                </p>
                <ul className="terms-list">
                  <li>All product images are for illustration. Actual product may vary slightly.</li>
                  <li>Prices are in Pakistani Rupees (PKR) and are subject to change without notice.</li>
                  <li>Orders are processed within 24 hours of payment confirmation.</li>
                  <li>We reserve the right to cancel any order due to stock unavailability.</li>
                  <li>Your privacy matters — we never share your data with third parties.</li>
                  <li>By placing an order, you confirm you are 18 years or older.</li>
                  <li>Warranty does not cover damage from misuse, water damage, or normal wear and tear.</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="section-center" style={{ background: 'rgba(201,168,76,.015)' }}>
          <div className="section-bg" />
          <span className="section-number">VII</span>
          <ScrollReveal>
            <p className="section-label">VII · Get In Touch</p>
            <h2 className="display-title" style={{ textAlign: 'center' }}>
              We'd Love to <em>Hear</em> From You
            </h2>
          </ScrollReveal>
          <div className="contact-grid">
            {[
              {
                label: 'WhatsApp',
                title: '+92 300 1234567',
                body:  'Message us directly for the fastest response. We reply within 2 hours.',
                delay: 0,
              },
              {
                label: 'Email',
                title: 'hello@jackwatches.pk',
                body:  'For order inquiries, returns, or general questions. We reply within 24 hours.',
                delay: 1,
              },
              {
                label: 'Location',
                title: 'Karachi, Pakistan',
                body:  'Online orders only — we deliver nationwide to every city in Pakistan.',
                delay: 2,
              },
              {
                label: 'Hours',
                title: 'Mon–Sat, 10AM–8PM',
                body:  'Sunday hours: 12PM–6PM. We\'re always happy to assist you.',
                delay: 3,
              },
            ].map(item => (
              <ScrollReveal key={item.label} delay={item.delay as 0 | 1 | 2 | 3}>
                <div className="glass-panel" style={{ maxWidth: 'none' }}>
                  <span className="glass-label">{item.label}</span>
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="body-text" style={{ maxWidth: 'none' }}>{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="final-section">
          <div className="section-bg" />
          <span className="section-number">VIII</span>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: 32 }}>VIII · Start Your Collection</p>
            <h2 className="mega-title">
              Your Next Watch<br />is One <em>Click</em> Away
            </h2>
            <div className="hero-cta">
              <a href="#shop" className="btn-primary">Browse All Watches</a>
              <a href="#contact" className="btn-ghost">Contact Us</a>
            </div>
          </ScrollReveal>
        </section>

        {/* ── FOOTER ── */}
        <footer>
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-logo">Jack Watches</span>
              <p className="footer-tagline">
                Pakistan's premium destination for authentic timepieces.
                Quality you can trust, prices you'll love.
              </p>
            </div>
            <div>
              <span className="footer-col-head">Navigate</span>
              <ul className="footer-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#brands">Brands</a></li>
                <li><a href="#policy">Policy</a></li>
                <li><a href="#terms">Terms</a></li>
              </ul>
            </div>
            <div>
              <span className="footer-col-head">Contact</span>
              <p className="footer-info-line">+92 300 1234567</p>
              <p className="footer-info-line">hello@jackwatches.pk</p>
              <p className="footer-info-line">Karachi, Pakistan</p>
              <p className="footer-info-line" style={{ marginTop: 20, color: 'var(--muted)' }}>
                Mon–Sat 10AM–8PM
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">Jack Watches © 2026 · All rights reserved</span>
          </div>
        </footer>

      </div>
    </>
  );
}
