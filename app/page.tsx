import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyNutbar from "@/components/WhyNutbar";
import Ingredients from "@/components/Ingredients";
import ProductShowcase from "@/components/ProductShowcase";
import Performance from "@/components/Performance";
import Taste from "@/components/Taste";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="grain-overlay">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <WhyNutbar />
      <Ingredients />
      <ProductShowcase />
      <Performance />
      <Taste />
      <Testimonials />
      <InstagramGallery />
      <Contact />
      <Footer />
    </main>
  );
}
