import Image from "next/image";
import { initiatives } from "@/lib/content";

export const metadata = {
  title: "Initiatives | Comfort Corner Rwanda Foundation"
};

export default function InitiativesPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Initiatives</p>
        <h1>Every campaign has a beneficiary, a reason, and a next step.</h1>
        <p>
          Look back at CCRF&apos;s past initiatives in scholarships, healthcare, education, remembrance,
          and livelihoods.
        </p>
      </section>
      <section className="initiative-detail-list">
        {initiatives.map((initiative) => (
          <article className="initiative-detail" id={initiative.slug} key={initiative.slug}>
            <div className="detail-gallery">
              {initiative.images.slice(0, 3).map((image) => (
                <div key={image}>
                  <Image src={image} alt="" fill quality={92} sizes="(max-width: 640px) 100vw, (max-width: 980px) 60vw, 40vw" />
                </div>
              ))}
            </div>
            <div className="detail-copy">
              <span className={`status ${initiative.status.toLowerCase()}`}>{initiative.status}</span>
              <p className="eyebrow">{initiative.year} / {initiative.kicker}</p>
              <h2>{initiative.title}</h2>
              <p>{initiative.summary}</p>
              <h3>Beneficiaries</h3>
              <p>{initiative.beneficiaries}</p>
              <h3>Impact highlights</h3>
              <ul>
                {initiative.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
