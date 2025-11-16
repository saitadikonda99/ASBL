import Image from "next/image";

import Navbar from "./components/navbar/navbar"; 
import Hero from "./ui/hero/page"; 

export default function Home() {
  return (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
