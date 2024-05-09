import Image from "next/image";
import Navbar from "../components/navbar";

export default function About() {
  // useEffect(() => {
  //   const textContainer = document.getElementById("delay");
  //   const textContainer2 = document.getElementById("delay2");
  //   const textContainer3 = document.getElementById("delay3");

  //   if (textContainer && textContainer2 && textContainer3) {
  //     setTimeout(() => {
  //       textContainer.classList.remove("text-transparent");
  //       textContainer2.classList.remove("text-transparent");
  //       textContainer3.classList.remove("text-transparent");
  //     }, 600);
  //   }
  // }, []);
  return (
    <main className="flex min-h-screen flex-col p-10 m-0 bg-white">
      <div className="flex min-h-screen flex-col flex-wrap justify-center items-center mt-32 p-0">
        <Navbar></Navbar>
        <div className="flex md:flex-row flex-col items-center space-x-40">
          <div className="space-y-10">
            <h1
              // id="delay"
              className="fade-in font-medium text-left text-3xl max-w-xl font-heading"
            >
              ABOUT ME
            </h1>
            <h2
              // id="delay2"
              className="fade-in text-left text-xl max-w-xl"
            >
              Hi, I'm Alex! I grew up in St. Louis, MO surrounded by music and
              inspired by YouTube highlights showing NFL players as
              larger-than-life heroes.
            </h2>
          </div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/headshot.jpg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className="flex md:flex-row flex-col items-center space-x-40 space-y-10 mt-8">
          <h2
            // id="delay3"
            className="fade-in text-left text-xl max-w-xl"
          >
            At Brown, I am the current General Manager of The Brown Daily
            Herald, the largest and oldest student publication at Brown, where I
            oversee a $150k annual operating budget and direct all revenue
            generation as a non-profit, independent organization. I also love
            serving as a teaching assistant in the CS department, helping
            students ranging from intro data science to upper-level deep
            learning courses.
          </h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/bdh.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className="flex md:flex-row flex-col items-center space-x-40 space-y-10 mt-8">
          <h2
            // id="delay3"
            className="fade-in text-left text-xl max-w-xl"
          >
            This past summer, I was also a machine learning intern at UC San
            Diego's Armor Lab through the National Science Foundation. I was
            able to learn first-hand how modern deep learning networks are being
            applied to a variety of fields, including structural engineering and
            structural health monitoring.
          </h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/nsf.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className="flex md:flex-row flex-col items-center space-x-40 space-y-10 mb-8 mt-8">
          <h2 className="fade-in text-left text-xl max-w-xl">
            This, along with previously working with Rapsodo (a sports
            technology company) as a Data Analytics Intern on their Product
            Development Team, has strengthened my interest in diving deeper into
            the worlds of machine learning and data science, where data-driven
            insights directly drive real-world action. Some of my other
            interests include performing with a variety of ensembles as a
            classical percussionist and timpanist as well as following the New
            Orleans Saints football team.
          </h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/rapsodo2.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        {/* <Footer></Footer> */}
      </div>
    </main>
  );
}
