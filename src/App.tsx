import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestmonialsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ConnectionsSection from "@/components/ConnectionsSection";

import Footer from "@/components/Footer";
import CTASection from "./components/CTASection";

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollY', String(window.scrollY));
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';

    if (isReload) {
      const savedScrollY = sessionStorage.getItem('scrollY');
      if (savedScrollY !== null) {
        setTimeout(() => {
          window.scrollTo(0, parseFloat(savedScrollY));
        }, 100);
      }
    }

    return () => {
      lenis.destroy();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  //useGSAP();

  return (
    <div className="tw-min-h-screen tw-bg-white">
      <Header />

      <main className="tw-relative">
        <HeroSection />

        <section className="tw-mt-12 tw-mb-12 sm:tw-mt-16 sm:tw-mb-16 md:tw-mt-24 md:tw-mb-24">
          <TestimonialsSection />
        </section>

        <section className="tw-mt-12 tw-mb-12 sm:tw-mt-16 sm:tw-mb-16 md:tw-mt-24 md:tw-mb-24">
          <FeaturesSection />
        </section>

        <section className="tw-mt-12 tw-mb-12 sm:tw-mt-16 sm:tw-mb-16 md:tw-mt-24 md:tw-mb-24">
          <ConnectionsSection />
        </section>

        <section className="tw-mt-12 tw-mb-12 sm:tw-mt-16 sm:tw-mb-16 md:tw-mt-24 md:tw-mb-24">
          <CTASection />
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default App;
