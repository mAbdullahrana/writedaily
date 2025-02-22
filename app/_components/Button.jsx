import Link from "next/link";

function Button({ as, to, children, onClick, ...otherProps }) {
  switch (as) {
    case "link":
      return (
        <Link
          href={to}
          {...otherProps}
          className="hover:text-primaryButton  transition py-1.5"
        >
          {children}
        </Link>
      );
      break;
    case "primary":
      return (
        <button
          onClick={onClick}
          {...otherProps}
          className="bg-primaryButton text-white hover:bg-primaryButtonHover text-[0.9rem] transition py-1 px-4 rounded-3xl flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
        >
          {children}
        </button>
      );

      break;
    case "secondary":
      return (
        <button
          onClick={onClick}
          {...otherProps}
          className="bg-lightgray text-primaryButton border-primaryButton border-[1px] hover:bg-dark text-[0.9rem] transition py-1 px-4 rounded-3xl flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
        >
          {children}
        </button>
      );
      break;
    case "danger":
      return (
        <button
          onClick={onClick}
          {...otherProps}
          className=" bg-red-800 text-white border-mediumDark border-[1px] hover:bg-red-900 text-[1rem] transition py-2 px-4 rounded-lg flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
        >
          {children}
        </button>
      );

      break;
    case "primaryLink":
      return (
        <Link
          href={to}
          {...otherProps}
          className="bg-primaryButton text-white hover:bg-primaryButtonHover text-[0.9rem] transition py-1 px-4 rounded-3xl flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
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
      {...otherProps}
      className="hover:text-primaryButton disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300  text-[0.9rem] transition py-1.5"
    >
      {children}
    </button>
  );
}

export default Button;
