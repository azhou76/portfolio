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
            NIKE Target Costing App
          </h1>
          <div className="flex flex-col items-center">
            <Image
              className="relative pt-8 pb-8"
              src="/nike1.png"
              alt="Next.js Logo"
              width={600}
              height={600}
              priority
            />
          </div>
          <div className="bg-orange-700">
            <div className="flex md:flex-row md:justify-evenly md:space-x-16 w-screen text-white pt-8 pb-8 flex-col md:pl-0 pl-[36%]">
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">Role</h2>
                <p className="font-sans text-white">Software Engineer Intern</p>
                <p className="font-sans text-white">
                  Only Developer on the Project
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">Team</h2>
                <p className="font-sans text-white">Alexander Zhou</p>
                <p className="font-sans text-white">
                  NIKE Product Costing Team
                </p>
                <p className="font-sans text-white">
                  NIKE Margin Planning Team
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">
                  Timeline
                </h2>
                <p className="font-sans text-white">June-July 2024 (5 weeks)</p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">
                  Tools Used
                </h2>
                <p className="font-sans text-white">
                  JavaScript (React.js) + TypeScript
                </p>
                <p className="font-sans text-white">Tailwind</p>
                <p className="font-sans text-white">
                  Python (Flask, Sklearn, Numpy, Pandas, Boto3, Matplotlib)
                </p>
                <p className="font-sans text-white">AWS S3</p>
                <p className="font-sans text-white">Databricks + Spark</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="flex md:flex-row md:justify-between w-screen pl-32 pr-32 pt-16 pb-16 flex-col md:items-auto md:space-y-0 items-center space-y-8">
              <h2 className="font-semibold text-3xl font-heading max-w-[35%] md:pl-16 pl-0">
                Context
              </h2>
              <div className="space-y-8 md:max-w-[65%] max-w-[80%]">
                <p className="font-sans text-gray-600">
                  Early on in the{" "}
                  <span className="font-bold">shoe development</span> timeline
                  at NIKE, a{" "}
                  <span className="font-bold">
                    target cost for manufacturing a pair of shoes
                  </span>{" "}
                  is determined by the Margin Planning Team. This target cost
                  (called the <span className="font-bold">target FOB cost</span>
                  ) is based on several general attributes of the shoe (i.e.
                  expected retail price, intended consumer demographics, what
                  model the shoe falls under) and{" "}
                  <span className="font-bold">
                    drives material and labor costing decisions
                  </span>{" "}
                  when finalizing the shoe for production.
                </p>
                <p className="font-sans text-gray-600">
                  Even a <span className="font-bold">$0.01 variance</span> in
                  this target cost for a single shoe model can have up to a{" "}
                  <span className="font-bold">
                    $50,000 monetary impact each season
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="flex md:flex-row md:justify-between w-screen pl-32 pr-32 pt-16 pb-16 flex-col md:items-auto md:space-y-0 items-center space-y-8">
              <h2 className="font-semibold text-3xl font-heading max-w-[35%] md:pl-16 pl-0">
                Problem
              </h2>
              <ol className="font-sans text-gray-600 md:max-w-[65%] max-w-[80%] space-y-8">
                <li>
                  1. Current process is{" "}
                  <span className="font-bold">manual</span>, requiring meetings
                  with <span className="font-bold">many stakeholders</span>{" "}
                  across product, design, and manufacturing
                </li>
                <li>
                  2. For each shoe model, data has to be sourced from{" "}
                  <span className="font-bold">many different data sources</span>
                  , which is <span className="font-bold">time-consuming</span>{" "}
                  and <span className="font-bold">disorganized</span>
                </li>
                <li>
                  3. There exists{" "}
                  <span className="font-bold">no baseline cost</span> when it
                  comes to <span className="font-bold">new shoe models</span>,
                  taking an average time of 1 hour to set these baselines
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
                  For a prediction model aimed at predicting a{" "}
                  <span className="font-bold">
                    quantitative target cost value
                  </span>{" "}
                  given a set of general attributes of a shoe, it made sense to
                  leverage the capabilities of a{" "}
                  <span className="font-bold">
                    regression machine learning model
                  </span>
                  .
                </p>

                <p className="font-sans text-gray-600">
                  Following conversations with the{" "}
                  <span className="font-bold">Margin Planning Team</span> that
                  is actually tasked with the day-to-day responsibilities of
                  setting these target costs, I narrowed down a list of{" "}
                  <span className="font-bold">8 general shoe attributes</span>{" "}
                  that the team actually has access to when setting these target
                  costs, including expected{" "}
                  <span className="font-bold">
                    retail price, model ID, factory, season, gender, etc.
                  </span>
                </p>

                <Image
                  className="relative"
                  src="/nike4.png"
                  alt="Next.js Logo"
                  width={700}
                  height={500}
                  priority
                />

                <p className="font-sans text-gray-600">
                  I then sourced{" "}
                  <span className="font-bold">
                    1500+ historical cost breakdowns
                  </span>{" "}
                  from the Product Costing Team&apos;s{" "}
                  <span className="font-bold">AWS S3</span> storage bucket of
                  previous shoe models, with these cost breakdowns including all
                  the needed general attributes of that shoe as well as what the
                  target costs had been set at in the past.
                </p>
                <div className="flex md:flex-row md:space-x-4 flex-col space-y-4">
                  <Image
                    className="md:pt-6"
                    src="/nike5.png"
                    alt="CBS Sports App page"
                    width={360}
                    height={100}
                    priority
                  />
                  <Image
                    className="md:pt-2"
                    src="/nike7.png"
                    alt="Gmail page"
                    width={160}
                    height={100}
                    priority
                  />
                </div>
                <p className="font-sans text-gray-600">
                  Finally, I decided to use a{" "}
                  <span className="font-bold">Ridge Regression</span> (created
                  using <span className="font-bold">Python sklearn</span>) with
                  L2 regularization to maintain greater stability when training
                  on a very{" "}
                  <span className="font-bold">
                    sparse post-processing dataset
                  </span>
                  . All the{" "}
                  <span className="font-bold">categorical attributes</span> of
                  the dataset were{" "}
                  <span className="font-bold">one-hot encoded</span> and the{" "}
                  <span className="font-bold">continuous attributes</span> were
                  normalized using a{" "}
                  <span className="font-bold">standard scaler</span>.
                </p>
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
                  Note that due to <span className="font-bold">NDA</span>, the
                  model UI, demo, and accuracy plots are not shown.
                </p>
                <p className="font-sans text-gray-600">
                  <span className="font-bold">Model accuracy</span> was defined
                  using a <span className="font-bold">5% interval</span> (i.e.
                  if a predicted target cost is within 5% of the actual target
                  cost, it&apos;s labeled as accurate). The{" "}
                  <span className="font-bold">average validation accuracy</span>{" "}
                  across <span className="font-bold">1000 random trials</span>{" "}
                  of different train-test splits (using 75%-25% splits) was{" "}
                  <span className="font-bold">90.04%</span>.
                </p>
                <Image
                  className="relative"
                  src="/nike2.png"
                  alt="Next.js Logo"
                  width={700}
                  height={500}
                  priority
                />
                <p className="font-sans text-gray-600">
                  The model was then built into a{" "}
                  <span className="font-bold">full stack</span> application,
                  such that a user could actually input values for the 8 general
                  attributes of a specific shoe model in a{" "}
                  <span className="font-bold">frontend</span> (created using{" "}
                  <span className="font-bold">React.js and Tailwind</span>),
                  which would call a <span className="font-bold">backend</span>{" "}
                  (created using <span className="font-bold">Flask</span>)
                  containing the model logic and return the model&apos;s
                  predicted target cost for the shoe. The full{" "}
                  <span className="font-bold">tech stack</span> is shown below.
                </p>
                <Image
                  className="relative"
                  src="/nike3.png"
                  alt="Next.js Logo"
                  width={700}
                  height={500}
                  priority
                />
                <p className="font-sans text-gray-600">
                  The frontend was also built to allow for stakeholders to
                  upload an Excel or JSON file with the shoe information for{" "}
                  <span className="font-bold">
                    thousands of different shoes
                  </span>{" "}
                  and have the model return the predicted target cost for each
                  of them, shortening the target cost setting process to{" "}
                  <span className="font-bold">2 minutes on average</span>.
                </p>
                <Image
                  className="relative"
                  src="/nike6.png"
                  alt="Next.js Logo"
                  width={200}
                  height={120}
                  priority
                />
                <p className="font-sans text-gray-600">
                  Finally, during handoff, the project&apos;s codebase was
                  migrated to{" "}
                  <span className="font-bold">
                    NIKE&apos;s Databricks platform
                  </span>{" "}
                  and adjusted to{" "}
                  <span className="font-bold">leverage Spark</span> for better
                  performance and future scalability.
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
                  1. Defining a{" "}
                  <span className="font-bold">minimum viable product</span>{" "}
                  through conversations with stakeholders is crucial for{" "}
                  <span className="font-bold">maximizing impact</span> when
                  faced with a short timeline
                </li>
                <li>
                  2. The balance between{" "}
                  <span className="font-bold">accuracy</span> and{" "}
                  <span className="font-bold">runtime</span> depends on the
                  context of the project
                </li>
                <li>
                  3. <span className="font-bold">Data sourcing</span> can be{" "}
                  <span className="font-bold">challenging</span>, especially at
                  corporations with a lot of it
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
