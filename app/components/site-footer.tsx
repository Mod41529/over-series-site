import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>OVER SERIES</p>
      <p>Beyond default, in every direction.</p>
      <p>
        Crafted by <Link href="/about">luma</Link>
      </p>
    </footer>
  );
}
