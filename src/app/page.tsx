import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Values from "@/components/home/Values";
import Businesses from "@/components/home/Businesses";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Values />
      <Businesses />
      <Footer />
    </>
  );
}