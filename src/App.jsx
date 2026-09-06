import { useEffect, useState } from 'react'

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.3" />
  </svg>
)

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m3 11 9-7 9 7" />
    <path d="M5 10v10h14V10M9 20v-6h6v6" />
  </svg>
)

const KeyIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="8" cy="12" r="4" />
    <path d="M12 12h9M18 12v3M15 12v2" />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 19V9M10 19V5M16 19v-7M22 19V2" />
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

const services = [
  {
    icon: <HomeIcon />,
    number: '01',
    title: 'Buying in Pahrump',
    text: 'Compare homes, acreage, and different property types with guidance that keeps your priorities, budget, and next move in focus.',
  },
  {
    icon: <KeyIcon />,
    number: '02',
    title: 'Selling With a Plan',
    text: 'Get practical help with pricing, positioning, preparation, and the decisions that carry a Pahrump home from listing to closing.',
  },
  {
    icon: <ChartIcon />,
    number: '03',
    title: 'Local Guidance',
    text: 'Ask questions early. Marci helps you understand the area, weigh your options, and connect with trusted local resources when you need them.',
  },
]

const pathways = [
  {
    number: '01',
    title: 'Buy a Home',
    text: 'Looking for Pahrump homes for sale, more land, or a different pace of life? Start with your priorities and build the search from there.',
    href: '#contact',
    cta: 'Start your home search',
  },
  {
    number: '02',
    title: 'Sell Your Home',
    text: 'Get a clear plan for pricing, presentation, exposure, and the next steps involved in selling a home in Pahrump.',
    href: '#sell',
    cta: 'See the selling approach',
  },
  {
    number: '03',
    title: 'Relocating to Pahrump',
    text: 'Learn what everyday life can look like here, from open desert surroundings and mountain views to neighborhood and recreation options.',
    href: '#life-in-pahrump',
    cta: 'Explore the area',
  },
]

const marketNotes = [
  {
    title: 'Homes & Acreage',
    text: 'Pahrump offers a mix of established neighborhoods, residential homes, larger lots, and properties with more open space.',
  },
  {
    title: 'A Different Pace',
    text: 'Many buyers are drawn to the area for breathing room, wide-open Nevada views, and a setting that feels less dense than a major city.',
  },
  {
    title: 'Local Details Matter',
    text: 'Property type, location, utilities, land, and neighborhood features can vary. Local knowledge helps you compare the details that matter.',
  },
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealItems = document.querySelectorAll('[data-reveal]')

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
      )

      revealItems.forEach((item) => observer.observe(item))

      return () => {
        window.removeEventListener('scroll', onScroll)
        observer.disconnect()
      }
    }

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className={`topbar ${isScrolled ? 'topbar-scrolled' : ''} ${menuOpen ? 'topbar-menu-open' : ''}`}>
        <a className="brand" href="#top" aria-label="Marci Metzger home" onClick={closeMenu}>
          <span
            className="brand-mark brand-avatar"
            aria-hidden="true"
            style={{
              width: '50px',
              height: '50px',
              minWidth: '50px',
              minHeight: '50px',
              overflow: 'hidden',
              borderRadius: '50%',
              display: 'block',
            }}
          >
            <img
              src="/images/marci-metzger.webp"
              alt=""
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center 18%',
              }}
            />
          </span>
          <span className="brand-copy">
            <strong>Marci Metzger</strong>
            <span>The Ridge Realty Group</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#homes">Buy</a>
          <a href="#sell">Sell</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="tel:+12069196886">
          <span>Let's talk</span>
          <ArrowIcon />
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      <div
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <a href="#homes" onClick={closeMenu}><span>01</span>Buy a Home</a>
          <a href="#sell" onClick={closeMenu}><span>02</span>Sell Your Home</a>
          <a href="#about" onClick={closeMenu}><span>03</span>Meet Marci</a>
          <a href="#services" onClick={closeMenu}><span>04</span>Services</a>
          <a href="#contact" onClick={closeMenu}><span>05</span>Contact</a>
        </nav>
        <a className="mobile-menu-call" href="tel:+12069196886">
          Call Marci <strong>(206) 919-6886</strong>
        </a>
      </div>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-media" role="img" aria-label="Pahrump community with homes, recreation, mountains, and Nevada desert scenery" />
          <div className="hero-overlay" />

          <div className="hero-content hero-intro">
            <p className="eyebrow light">Pahrump, Nevada Real Estate</p>
            <h1>
              Local expertise.
              <span>Results that move you.</span>
            </h1>
            <p className="hero-copy">
              Nearly three decades of real estate experience helping buyers and sellers
              make confident decisions in Pahrump and Southern Nevada.
            </p>

            <div className="hero-actions">
              <a className="button button-light" href="#homes">
                Explore your options <ArrowIcon />
              </a>
              <a className="text-link light-link" href="#sell">
                Selling your home? <span>See Marci's approach</span>
              </a>
            </div>
          </div>

          <div className="hero-note">
            <PinIcon />
            <span>
              Based in
              <strong>Pahrump, Nevada</strong>
            </span>
          </div>
        </section>

        <section className="pathways-section reveal-section" id="homes" data-reveal>
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Pahrump Real Estate</p>
              <h2>Start with what you need next.</h2>
            </div>
            <p>
              Buying, selling, or relocating all begin with different questions.
              Choose the path that fits you and Marci can help you take the next step.
            </p>
          </div>

          <div className="pathways-grid">
            {pathways.map((pathway) => (
              <article className="pathway-card motion-card" key={pathway.number}>
                <div className="pathway-number">{pathway.number}</div>
                <h3>{pathway.title}</h3>
                <p>{pathway.text}</p>
                <a href={pathway.href}>
                  {pathway.cta} <ArrowIcon />
                </a>
              </article>
            ))}
          </div>

          <div className="listing-preview reveal-section" data-reveal>
            <article className="listing-card listing-card-large motion-card">
              <div className="listing-image image-one">
                <span className="listing-tag">Explore Pahrump</span>
              </div>
              <div className="listing-copy">
                <div>
                  <p>Homes, land & acreage</p>
                  <h3>Space, mountain views, and room to make a place your own.</h3>
                </div>
                <a href="#contact" aria-label="Ask Marci about Pahrump homes and acreage">
                  <ArrowIcon />
                </a>
              </div>
            </article>

            <article className="listing-card motion-card">
              <div className="listing-image image-two">
                <span className="listing-tag">Local living</span>
              </div>
              <div className="listing-copy">
                <div>
                  <p>Residential real estate</p>
                  <h3>Find a home that fits the way you want to live.</h3>
                </div>
                <a href="#contact" aria-label="Ask Marci about Pahrump residential real estate">
                  <ArrowIcon />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="seller-section reveal-section" id="sell" data-reveal>
          <div className="seller-visual">
            <div className="seller-image" role="img" aria-label="Pahrump home with backyard pool and mountain views" />
            <div className="experience-card">
              <strong>Nearly 3</strong>
              <span>decades in real estate</span>
            </div>
          </div>

          <div className="seller-content">
            <p className="eyebrow">Selling a Home in Pahrump</p>
            <h2>Don't just list it. Sell with a plan.</h2>
            <p className="lead">
              A successful sale starts before the property goes live. Marci helps you
              think through pricing, preparation, positioning, and how your home should
              be presented to serious buyers.
            </p>

            <div className="seller-points">
              <div><span>01</span><p>Market-aware pricing and positioning</p></div>
              <div><span>02</span><p>Practical preparation before going to market</p></div>
              <div><span>03</span><p>Clear guidance from listing through closing</p></div>
            </div>

            <a className="button button-dark" href="tel:+12069196886">
              Talk about selling <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="proof-strip reveal-section" aria-label="Marci Metzger sales highlights" data-reveal>
          <div><strong>90</strong><span>Nearly 90 clients helped in 2021</span></div>
          <div><strong>$28.5M</strong><span>Closed sales volume in 2021</span></div>
          <div><strong>Local</strong><span>Pahrump-based real estate guidance</span></div>
        </section>

        <section className="about-section reveal-section" id="about" data-reveal>
          <div className="about-copy">
            <p className="eyebrow">Meet Marci Metzger</p>
            <h2>Experience matters. Local context matters too.</h2>
            <p>
              Marci brings nearly three decades of real estate experience together with
              firsthand knowledge of Pahrump and Southern Nevada. Her job is not simply
              to show properties or put a home on the market. It is to help clients
              understand their options and make informed decisions.
            </p>
            <p>
              Whether you're comparing neighborhoods, looking for more land, preparing
              to sell, or figuring out what comes next, Marci keeps the process practical,
              personal, and easy to understand.
            </p>
            <a className="text-link dark-link" href="#contact">
              Work with Marci <ArrowIcon />
            </a>
          </div>

          <div className="about-images">
            <div className="about-image portrait-image" role="img" aria-label="Marci Metzger, Pahrump real estate professional" />
            <div className="about-image detail-image" role="img" aria-label="Pahrump golf-course neighborhood with mountain views" />
          </div>
        </section>

        <section className="services-section reveal-section" id="services" data-reveal>
          <div className="section-heading centered-heading">
            <p className="eyebrow">How Marci Helps</p>
            <h2>Clear guidance for your next move.</h2>
            <p>
              Real estate decisions come with a lot of moving parts. The goal is to make
              those decisions easier to understand, not more complicated.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card motion-card" key={service.number}>
                <div className="service-top">
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="market-section reveal-section" aria-labelledby="market-heading" data-reveal>
          <div className="market-heading">
            <p className="eyebrow">Pahrump Real Estate at a Glance</p>
            <h2 id="market-heading">Useful context before you start looking.</h2>
            <p>
              Pahrump real estate can look very different from one property to the next.
              A little local context helps you know what questions to ask.
            </p>
          </div>

          <div className="market-grid">
            {marketNotes.map((note, index) => (
              <article className="market-note" key={note.title}>
                <span>0{index + 1}</span>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lifestyle-section reveal-section" aria-labelledby="life-in-pahrump" data-reveal>
          <div className="lifestyle-heading">
            <div>
              <p className="eyebrow">Life in Pahrump</p>
              <h2 id="life-in-pahrump">A closer look at the community.</h2>
            </div>
            <p>
              Pahrump combines open Nevada scenery with neighborhoods, recreation,
              mountain views, and homes built around a little more breathing room.
            </p>
          </div>

          <div className="lifestyle-grid">
            <figure className="lifestyle-card lifestyle-card-wide">
              <img src="/images/pahrump-golf-neighborhood.webp" alt="Pahrump neighborhood overlooking a golf course and mountains" loading="lazy" decoding="async" />
              <figcaption>Neighborhood living</figcaption>
            </figure>
            <figure className="lifestyle-card">
              <img src="/images/pahrump-courts.webp" alt="Community recreation courts in Pahrump with mountain views" loading="lazy" decoding="async" />
              <figcaption>Community amenities</figcaption>
            </figure>
            <figure className="lifestyle-card">
              <img src="/images/pahrump-home-interior.webp" alt="Bright Pahrump home interior with large windows" loading="lazy" decoding="async" />
              <figcaption>Desert living, indoors and out</figcaption>
            </figure>
          </div>
        </section>

        <section className="pahrump-section reveal-section" data-reveal>
          <div className="pahrump-content">
            <p className="eyebrow light">Why Pahrump</p>
            <h2>More room to live. More Nevada to love.</h2>
            <p>
              People explore Pahrump for different reasons: more space, mountain views,
              a quieter setting, or simply a change of pace. The right property depends
              on what matters most to you, and local guidance can make those differences
              easier to compare.
            </p>
            <a className="button button-light" href="#contact">
              Explore Pahrump with Marci <ArrowIcon />
            </a>
          </div>
          <div className="pahrump-stat">
            <PinIcon />
            <p>
              Your local resource for
              <strong>Pahrump & Southern Nevada</strong>
            </p>
          </div>
        </section>

        <section className="contact-section reveal-section" id="contact" data-reveal>
          <div className="contact-heading">
            <p className="eyebrow">Let's Make a Move</p>
            <h2>Ready when you are.</h2>
            <p>
              Buying, selling, relocating, or just trying to understand your options?
              Reach out and start with a conversation.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-details">
              <div className="contact-block">
                <span>Call</span>
                <a href="tel:+12069196886">(206) 919-6886</a>
              </div>
              <div className="contact-block">
                <span>Visit</span>
                <p>3190 HW-160, Suite F<br />Pahrump, Nevada 89048</p>
              </div>
              <div className="contact-block">
                <span>Office hours</span>
                <p>Open daily<br />8:00 AM – 7:00 PM</p>
                <small>Appointments outside office hours available upon request.</small>
              </div>
            </div>

            <form
              className="contact-form"
              aria-label="Contact Marci Metzger"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="form-row">
                <label><span>Name</span><input type="text" name="name" autoComplete="name" placeholder="Your name" /></label>
                <label><span>Email</span><input type="email" name="email" autoComplete="email" placeholder="you@email.com" /></label>
              </div>
              <label>
                <span>I'm interested in...</span>
                <select name="interest" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Buying a home</option>
                  <option>Selling a home</option>
                  <option>Relocating to Pahrump</option>
                  <option>Investment property</option>
                  <option>Commercial real estate</option>
                  <option>General question</option>
                </select>
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Tell Marci a little about what you're looking for." />
              </label>
              <button className="button button-dark submit-button" type="submit">
                Send message <ArrowIcon />
              </button>
              <p className="form-note">No pressure. Just tell Marci what you need help with.</p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark brand-mark-image">
            <img
              src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=h:167,cg:true,m/qt=q:95"
              alt=""
            />
          </span>
          <span className="brand-copy"><strong>Marci Metzger</strong><span>The Ridge Realty Group</span></span>
        </a>
        <p>© 2026 Marci Metzger. All rights reserved.</p>
        <div className="footer-links">
          <a href="#homes">Buy</a><a href="#sell">Sell</a><a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
