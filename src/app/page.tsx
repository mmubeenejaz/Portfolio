import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import AITech from "@/components/AITech";
import AboutMe from "@/components/AboutMe";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <FeaturedProject />
        <Process />
        <Experience />
        <AITech />
        <AboutMe />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
