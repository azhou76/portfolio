import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Project3() {
  return (
    <main className="flex min-h-screen flex-col space-y-40 m-0 bg-white">
      <div className="flex min-h-screen flex-col flex-wrap items-center space-y-20 p-0">
        <Navbar></Navbar>
        <div className="flex flex-col mb-[20%]">
          <h1 className="font-semibold text-left text-4xl max-w-xl font-heading pl-16 pt-16">
            Rapsodo PRO 3.0
          </h1>
          <div className="flex flex-col items-center">
            <Image
              className="relative pt-8 pb-8"
              src="/rapsodo1.png"
              alt="Next.js Logo"
              width={1100}
              height={1100}
              priority
            />
          </div>
          <div className="bg-red-700">
            <div className="flex md:flex-row md:justify-evenly md:space-x-16 w-screen text-white pt-8 pb-8 flex-col md:pl-0 pl-[36%]">
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">Role</h2>
                <p className="font-sans text-white">Data Analytics Intern</p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">Team</h2>
                <p className="font-sans text-white">Alexander Zhou</p>
                <p className="font-sans text-white">
                  John Garrett (Supervisor)
                </p>
                <p className="font-sans text-white">
                  Rapsodo Product Development Team
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">
                  Timeline
                </h2>
                <p className="font-sans text-white">June 2022 (3 weeks)</p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">
                  Tools Used
                </h2>
                <p className="font-sans text-white">Python (Pandas, Plotly)</p>
                <p className="font-sans text-white">MongoDB</p>
                <p className="font-sans text-white">Data Visualization</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="flex md:flex-row md:justify-between w-screen pl-32 pr-32 pt-16 pb-16 flex-col md:items-auto md:space-y-0 items-center space-y-8">
              <h2 className="font-semibold text-3xl font-heading max-w-[35%] md:pl-16 pl-0">
                Context
              </h2>

              <p className="font-sans text-gray-600 md:max-w-[65%] max-w-[80%]">
                Develop a <span className="font-bold">data dashboard</span> to
                enable the Rapsodo Product Development Team to easily{" "}
                <span className="font-bold">
                  visualize the breakdowns of machine errors
                </span>{" "}
                produced by the <span className="font-bold">PRO 3.0</span>{" "}
                during product testing and apply findings to improve machine
                accuracy
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
                  1.{" "}
                  <span className="font-bold">Thousands of product tests</span>{" "}
                  were being conducted{" "}
                  <span className="font-bold">everyday</span> on PRO 3.0
                  machines using different firmware versions, all of which
                  needed to be analyzed against each other, the company&apos;s
                  previous 2.0 machine, and competitor products
                </li>
                <li>
                  2. The PRO 3.0 was{" "}
                  <span className="font-bold">
                    set to launch by the end of the summer
                  </span>{" "}
                  as Rapsodo&apos;s largest product launch to-date
                </li>
                <li>
                  3. The Product Development Team had a{" "}
                  <span className="font-bold">
                    limited programming background
                  </span>{" "}
                  and required an easy-to-use dashboard that could adjust to new
                  incoming data
                </li>
                <li>
                  4. Baseball{" "}
                  <span className="font-bold">
                    domain knowledge was required
                  </span>{" "}
                  in order to accurately set thresholds on the dashboard and
                  account for different pitch types, spin and velocity ranges,
                  and machine error types
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
                  All product testing data was directly uploaded into a{" "}
                  <span className="font-bold">MongoDB database</span>. Having
                  never used MongoDB prior to the internship, the first step in
                  the dashboard development process was to look at pymongo
                  scripts written by previous interns/developers at the company
                  to develop an understanding of pymongo aggregation pipelines,
                  including how to connect via the company&apos;s connection
                  string.
                </p>
                <div className="flex md:flex-row md:space-x-4 flex-col space-y-4">
                  <Image
                    className="md:pt-6"
                    src="/mongodb.png"
                    alt="Spotify page"
                    width={180}
                    height={100}
                    priority
                  />
                  <Image
                    className="md:pt-2"
                    src="/plotly.png"
                    alt="CBS Sports App page"
                    width={160}
                    height={100}
                    priority
                  />
                </div>
                <p className="font-sans text-gray-600">
                  Coming from a Python background with limited full stack
                  experience at the time, my supervisor proposed looking into{" "}
                  <span className="font-bold">Plotly</span> as a library for
                  building out the actual dashboard and visualizations. Online
                  documentation and examples of other kinds of data dashboards
                  guided learning.
                </p>
                <Image
                  className="relative"
                  src="/rapsodo3.png"
                  alt="Next.js Logo"
                  width={300}
                  height={500}
                  priority
                />

                <p className="font-sans text-gray-600">
                  Finally, having little baseball background, plenty of meetings
                  were held with the rest of the Product Development Team to
                  gather <span className="font-bold">domain knowledge</span> for
                  determining reasonable{" "}
                  <span className="font-bold">filter and error thresholds</span>
                  .
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
                  An optimized pymongo aggregation pipeline was created so that
                  on each run, the dashboard would query live product testing
                  results directly from the company&apos;s MongoDB database. The
                  dashboard (shown below) had filters for{" "}
                  <span className="font-bold">
                    date range, location, player/coach/user/machine ID, sport
                    (baseball vs. softball), machine version (PRO 3.0 vs.
                    previous 2.0 machine), pitch type, and pitch locations
                    (relative to the strike zone)
                  </span>
                  .
                </p>

                <Image
                  className="relative"
                  src="/rapsodo9.png"
                  alt="Next.js Logo"
                  width={800}
                  height={600}
                  priority
                />
                <p className="font-sans text-gray-600">
                  Errors were categorized into{" "}
                  <span className="font-bold">“bad spin confidence data”</span>{" "}
                  (where the machine produced numbers after reading a pitch but
                  had low confidence in the accuracy of the spin numbers),{" "}
                  <span className="font-bold">“bad trigger no data”</span>{" "}
                  (where a pitch was thrown but the machine didn&apos;t read
                  it), and{" "}
                  <span className="font-bold">“bad acceleration z data”</span>{" "}
                  (where the vertical break directions did not align with
                  respect to the pitch type thrown).
                </p>
                <Image
                  className="relative"
                  src="/rapsodo8.png"
                  alt="Next.js Logo"
                  width={800}
                  height={600}
                  priority
                />

                <p className="font-sans text-gray-600">
                  After filters were chosen, the error proportions would be
                  displayed in an overall pie chart (shown above) as well as in
                  line graphs displaying{" "}
                  <span className="font-bold">trends over time</span> (shown
                  below from 1/1/2022 through 8/1/2022).
                </p>
                <Image
                  className="relative"
                  src="/rapsodo6.png"
                  alt="Next.js Logo"
                  width={800}
                  height={600}
                  priority
                />
                <p className="font-sans text-gray-600">
                  The entire <span className="font-bold">tech stack</span> is
                  displayed below. Specifically, the backend{" "}
                  <span className="font-bold">
                    parses the user-inputted filters
                  </span>{" "}
                  received from the frontend into a{" "}
                  <span className="font-bold">
                    pymongo aggregation pipeline
                  </span>{" "}
                  and applies it to the MongoDB database to{" "}
                  <span className="font-bold">
                    retrieve all matching pitches
                  </span>
                  . The backend then converts these retrieved data entries into
                  a Pandas dataframe and{" "}
                  <span className="font-bold">
                    returns counts of each kind of data category
                  </span>{" "}
                  (good data, bad spin confidence data, bad trigger no data, and
                  bad acceleration z data) to the{" "}
                  <span className="font-bold">frontend</span>. Finally, the
                  frontend{" "}
                  <span className="font-bold">
                    uses these data counts to display the previously described
                    plots
                  </span>
                  .
                </p>
                <Image
                  className="relative"
                  src="/rapsodo10.png"
                  alt="Next.js Logo"
                  width={800}
                  height={600}
                  priority
                />
                <p className="font-sans text-gray-600">
                  From these initial analyses, key findings included:
                </p>
                <ol className="font-sans text-gray-600 md:max-w-[65%] max-w-[80%] space-y-8">
                  <li>
                    1. “Bad spin confidence data” had consistently been the{" "}
                    <span className="font-bold">largest source of error</span>{" "}
                    on the company&apos;s previous 2.0 machine, but had been
                    significantly{" "}
                    <span className="font-bold">
                      reduced in recent firmware updates
                    </span>{" "}
                    (21.7% to 6.07%)
                  </li>
                  <li>
                    2. Consequently, the percentage of{" "}
                    <span className="font-bold">good data had increased</span>{" "}
                    from 65.5% to 84.4% from the{" "}
                    <span className="font-bold">
                      2.0 machine to the PRO 3.0
                    </span>
                  </li>
                  <li>
                    3. “Bad trigger no data” had{" "}
                    <span className="font-bold">
                      risen in recent firmware updates
                    </span>{" "}
                    but by a small percentage
                  </li>
                </ol>
                <p className="font-sans text-gray-600">
                  Following the conclusion of my internship, the data dashboard
                  was handed off to the Product Development Team, and the
                  dashboard&apos;s{" "}
                  <span className="font-bold">
                    insights directly guided final firmware updates
                  </span>{" "}
                  leading up to the product&apos;s launch at the end of that
                  summer. The dashboard is still something that the{" "}
                  <span className="font-bold">team uses today</span> when
                  analyzing new firmware updates, and the product has become the
                  company&apos;s{" "}
                  <span className="font-bold">
                    most successful product to date
                  </span>
                  , with <span className="font-bold">all 30 MLB teams</span>{" "}
                  heavily using it as part of their player development programs.
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
                  1. Consulting{" "}
                  <span className="font-bold">domain experts</span> is essential
                  when building out data analytics tools, as these insights
                  improve both the accuracy and usability of any dashboards
                  developed (i.e. learning what “bad data” even looks like)
                </li>
                <li>
                  2. Building out error/sanity checks and{" "}
                  <span className="font-bold">
                    structured test suites throughout the development process
                  </span>{" "}
                  is critical for narrowing down bugs and allowing for easy
                  adaptation/change
                </li>
                <li>
                  3. Holding{" "}
                  <span className="font-bold">
                    conversations with the end stakeholders throughout the
                    project
                  </span>{" "}
                  and thoroughly commenting all features/code are critical for
                  maximizing a project&apos;s usability as well as for ensuring
                  a smooth handoff process
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
