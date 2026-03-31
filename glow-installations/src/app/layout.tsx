import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ErrorReporter } from "@/components/system/ErrorReporter";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { SITE_URL } from "@/lib/content";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Glow Installations | Central Coast Christmas Light Installers",
    template: "%s",
  },
  description:
    "Glow LLC installs Christmas lights across California's Central Coast.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
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
      <body className="min-h-full flex flex-col bg-[var(--night)]">
        <NextTopLoader
          color="#E2CAA2"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #E2CAA2, 0 0 5px #E2CAA2"
        />
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
        <ErrorReporter />
        <main className="flex-1">{children}</main>
        <Footer />
        <div className="fixed inset-x-4 bottom-4 z-30 flex gap-3 rounded-2xl border border-white/15 bg-[rgba(52,67,54,0.88)] p-3 backdrop-blur-xl md:hidden">
          <Link
            href="tel:+18057202559"
            className="flex-1 rounded-full border border-white px-3 py-2 text-center text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.98]"
          >
            📞 Call Now
          </Link>
          <Link
            href="/quote"
            className="flex-1 rounded-full bg-[var(--gold)] px-3 py-2 text-center text-sm font-bold text-[var(--crimson)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            ✨ Get A Free Quote
          </Link>
        </div>
      </body>
    </html>
  );
}
