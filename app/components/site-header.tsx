import Link from "next/link";
import { brands } from "@/app/lib/brands";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="logo-lockup">
        <span className="logo-series">OVER SERIES</span>
      </Link>
      <nav className="top-nav" aria-label="Primary">
        {brands.map((brand) => (
          <Link key={brand.slug} href={`/${brand.slug}`}>
            {brand.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
