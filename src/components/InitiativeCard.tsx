import Image from "next/image";
import Link from "next/link";
import type { Initiative } from "@/lib/content";

export function InitiativeCard({ initiative }: { initiative: Initiative }) {
  return (
    <article className="initiative-card">
      <div className="card-image">
        <Image src={initiative.images[0]} alt="" fill quality={92} sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw" />
      </div>
      <div className="card-body">
        <span className={`status ${initiative.status.toLowerCase()}`}>{initiative.status}</span>
        <p className="eyebrow">{initiative.year}</p>
        <h3>{initiative.title}</h3>
        <p>{initiative.summary}</p>
        <Link href={`/initiatives#${initiative.slug}`}>Read details</Link>
      </div>
    </article>
  );
}
