import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import NisabCase from "@/components/NisabCase";
import WhatIBuild from "@/components/WhatIBuild";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Contact from "@/components/Contact";
import DevEasterEgg from "@/components/DevEasterEgg";

export default function Home() {
  return (
    <>
      <DevEasterEgg />
      <Sidebar />
      <main className="pl-24 lg:pl-[176px]">
        <Hero />
        <Approach />
        <NisabCase />
        <CurrentlyBuilding />
        <WhatIBuild />
        <Contact />
      </main>
    </>
  );
}
