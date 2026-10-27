import Link from "next/link";
import { donation } from "@/lib/content";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <section className="footer-about" aria-label="About Comfort Corner Rwanda Foundation">
          <p className="eyebrow">Comfort Corner Rwanda Foundation</p>
          <h2>We love to see you smile.</h2>
          <p>
            CCRF supports learners, families, volunteers, healthcare access, and community healing in Rwanda
            through practical campaigns rooted in dignity, kindness, and local partnership.
          </p>
        </section>

        <nav className="footer-links" aria-label="Footer navigation">
          <h3>Links</h3>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <section className="footer-contacts" aria-label="Contact details">
          <h3>Contacts</h3>
          <a href="mailto:info@comfortcornerrwanda.org">info@comfortcornerrwanda.org</a>
          <a href={`tel:${donation.momo}`}>{donation.momo}</a>
          <p>Rwamagana District, Rwanda</p>
        </section>
      </div>

      <div className="footer-support">
        <form className="contact-form" action="mailto:info@comfortcornerrwanda.org" method="post" encType="text/plain">
          <h3>Send a message</h3>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} required />
          </label>
          <button className="button" type="submit">
            Send message
          </button>
        </form>

        <div className="donation-card" id="donate" aria-label="Donation details">
          <h3>A little kindness.<br />A lasting difference.</h3>
          <span>MTN MOMO</span>
          <strong>{donation.momo}</strong>
          <small>{donation.momoName}</small>
          <span>Equity Account</span>
          <strong>{donation.equity}</strong>
          <small>{donation.equityName}</small>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© 2026 Comfort Corner Rwanda Foundation.</small>
        <small>Built for community, service, and visible change.</small>
      </div>
    </footer>
  );
}
