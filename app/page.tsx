import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <Contact />
      <Footer />
    </div>
  );
}
