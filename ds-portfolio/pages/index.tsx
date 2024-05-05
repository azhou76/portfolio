import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 m-0">
      <Navbar></Navbar>
      {/* have work page as a scrollable on homepage */}
      {/* Images curved corners */}
      <Hero></Hero>
      <Footer></Footer>
    </main>
  );
}
