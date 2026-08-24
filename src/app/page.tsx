import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import Process from "@/components/Process";
import AIEngineering from "@/components/AIEngineering";
import Principles from "@/components/Principles";
import Experience from "@/components/Experience";
import EarlierExperience from "@/components/EarlierExperience";
import Skills from "@/components/Skills";
import Technology from "@/components/Technology";
import Credentials from "@/components/Credentials";
import AboutMe from "@/components/AboutMe";
import WhatIBring from "@/components/WhatIBring";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <FeaturedProject />
        <Process />
        <AIEngineering />
        <Principles />
        <Experience />
        <EarlierExperience />
        <Skills />
        <Technology />
        <Credentials />
        <AboutMe />
        <WhatIBring />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
