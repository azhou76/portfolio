import Image from "next/image";

export default function Work() {
  return (
    <div
      id="work"
      className="flex min-h-screen flex-col justify-center items-center space-y-10 p-10 md:pt-16 pt-64 mb-4 h-screen"
    >
      <h1 className="text-white text-5xl md:mt-16 mt-64 mb-4 font-heading font-medium">
        WORK
      </h1>
      {/* Import Figma interactive photo into project descs and have pictures of websites able to click-through */}
      <div className="flex md:flex-row flex-col items-center space-x-5 md:space-y-0 space-y-10">
        <a
          href="./project1"
          className="group rounded-lg border border-black px-5 md:ml-0 ml-4 py-4 bg-green-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:-translate-y-2"
        >
          <div className="flex flex-col items-center">
            <Image
              className="relative rounded-lg"
              src="/restaurantlogo.png"
              alt="Next.js Logo"
              width={250}
              height={47}
              priority
            />
          </div>
          <h2 className="mb-3 text-2xl font-semibold font-heading">
            Restaurant Aggregator
          </h2>
          <p className="mb-3 max-w-[33ch] text-sm opacity-80 font-sans font-medium">
            React.js, Case Study
          </p>
          <p className="mb-3 max-w-[40ch] text-sm opacity-70 font-sans">
            Created a restaurant aggregrator using React to allow users to
            filter for Providence-based restaurants by food and distance
            preferences.
          </p>
        </a>

        <a
          href="./project2"
          className="group rounded-lg border border-black px-5 py-4 bg-purple-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:-translate-y-2"
        >
          <div className="flex flex-col items-center">
            <Image
              className="relative rounded-lg"
              src="/terminal.png"
              alt="Warp Community Figma"
              width={250}
              height={47}
              priority
            />
          </div>
          <h2 className="mb-3 text-2xl font-semibold font-heading">
            Warp Community
          </h2>
          <p className="mb-3 max-w-[33ch] text-sm opacity-80 font-sans font-medium">
            UI/UX, Case Study
          </p>
          <p className="mb-3 max-w-[40ch] text-sm opacity-70 font-sans">
            Worked with Warp founders to prototype lo-fi and hi-fi Figma designs
            of a community feature for Warp developers to share and publish
            tools.
          </p>
        </a>

        <a
          href="./project3"
          className="group rounded-lg border border-black px-5 py-4 bg-red-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:-translate-y-2"
        >
          <div className="flex flex-col items-center">
            <Image
              className="relative rounded-lg"
              src="/mlb.png"
              alt="Next.js Logo"
              width={250}
              height={47}
              priority
            />
          </div>
          <h2 className="mb-3 text-2xl font-semibold font-heading">
            Rapsodo PRO 3.0
          </h2>
          <p className="mb-3 max-w-[33ch] text-sm opacity-80 font-sans font-medium">
            Python, MongoDB, DataViz, Internship
          </p>
          <p className="mb-3 max-w-[40ch] text-sm opacity-70 font-sans">
            Created a Plotly dashboard visualizing sources and breakdowns of
            error during pre-launch product testing of the Rapsodo PRO 3.0
            machines.
          </p>
        </a>
      </div>
    </div>
  );
}
