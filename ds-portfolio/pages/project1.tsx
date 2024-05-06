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
                  To inform which features our aggregator included in its
                  design, a Competitive Analysis was first conducted using three
                  different websites/apps and across six different factors. The
                  websites used were the CBS Sports App, Gmail, and Spotify, and
                  the results of the analysis can be seen below.
                </p>
                <div className="flex flex-row space-x-4">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/spotify.png"
                    alt="Next.js Logo"
                    width={150}
                    height={500}
                    priority
                  />
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/cbs.png"
                    alt="Next.js Logo"
                    width={150}
                    height={500}
                    priority
                  />
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/gmail2.png"
                    alt="Next.js Logo"
                    width={700}
                    height={150}
                    priority
                  />
                </div>
                <p className="font-sans text-gray-600">
                  To inform which features our aggregator included in its
                  design, a Competitive Analysis was first conducted using three
                  different websites/apps and across six different factors. The
                  websites used were the CBS Sports App, Gmail, and Spotify, and
                  the results of the analysis can be seen below.
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
                  To inform which features our aggregator included in its
                  design, a Competitive Analysis was first conducted using three
                  different websites/apps and across six different factors. The
                  websites used were the CBS Sports App, Gmail, and Spotify, and
                  the results of the analysis can be seen below.
                </p>
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
                  located around Brown University's campus. Specifically, the
                  website allows users to filter the listed restaurants based on
                  the available food options (i.e. vegan, vegetarian, or seafood
                  options) and distance to campus, sort them in increasing order
                  of average entree price, and favorite/unfavorite them so that
                  they appear at the top/bottom. These tools are aimed at
                  helping students more efficiently narrow down their next spot
                  to eat, so that they can satisfy their various dietary and
                  accessibility needs/desires. A reset button was also included
                  on the website to allow users to clear out any set
                  filters/sorting and view the full range of restaurants on the
                  website.
                </p>

                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/restaurant1.png"
                  alt="Next.js Logo"
                  width={800}
                  height={600}
                  priority
                />

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
                  1. By first conducting a competitive analysis looking at how
                  existing websites have designed their aggregators, I was able
                  to evaluate the subtle, and often overlooked, differences
                  between them before deciding on aspects of each I wanted to
                  incorporate into my own implementation.
                </li>
                <li>
                  2. I was surprised to find that taking this initial step to
                  plan out what features I wanted to include in my design
                  significantly expedited the development process and made the
                  final product much better.
                </li>
                <li>
                  3. Even though the pre-development stages of this project
                  didn't necessarily involve drawing up lo-fi wireframes or
                  hi-fi prototypes, having some form of visualization pertaining
                  to different aspects of the aggregator was incredibly helpful.
                </li>
                <li>
                  4. In particularly saturated industries with heavy online
                  dependence, conducting a Competitive Analysis can serve as a
                  crucial differentiating factor for companies when developing
                  their various features.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
