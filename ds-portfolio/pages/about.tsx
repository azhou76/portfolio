import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "@/components/footer";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 m-0 bg-white">
      <Navbar></Navbar>
      <div className="flex flex-row items-center space-x-40">
        <div className="space-y-10">
          <h1 className="font-semibold text-left text-3xl max-w-xl font-serif">
            About Me
          </h1>
          <h2 className="bold text-left text-xl max-w-xl">
            Hi, I'm Alex, and I'm a Software Engineer, Data Scientist, and
            Business Manager. I'm a junior at Brown University studying CS,
            Applied Math, + Econ who loves football and performing in classical
            orchestras as a timpanist.
          </h2>
        </div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="flex flex-row items-center space-x-40 space-y-10 mb-16 mt-8">
        <h2 className="bold text-left text-xl max-w-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          expedita officia temporibus numquam. Excepturi soluta voluptas dolore
          mollitia, vitae molestias. Quod voluptatibus cupiditate placeat ab
          quasi sint debitis quibusdam sequi.
        </h2>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      {/* <Footer></Footer> */}
    </main>
  );
}
