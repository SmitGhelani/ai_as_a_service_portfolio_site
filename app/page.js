import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Services from "../components/Services";
import About from "../components/About";
import { Process, TechStack, Testimonials, Pricing, Contact, Footer } from "../components/Sections";

const Cursor = dynamic(() => import("../components/Cursor"), { ssr: false });
const BgCanvas = dynamic(() => import("../components/BgCanvas"), { ssr: false });
const Loader = dynamic(() => import("../components/Loader"), { ssr: false });

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <BgCanvas />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <About />
        <Process />
        <TechStack />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
