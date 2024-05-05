import Image from "next/image";
import { useEffect } from "react";
import { animateTextLoading } from "./slide";

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
    <div className="flex flex-row items-center space-x-20">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg"
        src="/Solo1.png"
        alt="Next.js Logo"
        width={300}
        height={500}
        priority
      />
      <div className="space-y-10">
        <h2
          id="topSlideContainer"
          className="bold text-left text-5xl max-w-xl font-serif"
        >
          Hi, I'm Alex :)
        </h2>
        <p className="bold text-left text-xl max-w-xl font-sans">
          I'm a{" "}
          <span
            id="textContainer"
            className="hidden text-red-500 transition-colors duration-1000 font-sans"
          >
            Software; Engineer;, Data; Scientist;, and; Business; Manager
          </span>
        </p>{" "}
        <p
          id="botSlideContainer"
          className="bold text-left text-xl max-w-xl font-sans"
        >
          I'm a junior at Brown University studying CS, Applied Math, + Econ who
          loves football and performing in classical orchestras as a timpanist.
        </p>
      </div>
    </div>
  );
}
