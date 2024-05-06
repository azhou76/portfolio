import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Project2() {
  return (
    <main className="flex min-h-screen flex-col space-y-40 m-0 bg-white">
      <div className="flex min-h-screen flex-col flex-wrap items-center space-y-20 p-0 mb-[10%]">
        <Navbar></Navbar>
        <div className="flex flex-col space-y-10 mb-[20%]">
          <h1 className="font-semibold text-left text-5xl max-w-xl font-serif pl-16 pt-16">
            Warp Community
          </h1>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert pl-32 pt-8 pr-16"
            src="/warp1.png"
            alt="Next.js Logo"
            width={1400}
            height={1400}
            priority
          />
          <div className="bg-purple-900">
            <div className="flex flex-row justify-evenly space-x-16 w-screen text-white pt-8 pb-8">
              <div className="flex flex-col space-y-4 text-white">
                <h2 className="font-semibold text-3xl font-serif">Role</h2>
                <p className="font-sans text-white">User interface designer</p>
              </div>
              <div className="flex flex-col space-y-4 text-white">
                <h2 className="font-semibold text-3xl font-serif">Team</h2>
                <p className="font-sans text-white">Alexander Zhou</p>
                <p className="font-sans text-white">Angela Li</p>
                <p className="font-sans text-white">Patrick Li</p>
                <p className="font-sans text-white">Jennifer Chen</p>
              </div>
              <div className="flex flex-col space-y-4 text-white">
                <h2 className="font-semibold text-3xl font-serif">Timeline</h2>
                <p className="font-sans text-white">April 2024 (3 weeks)</p>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="font-semibold text-3xl font-serif">
                  Tools Used
                </h2>
                <p className="font-sans text-white">Figma</p>
                <p className="font-sans text-white">Case Study</p>
              </div>
            </div>
          </div>
          <div className="space-y-20 ml-[15%] mb-[20%] max-w-[70%]">
            <h2 className="font-semibold text-3xl font-serif">Context</h2>

            <p className="font-sans text-gray-600">
              This project was done as part of the UI/UX course at Brown, with
              this project aiming to take a deeper dive into competitor analysis
              and the development of dynamic and responsive websites using
              React.js.
            </p>
            <h2 className="font-semibold text-3xl font-serif">Problem</h2>

            <p className="font-sans text-gray-600">
              In highly competitive industries, the usability and efficiency of
              certain features on a company website can make vast differences on
              user engagement, experience, and company profitability. These
              seemingly small variations across interface features can build
              into substantial swings that ultimately push companies with better
              online user experiences towards having larger market shares.
              Therefore, even when developing common features of a website, it
              is important to analyze the pros and cons of existing websites
              that have these features via a Competitive Analysis, synthesizing
              the best aspects across them to build out something that maximizes
              accessibility and usability. In this project, we specifically look
              at websites that have aggregators, such as shopping carts,
              equipped with a favoriting function.
            </p>
            <h2 className="font-semibold text-3xl font-serif">Research</h2>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={360}
              height={74}
              priority
            />
            <p className="font-sans text-gray-600">
              To inform which features our aggregator included in its design, a
              Competitive Analysis was first conducted using three different
              websites/apps and across six different factors. The websites used
              were the CBS Sports App, Gmail, and Spotify, and the results of
              the analysis can be seen above.
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
              Leveraging the takeaways from a Competitive Analysis, I decided to
              create an aggregator themed around restaurants located around
              Brown University's campus. Specifically, the website allows users
              to filter the listed restaurants based on the available food
              options (i.e. vegan, vegetarian, or seafood options) and distance
              to campus, sort them in increasing order of average entree price,
              and favorite/unfavorite them so that they appear at the
              top/bottom. These tools are aimed at helping students more
              efficiently narrow down their next spot to eat, so that they can
              satisfy their various dietary and accessibility needs/desires. A
              reset button was also included on the website to allow users to
              clear out any set filters/sorting and view the full range of
              restaurants on the website.
            </p>
            <p>
              The resulting restaurant aggregator is shown above and is deployed
              at{" "}
              <a
                className="text-blue-600 underline"
                href="http://development-pink.vercel.app/"
              >
                http://development-pink.vercel.app/
              </a>
            </p>

            <h2 className="font-semibold text-3xl font-serif">Learnings</h2>
            <p className="font-sans text-gray-600">
              By first conducting a competitive analysis looking at how existing
              websites have designed their aggregators, I was able to evaluate
              the subtle, and often overlooked, differences between them before
              deciding on aspects of each I wanted to incorporate into my own
              implementation. I was surprised to find that taking this initial
              step to plan out what features I wanted to include in my design
              significantly expedited the development process and made the final
              product much better. Even though the pre-development stages of
              this project didn't necessarily involve drawing up lo-fi
              wireframes or hi-fi prototypes, having some form of visualization
              pertaining to different aspects of the aggregator was incredibly
              helpful. Ultimately, in particularly saturated industries with
              heavy online dependence, conducting a Competitive Analysis can
              serve as a crucial differentiating factor for companies when
              developing their various features.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
