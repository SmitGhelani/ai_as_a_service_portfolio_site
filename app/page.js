import dynamic from "next/dynamic";

const Loader       = dynamic(() => import("../components/Loader"),       { ssr: false });
const Cursor       = dynamic(() => import("../components/Cursor"),       { ssr: false });
const BgCanvas     = dynamic(() => import("../components/BgCanvas"),     { ssr: false });
const Navbar       = dynamic(() => import("../components/Navbar"),       { ssr: false });
const Hero         = dynamic(() => import("../components/Hero"),         { ssr: false });
const Ticker       = dynamic(() => import("../components/Ticker"),       { ssr: false });
const Services     = dynamic(() => import("../components/Services"),     { ssr: false });
const About        = dynamic(() => import("../components/About"),        { ssr: false });
const Process      = dynamic(() => import("../components/Sections").then(m => ({ default: m.Process })),        { ssr: false });
const TechStack    = dynamic(() => import("../components/Sections").then(m => ({ default: m.TechStack })),      { ssr: false });
const Testimonials = dynamic(() => import("../components/Sections").then(m => ({ default: m.Testimonials })),   { ssr: false });
const Pricing      = dynamic(() => import("../components/Sections").then(m => ({ default: m.Pricing })),        { ssr: false });
const Contact      = dynamic(() => import("../components/Sections").then(m => ({ default: m.Contact })),        { ssr: false });
const Footer       = dynamic(() => import("../components/Sections").then(m => ({ default: m.Footer })),         { ssr: false });

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
