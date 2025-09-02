import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SystemsCatalog from "@/components/SystemsCatalog";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <SystemsCatalog />
        <Technologies />
        <Portfolio />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
