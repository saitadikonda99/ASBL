import Image from "next/image";

import Navbar from "./components/navbar/navbar"; 
import Hero from "./ui/hero/hero"; 
import Projects from "./ui/projects/projects";
import FAQs from "./ui/FAQs/faqs";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
        <Navbar />
        <Hero />
        <Projects />
        <FAQs />
        <Footer />
      </div>
    </div>
  );
}
