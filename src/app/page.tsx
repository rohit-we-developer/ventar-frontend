import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/home/Hero";

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}