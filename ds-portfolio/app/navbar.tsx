import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between space-x-10 sm:space-x-7">
      <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
        <p>HOME</p>
      </a>

      <Link href="./about">
        <p>ABOUT</p>
      </Link>

      <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
        <p>WORK</p>
      </a>
      <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
        <p>CONTACT</p>
      </a>
      <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
        <p>RESUME</p>
      </a>
    </div>
  );
}
