import Link from "next/link"
import { ArcadeEmbed } from "./ArcadeEmbed"

function Hero() {
  return (
    <header className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl sm:text-5xl font-bold p-2 mb-6 bg-gradient-to-r from-primaryButton to-secondaryButton bg-clip-text text-transparent">
      Write Freely, Write Daily
    </h1>
    <p className="text-mediumDark text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
      Step into an easygoing, AI-powered writing environment—completely
      free. Set your goals, keep an eye on your progress, and turn writing
      into a fun, everyday habit.
    </p>
    <Link
      href="/login"
      className="bg-primaryButton hover:bg-primaryButtonHover text-white px-8 py-3 rounded-lg text-lg transition-colors inline-block"
    >
      Start Writing Now - It's Free
    </Link>

    {/* Hero Preview */}
    {/* <div className="border mt-16 mx-auto max-w-6xl w-full overflow-hidden rounded-lg shadow-lg">
      <ArcadeEmbed />
    </div> */}
    <div className="border mt-16 mx-auto max-w-6xl w-full overflow-hidden rounded-lg shadow-lg border-gray-300">
      <img
        src="sss.webp"
        alt="Descriptive Alt Text"
        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </header>
  )
}

export default Hero
