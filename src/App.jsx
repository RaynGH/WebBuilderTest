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

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
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

const services = [
  {
    icon: <HomeIcon />,
    number: '01',
    title: 'Real Estate Done Right',
    text: "Whether you're buying, selling, investing, or simply exploring the market, our team keeps the process clear, personal, and focused on your goals.",
  },
  {
    icon: <KeyIcon />,
    number: '02',
    title: 'Homes for Every Chapter',
    text: 'From fixer-uppers and first homes to luxury properties and commercial opportunities, we help you find the right fit at the right price.',
  },
  {
    icon: <ChartIcon />,
    number: '03',
    title: 'Expert Guidance',
    text: 'Questions about affordability, credit, financing, or next steps? We connect you with trusted professionals and keep you informed at every turn.',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Marci Metzger home">
          <span className="brand-mark brand-avatar" aria-hidden="true">
            <img src="/images/marci-metzger.webp" alt="" />
          </span>
          <span className="brand-copy">
            <strong>Marci Metzger</strong>
            <span>The Ridge Realty Group</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#homes">Homes</a>
          <a href="#sell">Sell</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="tel:+12069196886">
          <span>Let's talk</span>
          <ArrowIcon />
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media" role="img" aria-label="Modern desert home with mountain views in Nevada" />
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow light">Pahrump, Nevada Real Estate</p>
            <h1>
              Local expertise.
              <span>Results that move you.</span>
            </h1>
            <p className="hero-copy">
              Nearly three decades of real estate experience helping buyers and sellers
              move with confidence in Pahrump and beyond.
            </p>

            <div className="hero-actions">
              <a className="button button-light" href="#homes">
                Find a home <ArrowIcon />
              </a>
              <a className="text-link light-link" href="#sell">
                Selling your home? <span>Explore our approach</span>
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

        <section className="search-section" id="homes">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Search Pahrump Real Estate</p>
              <h2>Find a place that feels like yours.</h2>
            </div>
            <p>
              Start with the essentials. We’ll help you make sense of the market,
              compare options, and find the property that fits your next chapter.
            </p>
          </div>

          <form className="property-search" onSubmit={(event) => event.preventDefault()}>
            <label className="search-field">
              <span>Location</span>
              <select defaultValue="Pahrump, NV">
                <option>Pahrump, NV</option>
                <option>Las Vegas, NV</option>
                <option>Southern Nevada</option>
              </select>
            </label>
            <label className="search-field">
              <span>Property type</span>
              <select defaultValue="Any property">
                <option>Any property</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </label>
            <label className="search-field">
              <span>Bedrooms</span>
              <select defaultValue="Any">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </label>
            <label className="search-field">
              <span>Price range</span>
              <select defaultValue="Any price">
                <option>Any price</option>
                <option>Under $300k</option>
                <option>$300k – $500k</option>
                <option>$500k – $750k</option>
                <option>$750k+</option>
              </select>
            </label>
            <button className="search-button" type="submit">
              <SearchIcon />
              Search homes
            </button>
          </form>

          <div className="listing-preview">
            <article className="listing-card listing-card-large">
              <div className="listing-image image-one">
                <span className="listing-tag">Explore Pahrump</span>
              </div>
              <div className="listing-copy">
                <div>
                  <p>Desert homes & acreage</p>
                  <h3>Space, mountain views, and room to breathe.</h3>
                </div>
                <a href="#contact" aria-label="Ask Marci about Pahrump homes">
                  <ArrowIcon />
                </a>
              </div>
            </article>

            <article className="listing-card">
              <div className="listing-image image-two">
                <span className="listing-tag">Local living</span>
              </div>
              <div className="listing-copy">
                <div>
                  <p>Residential properties</p>
                  <h3>Homes for every stage of life.</h3>
                </div>
                <a href="#contact" aria-label="Ask Marci about residential properties">
                  <ArrowIcon />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="seller-section" id="sell">
          <div className="seller-visual">
            <div className="seller-image" />
            <div className="experience-card">
              <strong>Nearly 3</strong>
              <span>decades in real estate</span>
            </div>
          </div>

          <div className="seller-content">
            <p className="eyebrow">For Sellers</p>
            <h2>Don’t just list it. Get it sold.</h2>
            <p className="lead">
              Selling a home deserves more than putting a sign in the yard. Marci and
              The Ridge Realty Group work every avenue to put your property in front of
              serious buyers and position it for the strongest possible outcome.
            </p>

            <div className="seller-points">
              <div><span>01</span><p>Market-aware pricing and positioning</p></div>
              <div><span>02</span><p>Focused exposure across the buyer journey</p></div>
              <div><span>03</span><p>Clear guidance from listing through closing</p></div>
            </div>

            <a className="button button-dark" href="tel:+12069196886">
              Talk about selling <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="proof-strip" aria-label="Sales highlights">
          <div><strong>90</strong><span>Nearly 90 clients helped in 2021</span></div>
          <div><strong>$28.5M</strong><span>Closed sales volume in 2021</span></div>
          <div><strong>Local</strong><span>We live, work, and play in this community</span></div>
        </section>

        <section className="about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">Meet Marci</p>
            <h2>A real estate pro who knows the market — and the community.</h2>
            <p>
              Nobody knows the market like someone who is part of it. Marci brings
              nearly three decades of experience, hands-on market knowledge, and a
              practical network of local resources to every client relationship.
            </p>
            <p>
              From market analysis and upgrade recommendations to contractors and
              trusted financing connections, the goal is simple: make sure you feel
              confident and informed at every step.
            </p>
            <a className="text-link dark-link" href="#contact">
              Work with Marci <ArrowIcon />
            </a>
          </div>

          <div className="about-images">
            <div className="about-image portrait-image" role="img" aria-label="Marci Metzger" />
            <div className="about-image detail-image" role="img" aria-label="Nevada desert landscape" />
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading centered-heading">
            <p className="eyebrow">How We Help</p>
            <h2>Real estate, done right.</h2>
            <p>
              Residential, commercial, investment, or simply figuring out what comes next —
              start with experienced guidance.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
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

        <section className="lifestyle-section" aria-labelledby="life-in-pahrump">
          <div className="lifestyle-heading">
            <div>
              <p className="eyebrow">Life in Pahrump</p>
              <h2 id="life-in-pahrump">A closer look at the community.</h2>
            </div>
            <p>
              Golf-course neighborhoods, recreation, mountain views, and homes built around
              a little more breathing room — explore the setting Marci knows firsthand.
            </p>
          </div>

          <div className="lifestyle-grid">
            <figure className="lifestyle-card lifestyle-card-wide">
              <img src="/images/pahrump-golf-neighborhood.webp" alt="Pahrump neighborhood overlooking a golf course and mountains" />
              <figcaption>Neighborhood living</figcaption>
            </figure>
            <figure className="lifestyle-card">
              <img src="/images/pahrump-courts.webp" alt="Community recreation courts in Pahrump with mountain views" />
              <figcaption>Community amenities</figcaption>
            </figure>
            <figure className="lifestyle-card">
              <img src="/images/pahrump-home-interior.webp" alt="Bright Pahrump home interior with large windows" />
              <figcaption>Desert living, indoors and out</figcaption>
            </figure>
          </div>
        </section>

        <section className="pahrump-section">
          <div className="pahrump-content">
            <p className="eyebrow light">Why Pahrump</p>
            <h2>More room to live. More Nevada to love.</h2>
            <p>
              Open desert landscapes, mountain backdrops, generous lot sizes, and a
              close-knit community make Pahrump a distinctive place to call home.
              Whether you're relocating, investing, or already local, having someone
              who understands the area makes all the difference.
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

        <section className="contact-section" id="contact">
          <div className="contact-heading">
            <p className="eyebrow">Let's Make a Move</p>
            <h2>Ready when you are.</h2>
            <p>Buying, selling, or just have a question? Reach out and start the conversation.</p>
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

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="form-row">
                <label><span>Name</span><input type="text" placeholder="Your name" /></label>
                <label><span>Email</span><input type="email" placeholder="you@email.com" /></label>
              </div>
              <label>
                <span>I'm interested in...</span>
                <select defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Buying a home</option>
                  <option>Selling a home</option>
                  <option>Investment property</option>
                  <option>Commercial real estate</option>
                  <option>General question</option>
                </select>
              </label>
              <label>
                <span>Message</span>
                <textarea rows="5" placeholder="Tell Marci a little about what you're looking for." />
              </label>
              <button className="button button-dark submit-button" type="submit">
                Send message <ArrowIcon />
              </button>
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
          <a href="#homes">Homes</a><a href="#sell">Sell</a><a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
