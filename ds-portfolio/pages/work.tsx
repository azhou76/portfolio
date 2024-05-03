import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Work() {
  return (
    <main className="flex min-h-screen flex-col space-y-40 m-0">
      <div className="flex min-h-screen flex-col flex-wrap justify-center items-center p-10 m-0">
        <Navbar></Navbar>
        <div className="flex items-center space-x-5">
          <a
            href="./project1"
            className="group rounded-lg border border-black px-5 py-4 bg-green-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert m-16"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <h2 className="mb-3 text-2xl font-semibold">
              Restaurant Aggregator
            </h2>
            <p className="m-0 max-w-[33ch] text-sm opacity-80">
              React.js, Case Study
            </p>
            <p className="m-0 max-w-[33ch] text-sm opacity-50">
              Created a restaurant aggregrator using React to allow users to
              filter for Providence-based restaurants by food and distance
              preferences.
            </p>
          </a>

          <a
            href="./project2"
            className="group rounded-lg border border-black px-5 py-4 bg-purple-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert m-16"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <h2 className="mb-3 text-2xl font-semibold">Warp Community</h2>
            <p className="m-0 max-w-[33ch] text-sm opacity-80">
              UI/UX, Case Study
            </p>
            <p className="m-0 max-w-[33ch] text-sm opacity-50">
              Worked with Warp founders to prototype lo-fi and hi-fi Figma
              designs of a community feature for Warp developers to share and
              publish tools.
            </p>
          </a>

          <a
            href="./project3"
            className="group rounded-lg border border-black px-5 py-4 bg-red-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert m-16"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <h2 className="mb-3 text-2xl font-semibold">Rapsodo PRO 3.0</h2>
            <p className="m-0 max-w-[33ch] text-sm opacity-80">
              Python, MongoDB, DataViz, Internship
            </p>
            <p className="m-0 max-w-[33ch] text-sm opacity-50">
              Created a Plotly dashboard visualizing sources and breakdowns of
              error during pre-launch product testing of the Rapsodo PRO 3.0
              machines.
            </p>
          </a>
        </div>
        <Footer></Footer>
      </div>
    </main>
  );
}
