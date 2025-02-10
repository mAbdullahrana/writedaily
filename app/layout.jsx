import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='bg-dark max-w-full mx-auto'
      >
        {children}
      </body>
    </html>
  );
}
