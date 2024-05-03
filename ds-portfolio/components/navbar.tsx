import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-around items-center space-x-40 sm:space-x-7 bg-white w-full fixed top-0 h-[12%] z-10">
      <Link
        href="./"
        className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/3"
      >
        <p className="text-black hover:text-red-800 hover:underline p-5">
          ALEXANDER ZHOU
        </p>
      </Link>
      <div className="flex">
        <Link
          href="./about"
          className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/3"
        >
          <p className="text-black hover:text-red-800 hover:underline p-5">
            ABOUT
          </p>
        </Link>

        <Link
          href="./work"
          className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/3"
        >
          <p className="text-black hover:text-red-800 hover:underline p-5">
            WORK
          </p>
        </Link>
        <Link
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-black hover:text-red-800 hover:underline p-5">
            RESUME
          </p>
        </Link>
      </div>
    </div>
  );
}
