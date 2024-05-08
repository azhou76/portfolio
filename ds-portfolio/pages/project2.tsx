import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Project2() {
  return (
    <main className="flex min-h-screen flex-col space-y-40 m-0 bg-white">
      <div className="flex min-h-screen flex-col flex-wrap items-center space-y-20 p-0">
        <Navbar></Navbar>
        <div className="flex flex-col mb-[20%]">
          <h1 className="font-semibold text-left text-4xl max-w-xl font-heading pl-16 pt-16">
            Warp Community
          </h1>
          <div className="flex flex-col items-center">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert pt-8 pb-8"
              src="/warp.png"
              alt="Next.js Logo"
              width={1100}
              height={1100}
              priority
            />
          </div>
          <div className="bg-purple-900">
            <div className="flex md:flex-row md:justify-evenly md:space-x-16 w-screen text-white pt-8 pb-8 flex-col md:pl-0 pl-[36%]">
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">Role</h2>
                <p className="font-sans text-white">User interface designer</p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">Team</h2>
                <p className="font-sans text-white">Alexander Zhou</p>
                <p className="font-sans text-white">Angela Li</p>
                <p className="font-sans text-white">Patrick Li</p>
                <p className="font-sans text-white">Jennifer Chen</p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">
                  Timeline
                </h2>
                <p className="font-sans text-white">April 2024 (3 weeks)</p>
              </div>
              <div className="flex flex-col space-y-4 text-white md:py-0 py-8">
                <h2 className="font-semibold text-3xl font-heading">
                  Tools Used
                </h2>
                <p className="font-sans text-white">Figma</p>
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
                Construct an interactive,{" "}
                <span className="font-bold">high-fidelity prototype</span> for{" "}
                <span className="font-bold">Warp</span>, a terminal reimagined
                with AI and collaborative tools, specifically ideating a{" "}
                <span className="font-bold">community feature</span> to enable
                programmers to engage with other users
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
                  1. In Warp today, there is{" "}
                  <span className="font-bold">no place</span> in the product to{" "}
                  <span className="font-bold">connect with other users</span>,
                  share tools, or install extensions
                </li>
                <li>
                  2. <span className="font-bold">Creators</span> are unable to
                  share their tools to other users
                </li>
                <li>
                  3. <span className="font-bold">Consumers/developers</span> are
                  unable to find tools that have been created by other
                  developers
                </li>
                <li>
                  4. Users{" "}
                  <span className="font-bold">
                    may have to leave the interface
                  </span>{" "}
                  in order to find certain terminal tools/methodologies
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
                  All members of our team began by{" "}
                  <span className="font-bold">sketching end-to-end flows</span>{" "}
                  before coming together and deciding on the best features
                  across all the sketches.
                </p>

                <p className="font-sans text-gray-600">Example Sketch:</p>
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/sketch1.png"
                  alt="CBS Sports App page"
                  width={460}
                  height={400}
                  priority
                />

                <p className="font-sans text-gray-600">
                  These features were then incorporated into an initial set of{" "}
                  <span className="font-bold">low-fidelity wireframes</span>.
                  The key design decisions we agreed upon when creating the
                  wireframes were to maximize whitespace, keep the Warp terminal
                  visible even when users have their Drive, AI, and Community
                  panels open, and ensure the Community feature and user
                  profiles are intuitive to use. These decisions were driven by
                  the idea that{" "}
                  <span className="font-bold">Warp is a terminal first</span>{" "}
                  and that any additional features, including the Community
                  feature, should not take away from that experience.
                </p>
                <p className="font-sans text-gray-600">
                  Initial Community Page:
                </p>
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/initial_lofi1.png"
                  alt="CBS Sports App page"
                  width={960}
                  height={700}
                  priority
                />
                <p className="font-sans text-gray-600">Initial Profile Flow:</p>
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/initial_lofi2.png"
                  alt="Gmail page"
                  width={1460}
                  height={1200}
                  priority
                />
                <p className="font-sans text-gray-600">
                  Initial Publishing Flow:
                </p>
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/initial_lofi3.png"
                  alt="Spotify page"
                  width={1460}
                  height={1200}
                  priority
                />
                <div className="flex flex-col items-center space-y-4">
                  <p className="font-sans text-gray-600">
                    The low-fidelity wireframe flows shown above reflect the
                    primary aspects that the Warp team requested in a Community
                    feature:
                  </p>
                  <ol className="font-sans text-gray-600 space-y-4">
                    {" "}
                    <li className="ml-8">- A new community page</li>
                    <li className="ml-8">- Enhanced user profiles</li>
                    <li className="ml-8">
                      - Ability to publish a tool from the existing Warp Drive
                    </li>
                  </ol>
                </div>
                <p className="font-sans text-gray-600">
                  We felt that these three features captured our intended impact
                  of allowing users to connect with other users, share their
                  created tools to the community, and download tools from others
                  in the community.
                </p>
                <p className="font-sans text-gray-600">
                  Websites, such as{" "}
                  <span className="font-bold">
                    GitHub, Figma, Pinterest, and Instagram
                  </span>
                  , were used in varying degrees as inspiration during feature
                  ideation.
                </p>
                <div className="flex md:flex-row md:space-x-4 flex-col space-y-4 md:items-auto items-center">
                  <Image
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert md:pt-6"
                    src="/github.png"
                    alt="CBS Sports App page"
                    width={160}
                    height={100}
                    priority
                  />
                  <Image
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert md:pt-2"
                    src="/figma.png"
                    alt="Gmail page"
                    width={280}
                    height={100}
                    priority
                  />
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <p className="font-sans text-gray-600">
                    After developing the initial low-fidelity wireframes, we
                    received a round of{" "}
                    <span className="font-bold">
                      feedback from both peers and the client
                    </span>{" "}
                    themself, with key takeaways including:
                  </p>
                  <ol className="font-sans text-gray-600 space-y-4">
                    {" "}
                    <li className="ml-8">
                      (Peer) - when publishing a tool, the user should be
                      provided with{" "}
                      <span className="font-bold">auto-generated tag</span>, so
                      that they do not have to manually create all of their tags
                      each time
                    </li>
                    <li className="ml-8">
                      (Client) - the{" "}
                      <span className="font-bold">same profile view</span>{" "}
                      should be used for both a user's own profile (in Warp
                      Drive) as well as when viewing another user's profile in
                      the Community panel
                    </li>
                    <li className="ml-8">
                      (Client) - there should exist options for a user to{" "}
                      <span className="font-bold">
                        install, uninstall, and rate a tool
                      </span>{" "}
                      when viewing a tool on the Community page
                    </li>
                    <li className="ml-8">
                      (Client) - the community page should{" "}
                      <span className="font-bold">
                        open from a side, vertical panel
                      </span>{" "}
                      (as is done with Warp AI), rather than a top, horizontal
                      panel
                    </li>
                  </ol>
                </div>
                <p className="font-sans text-gray-600">
                  The{" "}
                  <span className="font-bold">
                    updated low-fidelity wireframes
                  </span>{" "}
                  incorporating these pieces of feedback are shown below:
                </p>
                <p className="font-sans text-gray-600">
                  Updated Community Page:
                </p>
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/updated_lofi1.png"
                  alt="CBS Sports App page"
                  width={960}
                  height={700}
                  priority
                />
                <p className="font-sans text-gray-600">Updated Profile Flow:</p>
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/updated_lofi2.png"
                  alt="Gmail page"
                  width={1460}
                  height={1200}
                  priority
                />
                <p className="font-sans text-gray-600">
                  Updated Publishing Flow:
                </p>
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/updated_lofi3.png"
                  alt="Spotify page"
                  width={1460}
                  height={1200}
                  priority
                />
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
                  Using the low-fidelity wireframes and the company's existing
                  style guide as reference, we first created our own{" "}
                  <span className="font-bold">visual design style guide</span>{" "}
                  (seen below) before moving onto the actual development of the
                  high-fidelity Figma prototypes.
                </p>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/styleguide.png"
                  alt="Next.js Logo"
                  width={800}
                  height={600}
                  priority
                />
                <p className="font-sans text-gray-600">
                  We believe that Warp decided to use black and white as the
                  primary colors so that users would be able to easily and
                  accurately read text, especially when programming for long
                  periods of time. Though some existing color combinations (i.e.
                  white text on a green button background) did not provide the
                  best color contrast, we decided to maintain these color
                  choices for the sake of consistency with the existing Warp
                  product. Icons were also primarily taken from existing icons
                  found in Warp today.
                </p>

                <p className="font-sans text-gray-600">
                  The{" "}
                  <span className="font-bold">high-fidelity prototypes</span>{" "}
                  developed from the low-fidelity wireframes are shown below
                </p>
                <p className="font-sans text-gray-600">Community Page:</p>
                <a href="https://www.figma.com/file/RkZZCZZ8VvhttbmdmLYRHH/Iterative-Design-Flows?type=design&node-id=77-1420&mode=design&t=NZUUs7NofbOz0hUU-0">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/community_hifi.png"
                    alt="Next.js Logo"
                    width={800}
                    height={600}
                    priority
                  />
                </a>
                <p className="font-sans text-gray-600">
                  For the community page, we wanted to first ensure clear
                  navigation to the page without making any significant changes
                  to the homepage. To do this, we added a globe icon in the top
                  right to signal to users that this is the place where they can
                  interact with other Warp users and share tools. Upon opening
                  the community page, we wanted to make this page as similar as
                  possible to other popular community pages, such as in Figma.
                  Users can see a list of tools that have been published from
                  the users that they follow as well as explore general tools.
                  They also have the ability to search for specific tools that
                  they need via a search bar and filter down categories of tools
                  that they would like to find.
                </p>
                <p className="font-sans text-gray-600">Profile Flow:</p>
                <a href="https://www.figma.com/file/RkZZCZZ8VvhttbmdmLYRHH/Iterative-Design-Flows?type=design&node-id=77-1420&mode=design&t=NZUUs7NofbOz0hUU-0">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/profile_hifi.png"
                    alt="Next.js Logo"
                    width={800}
                    height={600}
                    priority
                  />
                </a>
                <p className="font-sans text-gray-600">
                  For the profile flow, we wanted to convey the number of total
                  tool downloads, number of total likes on tools, as well as the
                  number of users that a user is following and how many users
                  are following this user. We wanted to make the profile similar
                  to many other social networks, such as Instagram or Facebook
                  for ease of use. We also felt like the idea of a profile card
                  with the option to edit the profile was something that would
                  already be familiar to many users. We also wanted to make the
                  user's own published tools be visible on their profile and
                  give them the ability to sort and filter just like in the
                  community page. The reason why we wanted to include this
                  profile page on the left was because Warp's Personal tab was
                  already located on this side so we wanted to make all personal
                  elements on the same side of the interface.
                </p>
                <p className="font-sans text-gray-600">Publishing Flow:</p>
                <a href="https://www.figma.com/file/RkZZCZZ8VvhttbmdmLYRHH/Iterative-Design-Flows?type=design&node-id=77-1420&mode=design&t=NZUUs7NofbOz0hUU-0">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/publish_hifi.png"
                    alt="Next.js Logo"
                    width={800}
                    height={600}
                    priority
                  />
                </a>
                <p className="font-sans text-gray-600">
                  Lastly, for the publishing flow, we added a "Publish" option
                  to the existing dropdown menu for each tool, which would open
                  a new modal for the user to edit and eventually publish.
                  Throughout this flow, we used the same colors and modal design
                  as in previous modals (i.e. when creating a tool), and we
                  added a confirmation page at the end of the process so that
                  the user could receive immediate feedback and assurance about
                  their action.
                </p>
                <div className="flex flex-col items-center space-y-4">
                  <p className="font-sans text-gray-600">
                    We had one final meeting with the Warp founders to walk
                    through the high-fidelity prototypes and received positive
                    feedback overall. The key pieces of advice on the final
                    prototypes included:
                  </p>
                  <ol className="font-sans text-gray-600 space-y-4 mt-8">
                    {" "}
                    <li className="ml-8">
                      1. Cut down on the unnecessary whitespace within each
                      community widget to allow for more tools to be displayed
                      on one screen
                    </li>
                    <li className="ml-8">
                      2. Because the community tab is a secondary experience and
                      not the main focus of Warp, the profile page could be
                      moved into the community tab to streamline user flow
                    </li>
                  </ol>
                </div>
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
                  1. Having consistent use of whitespace is important in
                  maintaining a professional and cohesive design and can
                  increase the amount of information that can be conveyed at a
                  time
                </li>
                <li>
                  2. Community features hold different significance levels
                  within different types of websites/programs and should be
                  organized accordingly
                </li>
                <li>
                  3. Intentionally varying the designs in initial sketches is
                  critical for finding the optimal set of features and designs
                  to be included in initial wireframes/prototypes
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
