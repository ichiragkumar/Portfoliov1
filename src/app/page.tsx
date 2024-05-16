import Image from "next/image";
import HeroSection from '../components/HeroSection';
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import Contact from "@/components/Contact";
export default function Home() {
  return (
  
      <main>
        <HeroSection/>
        <Content/>
        <Feature/>
        <Contact/>
      </main>
  );
}
