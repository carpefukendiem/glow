import { BUSINESS, HOME_FAQS, SERVICE_AREAS, SITE_URL } from "@/lib/content";

type SchemaMarkupProps = {
  pageType?: "local" | "service" | "faq" | "blog" | "jobs" | "contact";
  title?: string;
  description?: string;
  path?: string;
};

export function SchemaMarkup({
  pageType = "local",
  title,
  description,
  path = "/",
}: SchemaMarkupProps) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    alternateName: BUSINESS.legalName,
    description:
      "Professional Christmas and holiday light installation for residential and commercial properties on California's Central Coast.",
    url: SITE_URL,
    telephone: "+18057202559",
    email: "alex@glowinstallations.com",
    logo: `${SITE_URL}/images/Glow_Installations_Logo.png`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Check, Venmo, PayPal",
    address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
    areaServed: SERVICE_AREAS,
    sameAs: [
      "https://www.facebook.com/glowinstallations",
      "https://instagram.com/glowinstallations",
      "https://maps.app.goo.gl/bFbApWdZwGWSJHvC6",
    ],
  };

  const extraSchema =
    pageType === "faq"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : pageType === "service"
        ? {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: title,
            provider: { "@id": `${SITE_URL}/#business` },
            areaServed: SERVICE_AREAS,
            description,
          }
        : pageType === "blog"
          ? {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: title,
              description,
              mainEntityOfPage: `${SITE_URL}${path}`,
              author: { "@type": "Person", name: "Alex Nava" },
            }
          : pageType === "jobs"
            ? {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                title,
                description,
                hiringOrganization: {
                  "@type": "Organization",
                  name: BUSINESS.name,
                },
                jobLocationType: "ON_SITE",
              }
            : pageType === "contact"
              ? {
                  "@context": "https://schema.org",
                  "@type": "ContactPage",
                  name: title || "Contact Glow Installations",
                }
              : null;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: title || "Page",
        item: `${SITE_URL}${path}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {extraSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(extraSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
