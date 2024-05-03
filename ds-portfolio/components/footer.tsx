import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between space-x-10 sm:space-x-7 fixed bottom-7">
      <Link
        href="./"
        className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/3"
      >
        <p className="text-black hover:text-red-800 hover:underline p-5">
          LINKEDIN
        </p>
      </Link>

      <Link
        href="./about"
        className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/3"
      >
        <p className="text-black hover:text-red-800 hover:underline p-5">
          GITHUB
        </p>
      </Link>

      <Link
        href="./work"
        className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/3"
      >
        <p className="text-black hover:text-red-800 hover:underline p-5">
          EMAIL
        </p>
      </Link>
    </div>
  );
}
