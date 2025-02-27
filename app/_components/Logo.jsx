import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="relative mt-2 mb-3 text-[1.6rem] sm:text-[1.8rem] font-bold text-transparent bg-gradient-to-r  from-primaryButton to-secondaryButton bg-clip-text transition-transform duration-300 ease-in-out hover:scale-105 italic flex gap-1 "
    >
      write
      <span className="text-secondaryButton drop-shadow-md not-italic">
        daily
      </span>
    </Link>
  );
}
