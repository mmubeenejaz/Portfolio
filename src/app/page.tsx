import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import NisabProduct from "@/components/NisabProduct";
import HowIBuild from "@/components/HowIBuild";
import ActiveBuilds from "@/components/ActiveBuilds";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppFab from "@/components/WhatsAppFab";
import DevEasterEgg from "@/components/DevEasterEgg";

export default function Home() {
  return (
    <>
      <DevEasterEgg />
      <Nav />
      <main>
        <Hero />
        <About />
        <NisabProduct />
        <HowIBuild />
        <ActiveBuilds />
        <FinalCTA />
      </main>
      <WhatsAppFab />
    </>
  );
}
