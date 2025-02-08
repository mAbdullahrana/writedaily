export default function Tooltip({ children }) {
  return (
    <div className="px-3 py-2 bg-secondary text-white text-sm rounded-xl shadow-lg max-w-[20rem] absolute right-0 whitespace-nowrap overflow-hidden">
      {children}
    </div>
  );
}
