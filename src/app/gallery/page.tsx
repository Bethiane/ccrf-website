import Image from "next/image";
import { gallery } from "@/lib/content";

export const metadata = {
  title: "Gallery | Comfort Corner Rwanda Foundation"
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">Gallery</p>
        <h1>Faces, field moments, and stories of service.</h1>
        <p>
          A visual archive from scholarship visits, volunteer days, healthcare campaigns, remembrance gatherings,
          and community updates.
        </p>
      </section>
      <section className="masonry">
        {gallery.map((item, index) => (
          <figure className={index % 5 === 0 ? "wide" : ""} key={item.src}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              quality={92}
              sizes={index % 5 === 0
                ? "(max-width: 980px) 100vw, 67vw"
                : "(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"}
            />
            <figcaption>{item.tag}</figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
