import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { MotionProvider } from "@/app/components/motion-provider";

const geist = localFont({
  src: [
    { path: "./fonts/Geist-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Geist-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Geist-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "OVER SERIES",
  description: "Beyond default, in every direction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={geist.variable}>
      <body>
        <MotionProvider />
        <div className="ambient-bg" aria-hidden />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
