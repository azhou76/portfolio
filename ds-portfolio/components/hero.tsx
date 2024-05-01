import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center space-y-10 ">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <p className="bold text-center text-xl max-w-xl">
        Hi, I'm Alex, and I'm a{" "}
        <span className="text-transparent transition-colors duration-500 ease-in-out delay-300">
          Software Engineer
        </span>
        ,{" "}
        <span className="text-transparent transition-colors duration-500 ease-in-out delay-300">
          Data Scientist
        </span>
        , and{" "}
        <span className="text-black transition-colors duration-500 ease-in-out delay-300 ">
          Business Manager
        </span>
        . I'm a junior at Brown University studying CS, Applied Math, + Econ who
        loves football and performing in classical orchestras as a timpanist.
      </p>
    </div>
  );
}
