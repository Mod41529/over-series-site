import Link from "next/link";
import { brands, philosophy, tagline } from "@/app/lib/brands";

export default function Home() {
  return (
    <main>
      <section className="hero-editorial">
        <p className="hero-subline" data-reveal>
          Over Series
        </p>
        <h1 className="hero-title" data-reveal>
          OVER SERIES
        </h1>
        <p className="hero-tagline" data-fade>
          {tagline}
        </p>
        <a className="hero-scroll" href="#brands" aria-label="Scroll to brands">
          Scroll
        </a>
      </section>

      <section className="brand-bento" id="brands">
        {brands.map((brand) => {
          const isOverture = brand.slug === "overture";
          const overPart = isOverture ? "" : "Over";
          const domainPart = isOverture ? brand.name : brand.name.replace("Over", "");
          return (
            <Link
              key={brand.slug}
              href={`/${brand.slug}`}
              className={`bento-card${brand.featured ? " featured" : ""}`}
              style={{ ["--brand-color" as string]: brand.color }}
              data-reveal
            >
              <div className="bento-kicker">
                <span>{brand.domainKo}</span>
                <span>{brand.domain}</span>
              </div>
              <h2>
                {overPart && <span className="card-over">{overPart}</span>}
                <span className="card-domain" style={{ color: brand.color }}>{domainPart}</span>
              </h2>
              <p className="card-sentence">{brand.sentence}</p>
            </Link>
          );
        })}
      </section>

      <section className="philosophy-editorial" data-parallax>
        <p className="eyebrow" data-fade>
          Philosophy
        </p>
        <ul>
          {philosophy.map((line) => (
            <li key={line} data-fade>
              {line}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
