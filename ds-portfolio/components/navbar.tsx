import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between space-x-10 sm:space-x-7">
      <Link href="./">
        <p>HOME</p>
      </Link>

      <Link href="./about">
        <p>ABOUT</p>
      </Link>

      <Link href="./work">
        <p>WORK</p>
      </Link>
      <Link href="./contact">
        <p>CONTACT</p>
      </Link>
      <Link href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
        <p>RESUME</p>
      </Link>
    </div>
  );
}
