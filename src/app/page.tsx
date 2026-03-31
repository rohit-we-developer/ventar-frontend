import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/home/Hero";
import Services from "@/sections/home/Services"; // 🔥 ADD THIS
import Story from "@/sections/home/Story";
import Careers from "@/sections/home/Careers";
import FAQ from "@/sections/home/FAQ";
import Footer from "@/sections/home/Footer";
import About from "@/sections/home/About";
import Stats from "@/sections/home/Stats";
import Process from "@/sections/home/Process";
import Testimonials from "@/sections/home/Testimonials";
export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />
      <Hero />
      <Stats /> 
      <About />  
      <Services />
      <Process /> {/* 🔥 ADD THIS */}
      <Story /> 
      <Testimonials />
      <Footer />
    </main>
  );
}