import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Values from "@/components/home/Values";
import Businesses from "@/components/home/Businesses";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Values />
        <Businesses />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}