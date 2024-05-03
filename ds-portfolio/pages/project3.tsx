import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Project3() {
  return (
    <main className="flex min-h-screen flex-col space-y-40 m-0">
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
    </main>
  );
}
