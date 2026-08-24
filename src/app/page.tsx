import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import NisabProduct from "@/components/NisabProduct";
import HowIBuild from "@/components/HowIBuild";
import ActiveBuilds from "@/components/ActiveBuilds";
import OpenTheHood from "@/components/OpenTheHood";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import DevEasterEgg from "@/components/DevEasterEgg";

export default function Home() {
  return (
    <>
      <DevEasterEgg />
      <Nav />
      <main>
        <Hero />
        <NisabProduct />
        <HowIBuild />
        <ActiveBuilds />
        <OpenTheHood />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
