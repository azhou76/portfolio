import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Project1() {
  return (
    <main className="flex min-h-screen flex-col space-y-40 m-0 bg-white">
      <div className="flex min-h-screen flex-col flex-wrap items-center space-y-20 p-0">
        <Navbar></Navbar>
        <div className="flex flex-col mb-[20%]">
          <h1 className="font-semibold text-left text-5xl max-w-xl font-serif pl-16 pt-16">
            Restaurant Aggregator
          </h1>
          <div className="flex flex-col items-center">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert pt-8 pb-8"
              src="/restaurant1.png"
              alt="Next.js Logo"
              width={1100}
              height={1100}
              priority
            />
          </div>
          <div className="bg-green-700">
            <div className="flex flex-row justify-evenly space-x-16 w-screen text-white pt-8 pb-8">
              <div className="flex flex-col space-y-4 text-white">
                <h2 className="font-semibold text-3xl font-serif">Role</h2>
                <p className="font-sans text-white">User interface designer</p>
                <p className="font-sans text-white">
                  User interface programmer
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-white">
                <h2 className="font-semibold text-3xl font-serif">Team</h2>
                <p className="font-sans text-white">Alexander Zhou</p>
              </div>
              <div className="flex flex-col space-y-4 text-white">
                <h2 className="font-semibold text-3xl font-serif">Timeline</h2>
                <p className="font-sans text-white">April 2024 (1 week)</p>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="font-semibold text-3xl font-serif">
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
            <div className="flex flex-row justify-between w-screen pl-32 pr-32 pt-16 pb-16">
              <h2 className="font-semibold text-3xl font-serif max-w-[35%] pl-16">
                Context
              </h2>

              <p className="font-sans text-gray-600 max-w-[65%]">
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
            <div className="flex flex-row justify-between w-screen pl-32 pr-32 pt-16 pb-16">
              <h2 className="font-semibold text-3xl font-serif max-w-[35%] pl-16">
                Problem
              </h2>
              <ol className="font-sans text-gray-600 max-w-[65%] space-y-8">
                <li>
                  1. Poor usability leads to poor engagement and thus
                  profitability
                </li>
                <li>2. Extensive user research is expensive</li>
                <li>
                  3. A strong online brand is as essential as ever, especially
                  in competitive industries that require digital engagement
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="flex flex-col items-center">
              <div className="flex flex-row justify-between w-screen pl-32 pr-32 pt-16 pb-8">
                <h2 className="font-semibold text-3xl font-serif max-w-[35%] pl-16">
                  Research
                </h2>
              </div>

              <div className="flex flex-col items-center space-y-10 w-screen max-w-[60%] mb-[5%]">
                <p className="font-sans text-gray-600">
                  A Competitive Analysis was conducted on the CBS Sports App,
                  Gmail, and Spotify to evaluate the pros and cons of each
                  website's existing aggregator (i.e. like/favorite feature)
                </p>
                <div className="flex flex-row space-x-4">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/spotify.png"
                    alt="Spotify page"
                    width={170}
                    height={500}
                    priority
                  />
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/cbs.png"
                    alt="CBS Sports App page"
                    width={170}
                    height={500}
                    priority
                  />
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/gmail2.png"
                    alt="Gmail page"
                    width={700}
                    height={120}
                    priority
                  />
                </div>
                <p className="font-sans text-gray-600">
                  The websites' aggregators were evaluated across six different
                  factor with the competitive analysis chart shown below.
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
                  From the analysis, the key features that guided implementation
                  of the restaurant aggregator included:{" "}
                </p>
                <ol className="font-sans text-gray-600 space-y-8 mt-8">
                  {" "}
                  <li className="ml-8">
                    1. a clear, hierarchical visual distinction between
                    favorited and non-favorited items (as seen from the CBS
                    Sports App)
                  </li>
                  <li className="ml-8">
                    2. ease of favoriting/unfavoriting items (as seen from
                    Gmail)
                  </li>
                  <li className="ml-8">
                    3. ability to filter and sort favorited items by various
                    criteria (as seen from Gmail)
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="flex flex-col items-center">
              <div className="flex flex-row justify-between w-screen pl-32 pr-32 pt-16 pb-8">
                <h2 className="font-semibold text-3xl font-serif max-w-[35%] pl-16">
                  Outcome
                </h2>
              </div>

              <div className="flex flex-col items-center space-y-10 w-screen max-w-[60%] mb-[5%]">
                <p className="font-sans text-gray-600">
                  Leveraging the takeaways from a Competitive Analysis, I
                  decided to create an aggregator themed around restaurants
                  located around Brown University's campus. This aggregator is
                  aimed at helping students more efficiently narrow down their
                  next spot to eat, so that they can satisfy their various
                  dietary and accessibility needs/desires.
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
            <div className="flex flex-row justify-between w-screen pl-32 pr-32 pt-16 pb-16">
              <h2 className="font-semibold text-3xl font-serif max-w-[35%] pl-16">
                Learnings
              </h2>
              <ol className="font-sans text-gray-600 max-w-[65%] space-y-8">
                <li>
                  1. First conducting a competitive analysis looking at how
                  existing websites allowed for a more nuanced evaluation of
                  feature differences and tradeoffs
                </li>
                <li>
                  2. Initial planning of which features to implement and how to
                  go about doing so expedited the development process and made
                  the final product much better
                </li>
                <li>
                  3. Responsive and accesible design is just as important as any
                  other aspect of a website's design
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
