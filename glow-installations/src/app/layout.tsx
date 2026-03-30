import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { SITE_URL } from "@/lib/content";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Glow Installations | Central Coast Christmas Light Installers",
    template: "%s",
  },
  description:
    "Glow LLC installs Christmas lights across California's Central Coast.",
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--night)]">
        <SchemaMarkup />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga-script" strategy="lazyOnload">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-1 pt-20 md:pt-24">{children}</main>
        <Footer />
        <div className="fixed inset-x-4 bottom-4 z-30 flex gap-3 rounded-2xl border border-white/15 bg-[rgba(12,18,30,0.82)] p-3 backdrop-blur-xl md:hidden">
          <Link
            href="tel:+18057202559"
            className="flex-1 rounded-full border border-white/30 px-3 py-2 text-center text-sm font-semibold text-white"
          >
            📞 Call Now
          </Link>
          <Link
            href="/quote"
            className="flex-1 rounded-full bg-[var(--crimson)] px-3 py-2 text-center text-sm font-semibold text-white"
          >
            ✨ Get a Quote
          </Link>
        </div>
      </body>
    </html>
  );
}
