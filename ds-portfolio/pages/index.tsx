import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "@/components/footer";
import Work from "@/components/work";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", handleScroll);
  //   }
  //   return () => {
  //     if (typeof window !== "undefined") {
  //       window.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);

  // const handleScroll = () => {
  //   const container = document.getElementById("container");
  //   if (container) {
  //     if (window.scrollY > 400) {
  //       container.classList.remove("bg-white");
  //       container.classList.add("bg-black");
  //     } else {
  //       container.classList.remove("bg-black");
  //       container.classList.add("bg-white");
  //     }
  //   }
  // };
  return (
    <main
      id="container"
      className="flex min-h-screen flex-col items-center justify-center p-10 pb-0 m-0 transition duration-500 bg-white"
    >
      <Navbar></Navbar>
      {/* have work page as a scrollable on homepage */}
      {/* Images curved corners */}
      <Hero></Hero>

      <Work></Work>
      {/* <Footer></Footer> */}
    </main>
  );
}
