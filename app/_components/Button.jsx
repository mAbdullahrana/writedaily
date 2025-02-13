import Link from "next/link";

function Button({ as, to, children }) {
  switch (as) {
    case "link":
      return (
        <Link href={to} className="hover:text-primaryButton  transition py-1.5">
          {children}
        </Link>
      );
      break;
    case "primary":
      return (
        <button className="bg-primaryButton text-white hover:bg-primaryButtonHover text-sm transition py-1 px-6 rounded-3xl">
          {children}
        </button>
      );

      break;
    default:
      break;
  }

  return (
    <button className="hover:text-primaryButton  transition py-1.5">
      {children}
    </button>
  );
}

export default Button;
