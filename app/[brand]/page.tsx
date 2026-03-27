import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, bySlug, tagline } from "@/app/lib/brands";

export function generateStaticParams() {
  return brands.map((brand) => ({ brand: brand.slug }));
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: slug } = await params;
  const brand = bySlug[slug];
  if (!brand) {
    notFound();
  }

  const currentIndex = brands.findIndex((item) => item.slug === brand.slug);
  const prevBrand = brands[(currentIndex - 1 + brands.length) % brands.length];
  const nextBrand = brands[(currentIndex + 1) % brands.length];

  return (
    <main style={{ ["--brand-color" as string]: brand.color }}>
      <section className="detail-editorial-hero">
        <p className="eyebrow" data-fade>
          OVER SERIES / {brand.domainKo}
        </p>
        <h1 className="detail-title" data-reveal>
          <span className="detail-over">Over</span>
          <span className="detail-domain">{brand.domain}</span>
        </h1>
        <p className="detail-brand-name" data-fade>
          {brand.name}
        </p>
        <p className="detail-copy" data-fade>
          {brand.sentence}
        </p>
        <p className="detail-tagline" data-fade>
          {tagline}
        </p>
      </section>

      <section className="detail-keyvisual-wrap" data-reveal>
        <div className="detail-keyvisual">
          <Image
            src={`/keyvisuals/${brand.slug}.svg`}
            alt={`${brand.name} keyvisual`}
            width={1600}
            height={920}
            className="keyvisual-glow"
            priority
          />
        </div>
      </section>

      <section className="detail-body" data-fade>
        <h2>Concept</h2>
        <p>{brand.concept}</p>
        <h2>Tagline Candidates</h2>
        <ul className="detail-taglist">
          {brand.taglines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <h2>Tone & Manner</h2>
        <p>
          {brand.tone}. The brand should read like an editorial headline first, then unfold as a
          scalable system across landing pages, social formats, and campaign modules.
        </p>
      </section>

      <section className="detail-nav" data-fade>
        <Link href={`/${prevBrand.slug}`}>Prev: {prevBrand.name}</Link>
        <Link href="/">Back to Portfolio</Link>
        <Link href={`/${nextBrand.slug}`}>Next: {nextBrand.name}</Link>
      </section>
    </main>
  );
}

