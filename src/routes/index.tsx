import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { LearningEnvironment } from "@/components/site/LearningEnvironment";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Admissions } from "@/components/site/Admissions";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { AdmissionsBanner } from "@/components/site/AdmissionsBanner";

export const Route = createFileRoute("/")({
  head: () => {
    const siteUrl = import.meta.env.VITE_SITE_URL || "https://littlescholarsips.com";
    return {
      meta: [
        { title: "Little Scholars International Preschool | Inspiring Future Leaders" },
        {
          name: "description",
          content:
            "Premium international preschool in Srikakulam — Day Care, Play Group, Nursery, Junior & Senior KG. Admissions Open 2026-27. Safe, digital, activity-based learning.",
        },
        { property: "og:title", content: "Little Scholars International Preschool" },
        {
          property: "og:description",
          content: "Inspiring Future Leaders — Admissions Open 2026-27 in Srikakulam.",
        },
      ],
      links: [{ rel: "canonical", href: `${siteUrl}/` }],
    };
  },
  component: Index,
});

function Index() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://www.littlescholarseducation.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    name: "Little Scholars International Preschool",
    image: `${siteUrl}/logo-title.png`,
    "@id": `${siteUrl}/#preschool`,
    url: siteUrl,
    telephone: "+919492848489",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No: 14, Kalki Nagar, Near Kerala Building, Thotapalem Road",
      addressLocality: "Srikakulam",
      addressRegion: "Andhra Pradesh",
      postalCode: "532005",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.3019",
      longitude: "83.8967",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "15:30",
    },
    sameAs: ["https://www.instagram.com/littlescholars2ips"],
  };

  return (
    <main className="relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <LearningEnvironment />
      <AdmissionsBanner />
      <Gallery />
      <Testimonials />
      <Admissions />
      <Contact />
      <Footer />
      <WhatsAppFab />
      <ScrollToTop />
    </main>
  );
}
