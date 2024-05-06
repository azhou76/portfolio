import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Project3() {
  return (
    <main className="flex min-h-screen flex-col space-y-40 m-0 bg-white">
      <div className="flex min-h-screen flex-col flex-wrap items-center space-y-20 p-0 mb-[10%]">
        <Navbar></Navbar>
        <div className="flex flex-col space-y-10 mb-[20%]">
          <h1 className="font-semibold text-left text-5xl max-w-xl font-serif pl-16 pt-16">
            Rapsodo PRO 3.0
          </h1>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert pl-32 pt-8 pr-16"
            src="/rapsodo1.png"
            alt="Next.js Logo"
            width={1400}
            height={1400}
            priority
          />
          <div className="bg-red-700">
            <div className="flex flex-row justify-evenly space-x-16 w-screen text-white pt-8 pb-8">
              <div className="flex flex-col space-y-4 text-white">
                <h2 className="font-semibold text-3xl font-serif">Role</h2>
                <p className="font-sans text-white">Data Analytics Intern</p>
              </div>
              <div className="flex flex-col space-y-4 text-white">
                <h2 className="font-semibold text-3xl font-serif">Team</h2>
                <p className="font-sans text-white">Alexander Zhou</p>
                <p className="font-sans text-white">
                  Rapsodo Product Development Team
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-white">
                <h2 className="font-semibold text-3xl font-serif">Timeline</h2>
                <p className="font-sans text-white">June 2022 (3 weeks)</p>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="font-semibold text-3xl font-serif">
                  Tools Used
                </h2>
                <p className="font-sans text-white">Python (Plotly, Pandas)</p>
                <p className="font-sans text-white">MongoDB</p>
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

  {
    /*<main className="flex min-h-screen flex-col space-y-40 m-0">
      <div className="flex min-h-screen flex-col flex-wrap items-center space-y-20 p-20 mb-[10%]">
        <Navbar></Navbar>
        <div className="flex flex-col space-y-10 space-x-10 sm:space-x-7 mb-[20%] max-w-[70%]">
          <h1 className="font-semibold text-left text-5xl max-w-xl font-serif">
            Rapsodo PRO 3.0
          </h1>
          <div className="flex flex-row space-x-2">
            <p className="group border border-black px-5 py-4 bg-red-200">
              Python
            </p>
            <p className="group border border-black px-5 py-4 bg-red-200">
              MongoDB
            </p>
            <p className="group border border-black px-5 py-4 bg-red-200">
              Data Vizualization
            </p>
            <p className="group border border-black px-5 py-4 bg-red-200">
              June 2022 (3 weeks)
            </p>
          </div>
          <h2 className="font-semibold text-3xl font-serif">Role + Team</h2>
          <p className="font-sans text-gray-600">
            I worked on the Product Development Team at Rapsodo and was the sole
            programmer on the project. I consulted other members of the Product
            Development Team to acquire the domain knowledge necessary for
            determining various features/thresholds on the dashboard.
          </p>
          <h2 className="font-semibold text-3xl font-serif">Context</h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/rapsodo1.png"
            alt="Rapsodo PRO 3.0"
            width={600}
            height={300}
            priority
          />
          <p className="font-sans text-gray-600">
            During my summer 2022 internship at Rapsodo, a baseball/softabll
            technology company, one of my biggest projects was developing a data
            visualization dashboard to be used by the rest of the Product
            Development Team to easily see the breakdowns of machine errors
            produced by the beta-tested firmware updates on the PRO 3.0 machine,
            which was set to launch by the end of the summer and be the
            company's largest product launch to date.
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
            In preparation for the launch of the new PRO 3.0 machine, thousands
            of tests (i.e. pitching/hitting sessions using the machines) were
            run each day, and the U.S. Product Development Team required an easy
            way to measure the PRO 3.0's accuracy in comparison to competitors
            and Rapsodo's previous products. These accuracy and error breakdowns
            were essential for guiding the direction of the product's final
            firmware updates aimed at reducing remaining inaccuracies as well as
            for aiding in the product's pre-launch marketing efforts. The
            necessity for an easy-to-use error dashboard came about as the vast
            majority of product testing was conducted in the U.S., but the U.S.
            office lacked anyone with strong programming capabilities.
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
            The solution to this data visualization problem was to create a
            user-friendly data dashboard using Python's Plotly library via which
            the rest of the Product Development Team could query live product
            testing results directly from the company's MongoDB database and
            visualize the breakdowns in machine error types. By including
            numerous filters, including date range, machine version, machine ID,
            pitch types, etc., the team could easily identify where errors were
            coming from (i.e. which set of factors led to greater failure rates)
            as well as what kinds of errors were being produced (i.e. the
            machine missing a pitch entirely vs. the machine reading the pitch
            but then producing inaccurate results).
          </p>
          <h2 className="font-semibold text-3xl font-serif">Research</h2>
          <p className="font-sans text-gray-600">
            The project proved to be a great learning experience, having never
            used Plotly or MongoDB prior to the creation of this dashboard.
            Thus, building the dashboard required learning from online
            documentation and examples of other kinds of data visualizations. In
            addition, having come from a limited baseball background prior to
            this internship, plenty of meetings were held with the rest of the
            Product Development Team to source which filters and thresholds
            would be most appropriate given different kinds of pitches, player
            skill levels, etc.
          </p>
          <h2 className="font-semibold text-3xl font-serif">Learnings</h2>
          <p className="font-sans text-gray-600">
            One of the key learnings from this project was how crucial it is to
            hold discussions with domain experts when building out data
            analytics tools, as these insights improve both the accuracy and
            usability of any dashboards developed. This project also proved to
            be a great experience in learning in how to error check the results
            of the dashboard in a dynamic setting, without a structured test
            suite. Incrementally testing and commenting different features
            throughout implementation proved necessary both for future reference
            as well as during the handoff process at the end of the internship.
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
            Following the conclusion of my internship, the data dashboard was
            handed off to the Product Development Team, and it is still
            something that the team uses to date when analyzing the performances
            of new firmware updates to the PRO 3.0. The product was also
            formally launched to the public at the end of my time there,
            becoming the company's most successful product to date, with all 30
            MLB teams heavily using it as part of their player development
            programs.
          </p>
        </div>
      </div>
    </main> */
  }
}
