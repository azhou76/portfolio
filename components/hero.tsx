import Image from "next/image";
import { useEffect } from "react";
import { animateTextLoading } from "./slide";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    const textContainer = document.getElementById("textContainer");

    if (textContainer) {
      const words = textContainer.innerText.split(";");
      textContainer.innerText = "";

      words.forEach((word, index) => {
        setTimeout(() => {
          if (textContainer) {
            textContainer.innerText += word;
            textContainer.innerText += " ";
            // if ((index + 1) % 2 === 0) {
            //   setTimeout(() => {
            //     // textContainer.innerText = "";
            //   }, 300); // Adjust the delay (in milliseconds) to clear the text after displaying every other word
            // }
            if (index === words.length - 1) {
              textContainer.classList.remove("hidden");
            }
          }
        }, 800 + index * 300); // Adjust the delay (in milliseconds) between words
      });
    }
  }, []);

  useEffect(() => {
    animateTextLoading();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-10 h-screen md:pt-0 pt-64">
      <div className="flex md:flex-row flex-col-reverse items-center md:space-x-20 space-x-10">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg md:mt-0 mt-16"
          src="/Solo1.png"
          alt="Next.js Logo"
          width={300}
          height={500}
          priority
        />
        <div className="space-y-10">
          <h2
            id="topSlideContainer"
            className="font-medium text-left text-5xl max-w-xl font-heading"
          >
            Hi, I&apos;m Alex :)
          </h2>
          <p className="bold text-left text-xl max-w-xl font-sans">
            I&apos;m a{" "}
            <span
              id="textContainer"
              className="hidden text-blue-700 transition-colors duration-1000 font-sans"
            >
              Software; Engineer;, Data; Scientist;, and; Business; Manager
            </span>
          </p>{" "}
          <p
            id="botSlideContainer"
            className="bold text-left text-xl max-w-xl font-sans"
          >
            I&apos;m a junior at Brown University studying CS, Applied Math, +
            Econ who loves football and performing in classical orchestras as a
            timpanist.
          </p>
          <div className="flex justify-left md:space-x-7 space-x-3">
            <Link
              href="https://www.linkedin.com/in/alexander-zhou-8b7b98229/"
              className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/3"
            >
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg"
                src="/linkedin.png"
                alt="Next.js Logo"
                width={40}
                height={40}
                priority
              />
            </Link>

            <Link
              href="https://github.com/azhou76"
              className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/3"
            >
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg"
                src="/github.png"
                alt="Next.js Logo"
                width={40}
                height={40}
                priority
              />
            </Link>

            <Link
              href="mailto:alexander_zhou@brown.edu"
              className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/3"
            >
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg"
                src="/gmail.png"
                alt="Next.js Logo"
                width={40}
                height={40}
                priority
              />
            </Link>
          </div>
        </div>
      </div>

      <Link href="#work">
        <button
          type="button"
          className="animate-bounce md:mb-0 mb-64 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1L7 9L13 1"
            />
          </svg>
          <span className="sr-only">Arrow down to work</span>
        </button>
      </Link>
    </div>
  );
}
