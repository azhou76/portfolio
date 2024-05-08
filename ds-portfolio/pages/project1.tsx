import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Project1() {
  return (
    <main className="flex min-h-screen flex-col space-y-40 m-0 bg-white">
      <div className="flex min-h-screen flex-col flex-wrap items-center space-y-20 p-0">
        <Navbar></Navbar>
        <div className="flex flex-col mb-[20%]">
          <h1 className="font-semibold text-left text-4xl max-w-xl font-heading pl-16 pt-16">
            Restaurant Aggregator
          </h1>
          <div className="flex flex-col items-center">
            <a href="http://development-pink.vercel.app/">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert pt-8 pb-8"
                src="/restaurant1.png"
                alt="Next.js Logo"
                width={1100}
                height={1100}
                priority
              />
            </a>
          </div>
          <div className="bg-green-700">
            <div className="flex md:flex-row md:justify-evenly md:space-x-16 w-screen text-white pt-8 pb-8 flex-col md:pl-0 pl-[36%]">
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">Role</h2>
                <p className="font-sans text-white">User interface designer</p>
                <p className="font-sans text-white">
                  User interface programmer
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">Team</h2>
                <p className="font-sans text-white">Alexander Zhou</p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">
                  Timeline
                </h2>
                <p className="font-sans text-white">April 2024 (1 week)</p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">
                  Tools Used
                </h2>
                <p className="font-sans text-white">React.js</p>
                <p className="font-sans text-white">HTML/CSS</p>
                <p className="font-sans text-white">Vercel</p>
                <p className="font-sans text-white">Competitive Analysis</p>
                <p className="font-sans text-white">Case Study</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="flex md:flex-row md:justify-between w-screen pl-32 pr-32 pt-16 pb-16 flex-col md:items-auto md:space-y-0 items-center space-y-8">
              <h2 className="font-semibold text-3xl font-heading max-w-[35%] md:pl-16 pl-0">
                Context
              </h2>

              <p className="font-sans text-gray-600 md:max-w-[65%] max-w-[80%]">
                Leverage a{" "}
                <span className="font-bold">competitive analysis</span> to
                synthesize the best features of existing website aggregators for
                the development of a{" "}
                <span className="font-bold">
                  dynamic and responsive website
                </span>{" "}
                using <span className="font-bold">React.js</span>.
              </p>
            </div>
          </div>
          <div className="bg-white">
            <div className="flex md:flex-row md:justify-between w-screen pl-32 pr-32 pt-16 pb-16 flex-col md:items-auto md:space-y-0 items-center space-y-8">
              <h2 className="font-semibold text-3xl font-heading max-w-[35%] md:pl-16 pl-0">
                Problem
              </h2>
              <ol className="font-sans text-gray-600 md:max-w-[65%] max-w-[80%] space-y-8">
                <li>
                  1. <span className="font-bold">Poor usability</span> leads to{" "}
                  <span className="font-bold">poor engagement</span> and thus{" "}
                  <span className="font-bold">profitability</span>
                </li>
                <li>
                  2. Extensive user research is{" "}
                  <span className="font-bold">expensive</span>
                </li>
                <li>
                  3. A <span className="font-bold">strong online brand</span> is
                  as essential as ever, especially in competitive industries
                  that require digital engagement
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="flex flex-col items-center">
              <div className="flex md:flex-row md:justify-between w-screen pl-32 pr-32 pt-16 pb-8 flex-col items-center space-y-8">
                <h2 className="font-semibold text-3xl font-heading max-w-[35%] md:pl-16 pl-0">
                  Research
                </h2>
              </div>

              <div className="flex flex-col items-center space-y-10 w-screen max-w-[60%] mb-[5%]">
                <p className="font-sans text-gray-600">
                  A <span className="font-bold">Competitive Analysis</span> was
                  conducted on the{" "}
                  <span className="font-bold">
                    CBS Sports App, Gmail, and Spotify
                  </span>{" "}
                  to evaluate the pros and cons of each website's existing
                  aggregator (i.e. like/favorite feature)
                </p>
                <div className="flex md:flex-row md:space-x-4 flex-col space-y-4">
                  <Image
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert md:pt-6"
                    src="/cbssports.png"
                    alt="CBS Sports App page"
                    width={160}
                    height={100}
                    priority
                  />
                  <Image
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert md:pt-2"
                    src="/gmail3.png"
                    alt="Gmail page"
                    width={160}
                    height={100}
                    priority
                  />
                  <Image
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert md:pt-2"
                    src="/spotify_logo.png"
                    alt="Spotify page"
                    width={160}
                    height={100}
                    priority
                  />
                </div>
                <p className="font-sans text-gray-600">
                  The websites' aggregators were evaluated across{" "}
                  <span className="font-bold">six different factors</span> with
                  the competitive analysis chart shown below.
                </p>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/chart.png"
                  alt="Next.js Logo"
                  width={700}
                  height={500}
                  priority
                />

                <p className="font-sans text-gray-600">
                  From the analysis, the{" "}
                  <span className="font-bold">key features</span> that guided
                  implementation of the restaurant aggregator included:{" "}
                </p>
                <ol className="font-sans text-gray-600 space-y-8 mt-8">
                  {" "}
                  <li className="ml-8">
                    1. a clear, hierarchical visual{" "}
                    <span className="font-bold">
                      distinction between favorited and non-favorited items
                    </span>{" "}
                    (as seen from the CBS Sports App)
                  </li>
                  <li className="ml-8">
                    2. <span className="font-bold">ease</span> of
                    favoriting/unfavoriting items (as seen from Gmail)
                  </li>
                  <li className="ml-8">
                    3. ability to{" "}
                    <span className="font-bold">filter and sort</span> favorited
                    items by various criteria (as seen from Gmail)
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="flex flex-col items-center">
              <div className="flex md:flex-row md:justify-between w-screen pl-32 pr-32 pt-16 pb-8 flex-col items-center space-y-8">
                <h2 className="font-semibold text-3xl font-heading max-w-[35%] md:pl-16 pl-0">
                  Outcome
                </h2>
              </div>

              <div className="flex flex-col items-center space-y-10 w-screen max-w-[60%] mb-[5%]">
                <p className="font-sans text-gray-600">
                  Leveraging the takeaways from a Competitive Analysis, I
                  decided to create an aggregator themed around{" "}
                  <span className="font-bold">
                    restaurants located around Brown University's campus
                  </span>
                  . This aggregator is aimed at helping students more
                  efficiently narrow down their next spot to eat, so that they
                  can satisfy their various dietary and accessibility
                  needs/desires.
                </p>

                <a href="http://development-pink.vercel.app/">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/restaurant1.png"
                    alt="Next.js Logo"
                    width={800}
                    height={600}
                    priority
                  />
                </a>
                <p className="font-sans text-gray-600">
                  Users are able to <span className="font-bold">filter</span>{" "}
                  the listed restaurants based on the{" "}
                  <span className="font-bold">available food options</span>{" "}
                  (i.e. vegan, vegetarian, or seafood options) and{" "}
                  <span className="font-bold">distance</span> to campus,{" "}
                  <span className="font-bold">sort</span> them in increasing
                  order of{" "}
                  <span className="font-bold">average entree price</span>, and{" "}
                  <span className="font-bold">favorite/unfavorite</span> them so
                  that they appear at the top/bottom.
                </p>

                <p className="font-sans text-gray-600">
                  The resulting restaurant aggregator is shown above and is
                  deployed at{" "}
                  <a
                    className="text-blue-600 underline"
                    href="http://development-pink.vercel.app/"
                  >
                    http://development-pink.vercel.app/
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="flex md:flex-row md:justify-between w-screen pl-32 pr-32 pt-16 pb-16 flex-col md:items-auto md:space-y-0 items-center space-y-8">
              <h2 className="font-semibold text-3xl font-heading max-w-[35%] md:pl-16 pl-0">
                Learnings
              </h2>
              <ol className="font-sans text-gray-600 md:max-w-[65%] max-w-[80%] space-y-8">
                <li>
                  1. First conducting a{" "}
                  <span className="font-bold">competitive analysis</span>{" "}
                  looking at how existing websites allowed for a more{" "}
                  <span className="font-bold">nuanced evaluation</span> of
                  feature differences and tradeoffs
                </li>
                <li>
                  2. Initial <span className="font-bold">planning</span> of
                  which features to implement and how to go about doing so
                  expedited the development process and made the{" "}
                  <span className="font-bold">final product much better</span>
                </li>
                <li>
                  3. Responsive and{" "}
                  <span className="font-bold">accesible design</span> is just as
                  important as any other aspect of a website's design
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
