import AboutSection from "@/components/AboutSection";
import BackToTop from "@/components/BackToTop";
import CaseStudyCards from "@/components/CaseStudyCards";
import ClientLogos from "@/components/ClientLogos";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MindTabs from "@/components/MindTabs";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Header animateLogo />
      <main className="px-gutter pt-6 pb-24">
        {/* Hero plays its own bespoke load-in sequence (logo -> line ->
            headline/subhead/buttons) and is visible on first paint, so it
            isn't wrapped in the generic scroll Reveal below. */}
        <Hero />
        <Reveal>
          <ClientLogos />
        </Reveal>
        <Reveal>
          <MindTabs />
        </Reveal>
        <Reveal>
          <CaseStudyCards />
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
