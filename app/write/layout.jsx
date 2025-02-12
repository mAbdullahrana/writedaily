// app/write/layout.js
export default function Layout({ children }) {
  return (
    <div className="bg-dark max-w-full">
      <main>{children}</main>
    </div>
  );
}


