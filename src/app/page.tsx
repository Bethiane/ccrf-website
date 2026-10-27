import Image from "next/image";
import Link from "next/link";
import { ImageFeature } from "@/components/ImageFeature";
import { InitiativeCard } from "@/components/InitiativeCard";
import { gallery, initiatives, stats } from "@/lib/content";

export default function Home() {
  const featured = initiatives.slice(0, 3);

  return (
    <>
      <section className="homepage-hero" aria-labelledby="hero-title">
          <div className="hero-backdrop">
            <Image
              src="/images/ccrf-30-enhanced.jpeg"
              alt="Children celebrating together during a CCRF community visit"
              fill
              priority
              quality={95}
              sizes="(max-width: 640px) 160vw, 100vw"
            />
          </div>
        <div className="hero-bottom">
        <div className="hero-story">
          <p className="hero-badge">Small acts. Lasting change.</p>
          <h1 id="hero-title">A little care.<br />A brighter tomorrow.</h1>
          <p>
            A school day. A healthier family. A reason to smile.<br className="desktop-break" /> Together, we turn small acts of kindness into lasting change.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/initiatives">
              Discover our work <span className="hero-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <aside className="hero-mission" aria-label="Our mission">
          <p className="hero-mission-label"><span aria-hidden="true">●</span> Our mission</p>
          <p>To bring comfort, opportunity, and lasting hope to families in Rwanda through education, healthcare, and community care.</p>
          <Link href="/#contact">Get to know CCRF <span aria-hidden="true">↗</span></Link>
        </aside>
        </div>
      </section>

      <section className="stats-band" aria-label="Impact numbers">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <ImageFeature
        eyebrow="Past initiative · Education"
        title="The 2025–2026 scholarship drive."
        body="This scholarship drive focused on helping twelve determined students continue learning with fees, supplies, backpacks, and steady community encouragement."
        image="/images/ccrf-27.jpeg"
      />

      <section className="section-head split">
        <div>
        <p className="eyebrow">What we do</p>
        <h2>Practical support that families can feel.</h2>
        </div>
        <p className="section-note">Real people. Everyday needs.<br />A community showing up for each other.</p>
      </section>

      <section className="pillar-grid">
        {[
          ["Education", "Scholarships, school materials, backpacks, and encouragement for learners."],
          ["Health", "Community campaigns that help families access medical insurance."],
          ["Livelihoods", "Sustainable support like livestock that can create income and stability."],
          ["Healing", "Unity, remembrance, and service rooted in dignity and local partnership."]
        ].map(([title, body], index) => (
          <article key={title} className="pillar">
            <span className="pillar-number">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <ImageFeature
        eyebrow="Past initiative · 2026"
        title="One goat can change everything."
        body="This livelihood initiative focused on helping vulnerable families build income, nutrition, and long-term stability through practical livestock support."
        image="/images/ccrf-29-enhanced.jpeg"
        href="/initiatives#one-goat-can-change-everything"
        cta="Explore the initiative"
        reverse
      />

      <section className="section-head split">
        <div>
          <p className="eyebrow">Featured initiatives</p>
          <h2>Our past initiatives. Our shared purpose.</h2>
        </div>
        <Link className="button dark" href="/initiatives">
          View all
        </Link>
      </section>

      <section className="initiative-grid">
        {featured.map((initiative) => (
          <InitiativeCard key={initiative.slug} initiative={initiative} />
        ))}
      </section>

      <section className="section-head split gallery-heading"><div><p className="eyebrow">Our community, in focus</p><h2>The faces behind the change.</h2></div><Link className="text-link" href="/gallery">Visit the gallery ↗</Link></section>
      <section className="gallery-strip" aria-label="Gallery preview">
        {gallery.slice(0, 6).map((item) => (
          <Link href="/gallery" key={item.src} className="strip-image">
            <Image src={item.src} alt={item.alt} fill quality={92} sizes="(max-width: 420px) 100vw, (max-width: 980px) 50vw, 17vw" />
            <span>{item.tag}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
