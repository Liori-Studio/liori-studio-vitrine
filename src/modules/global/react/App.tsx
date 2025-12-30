import { Header } from "@root/modules/vitrine/react/components/Header";
import { HeroSection } from "@root/modules/vitrine/react/components/HeroSection";
import { WorkSection } from "@root/modules/vitrine/react/components/WorkSection";
import { AboutSection } from "@root/modules/vitrine/react/components/AboutSection";
import { ContactSection } from "@root/modules/vitrine/react/components/ContactSection";
import { Footer } from "@root/modules/vitrine/react/components/Footer";

function App() {
  return (
    <div data-testid="app" className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
