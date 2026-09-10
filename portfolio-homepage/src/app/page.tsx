import AboutSection from "@/components/AboutSection";
import BackToTop from "@/components/BackToTop";
import CaseStudyCards from "@/components/CaseStudyCards";
import ClientLogos from "@/components/ClientLogos";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MindTabs from "@/components/MindTabs";

export default function HomePage() {
  return (
    <>
      <Header animateLogo />
      <main className="px-gutter pt-6 pb-24">
        <Hero />
        <ClientLogos />
        <MindTabs />
        <CaseStudyCards />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
