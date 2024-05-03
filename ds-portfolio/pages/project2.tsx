import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Project2() {
  return (
    <main className="flex min-h-screen flex-col space-y-40 m-0">
      <div className="flex min-h-screen flex-col flex-wrap items-center space-y-20 p-20 mb-[10%]">
        <Navbar></Navbar>
        <div className="flex flex-col space-y-10 space-x-10 sm:space-x-7 mb-[20%] max-w-[70%]">
          <h1 className="font-semibold text-left text-5xl max-w-xl font-serif">
            Warp Community
          </h1>
          <div className="flex flex-row space-x-2">
            <p className="group border border-black px-5 py-4 bg-purple-200">
              UI/UX
            </p>
            <p className="group border border-black px-5 py-4 bg-purple-200">
              Case Study
            </p>
            <p className="group border border-black px-5 py-4 bg-purple-200">
              April 2024 (3 weeks)
            </p>
          </div>
          <h2 className="font-semibold text-3xl font-serif">Role + Team</h2>
          <p className="font-sans text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            pariatur ullam impedit. Consequatur ducimus distinctio recusandae
            iure, ab mollitia praesentium debitis quo et quos repellendus! At ab
            animi quam nihil.
          </p>
          <h2 className="font-semibold text-3xl font-serif">Context</h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={360}
            height={74}
            priority
          />
          <p className="font-sans text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            pariatur ullam impedit. Consequatur ducimus distinctio recusandae
            iure, ab mollitia praesentium debitis quo et quos repellendus! At ab
            animi quam nihil.
          </p>
          <h2 className="font-semibold text-3xl font-serif">Problem</h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={360}
            height={74}
            priority
          />
          <p className="font-sans text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            pariatur ullam impedit. Consequatur ducimus distinctio recusandae
            iure, ab mollitia praesentium debitis quo et quos repellendus! At ab
            animi quam nihil.
          </p>
          <h2 className="font-semibold text-3xl font-serif">Solution</h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={360}
            height={74}
            priority
          />
          <p className="font-sans text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            pariatur ullam impedit. Consequatur ducimus distinctio recusandae
            iure, ab mollitia praesentium debitis quo et quos repellendus! At ab
            animi quam nihil.
          </p>
          <h2 className="font-semibold text-3xl font-serif">Research</h2>
          <p className="font-sans text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            pariatur ullam impedit. Consequatur ducimus distinctio recusandae
            iure, ab mollitia praesentium debitis quo et quos repellendus! At ab
            animi quam nihil.
          </p>
          <h2 className="font-semibold text-3xl font-serif">Learnings</h2>
          <p className="font-sans text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            pariatur ullam impedit. Consequatur ducimus distinctio recusandae
            iure, ab mollitia praesentium debitis quo et quos repellendus! At ab
            animi quam nihil.
          </p>
          <h2 className="font-semibold text-3xl font-serif">Outcome</h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={360}
            height={74}
            priority
          />
          <p className="font-sans text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            pariatur ullam impedit. Consequatur ducimus distinctio recusandae
            iure, ab mollitia praesentium debitis quo et quos repellendus! At ab
            animi quam nihil.
          </p>
        </div>
      </div>
    </main>
  );
}
