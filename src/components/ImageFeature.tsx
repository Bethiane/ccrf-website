import Image from "next/image";
import Link from "next/link";

type ImageFeatureProps = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  href?: string;
  cta?: string;
  reverse?: boolean;
};

export function ImageFeature({ eyebrow, title, body, image, href, cta, reverse }: ImageFeatureProps) {
  return (
    <section className={`image-feature ${reverse ? "reverse" : ""}`}>
      <div className="feature-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        {!href && <Link className="text-link" href="/initiatives#scholarship-drive-2025-2026">Meet the initiative <span aria-hidden="true">↗</span></Link>}
        {href && cta ? (
          <Link className="button dark" href={href}>
            {cta}
          </Link>
        ) : null}
      </div>
      <div className="feature-image">
        <Image src={image} alt="" fill quality={92} sizes="(max-width: 980px) 100vw, 56vw" />
      </div>
    </section>
  );
}
