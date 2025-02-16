import Link from "next/link";

function Button({ as, to, children, onClick }) {
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
        <button
          onClick={onClick}
          className="bg-primaryButton text-white hover:bg-primaryButtonHover text-sm transition py-1 px-4 rounded-3xl flex gap-2 items-center justify-center"
        >
          {children}
        </button>
      );

      break;
    case "primaryLink":
      return (
        <Link
          href={to}
          className="bg-primaryButton text-white hover:bg-primaryButtonHover text-sm transition py-1 px-4 rounded-3xl flex gap-2 items-center justify-center"
        >
          {children}
        </Link>
      );

      break;
    default:
      break;
  }

  return (
    <button
      onClick={onClick}
      className="hover:text-primaryButton  transition py-1.5"
    >
      {children}
    </button>
  );
}

export default Button;
