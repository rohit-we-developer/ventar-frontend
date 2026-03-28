import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/home/Hero";
import Services from "@/sections/home/Services"; // 🔥 ADD THIS
import Story from "@/sections/home/Story";
export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />
      <Hero />
      <Services /> {/* 🔥 ADD THIS */}
      <Story /> 
    </main>
  );
}