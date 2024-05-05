import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-around items-center space-x-40 sm:space-x-7 bg-white w-full fixed top-0 h-[12%] z-10 border border-black">
      <Link href="./" className="group">
        <p className="text-black p-5">ALEXANDER ZHOU</p>
      </Link>
      <div className="flex">
        <Link href="./#work" className="group smooth-scroll">
          <p
            className={
              router.pathname === "/"
                ? "text-black p-5"
                : "text-gray-400 hover:text-black p-5"
            }
          >
            WORK
          </p>
        </Link>
        <Link href="./about" className="group">
          <p
            className={
              router.pathname === "/about"
                ? "text-black p-5"
                : "text-gray-400 hover:text-black p-5"
            }
          >
            ABOUT
          </p>
        </Link>

        <Link
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-gray-400 hover:text-black p-5">RESUME</p>
        </Link>
      </div>
    </div>
  );
}
