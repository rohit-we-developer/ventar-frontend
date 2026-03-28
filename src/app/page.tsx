import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/home/Hero";
import Services from "@/sections/home/Services"; // 🔥 ADD THIS
import Story from "@/sections/home/Story";
import Careers from "@/sections/home/Careers";
import FAQ from "@/sections/home/FAQ";
import Footer from "@/sections/home/Footer";
export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />
      <Hero />
      <Services /> {/* 🔥 ADD THIS */}
      <Story /> 
      <Careers /> 
      <FAQ />
      <Footer />
    </main>
  );
}