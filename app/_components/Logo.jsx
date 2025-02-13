import Link from "next/link";
function Logo() {
  return (
    <Link href="/" className=" font-semibold mb-4">
      <img className="h-11" src="writemore-script-logo-dark.png" />
    </Link>
  );
}

export default Logo;
