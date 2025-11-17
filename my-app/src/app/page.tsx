import Image from "next/image";

import Navbar from "./components/navbar/navbar"; 
import Hero from "./ui/hero/page"; 
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
