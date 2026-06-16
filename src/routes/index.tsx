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
  head: () => ({
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
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
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
