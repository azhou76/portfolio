import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-row justify-around items-center space-x-40 sm:space-x-7 bg-white w-full fixed top-0 h-[12%] z-10 border border-black">
      <Link href="./" className="group">
        <p className="text-black p-5">ALEXANDER ZHOU</p>
      </Link>
      <div className="hidden md:block">
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
            href="https://drive.google.com/file/d/11HVS09MknQ4L8cIRE819sWs1rKlbI17F/view?usp=sharing"
            className="group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-gray-400 hover:text-black p-5">RESUME</p>
          </Link>
        </div>
      </div>
      <div className="block md:hidden">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-center w-8 h-8"
        >
          <span className="block w-2 h-2 bg-gray-600 rounded-full"></span>
          <span className="block w-2 h-2 bg-gray-600 rounded-full ml-1"></span>
          <span className="block w-2 h-2 bg-gray-600 rounded-full ml-1"></span>
        </button>
        {isDropdownOpen && (
          <div className="absolute top-16 right-0 bg-white border w-48 py-2">
            <ul>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
                <Link
                  href="https://drive.google.com/file/d/11HVS09MknQ4L8cIRE819sWs1rKlbI17F/view?usp=sharing"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-gray-400 hover:text-black p-5">RESUME</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
