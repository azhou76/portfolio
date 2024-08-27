import Image from "next/image";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col p-10 m-0 bg-white">
      <div className="flex min-h-screen flex-col flex-wrap justify-center items-center mt-32 p-0">
        <Navbar></Navbar>
        <div className="flex md:flex-row flex-col items-center space-x-40 mb-8">
          <div className="space-y-10">
            <h1 className="fade-in font-medium text-left text-3xl max-w-xl font-heading">
              ABOUT ME
            </h1>
            <h2 className="fade-in text-left text-xl max-w-xl">
              Hi, I&apos;m Alex! I grew up in St. Louis, MO surrounded by music
              and inspired by YouTube highlights showing NFL players as
              larger-than-life heroes (my favorite team is the New Orleans
              Saints!).
            </h2>
          </div>
          <Image
            className="relative"
            src="/headshot.jpg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className="flex flex-col items-center space-x-30 space-y-10 mt-8 mb-8">
          <h2 className="fade-in text-left text-xl max-w-xl">Fun Facts!</h2>
          <ol className="space-y-8 mt-8">
            {" "}
            <li className="fade-in text-left text-xl max-w-l">
              1. I am a classical percussionist (see a{" "}
              <a
                href="https://www.youtube.com/embed/Lq25_zEPEH0"
                className="text-blue-800 underline"
              >
                video
              </a>{" "}
              of me playing the timpani here!)
            </li>
            <li className="fade-in text-left text-xl max-w-l">
              2. I was the captain of my high school football team and played
              offensive line (
              <a
                href="https://www.hudl.com/embed/video/3/8108089/5eef0cf0c124490c30b3bb0e"
                className="text-blue-800 underline"
              >
                exhibit A
              </a>
              )
            </li>
            <li className="fade-in text-left text-xl max-w-l">
              3. I lost 95 pounds after I stopped playing football!
            </li>
            <li className="fade-in text-left text-xl max-w-l">
              4. My favorite board games are Catan, Avalon, and Ticket to Ride
              :0
            </li>
          </ol>{" "}
        </div>
        <div className="flex flex-col items-center space-x-30 space-y-10 mt-8 mb-8">
          <h2 className="fade-in text-left text-xl max-w-2xl">
            My previous internships at NIKE, the National Science Foundation,
            and Rapsodo along with my coursework have inspired me to find a
            career where I can leverage the potential of technology to drive
            impact. I am someone who loves discovering the insights hidden
            within numbers and wants to build technologies capable of
            communicating them to people of all backgrounds.
          </h2>
          <div className="flex md:flex-row md:space-x-4 flex-col space-y-4">
            <Image
              className="md:pt-6"
              src="/nikelogo.png"
              alt="CBS Sports App page"
              width={260}
              height={100}
              priority
            />
            <Image
              className="md:pt-2"
              src="/nsf.png"
              alt="Gmail page"
              width={160}
              height={100}
              priority
            />
            <Image
              className="md:pt-2"
              src="/rapsodo2.png"
              alt="Spotify page"
              width={400}
              height={200}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-center space-x-40 space-y-10 mt-8 mb-8">
          <h2 className="fade-in text-left text-xl max-w-xl">
            Finally, at Brown, I love:
          </h2>
          <ol className="space-y-8 mt-8">
            {" "}
            <li className="fade-in text-left text-xl max-w-l">
              1. Engaging with local businesses as the General Manager of{" "}
              <a
                href="https://www.browndailyherald.com/"
                className="text-blue-800 underline"
              >
                The Brown Daily Herald
              </a>
              , Brown&apos;s largest and oldest student publication, where I
              oversee our $130k annual operating budget as a non-profit
              organization
            </li>
            <li className="fade-in text-left text-xl max-w-l">
              2. Helping to put on the annual TEDxBrownU event for the
              Providence community as the Tech Lead (checkout the{" "}
              <a
                href="https://tedxbrownu.com"
                className="text-blue-800 underline"
              >
                website
              </a>{" "}
              we created from scratch last year!)
            </li>
            <li className="fade-in text-left text-xl max-w-l">
              3. Serving as a teaching assistant in the CS department for both
              the intro data science and higher-level deep learning courses (
              <a
                href="https://tinyurl.com/25hrse2r"
                className="text-blue-800 underline"
              >
                see my group&apos;s poster
              </a>{" "}
              from when I took Deep Learning!)
            </li>
          </ol>{" "}
        </div>
      </div>
    </main>
  );
}
