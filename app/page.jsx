import Link from "next/link";
import FAQ from "./_components/_landingPage/FAQ";
import Features from "./_components/_landingPage/Features";

export default function Landing() {
  return (
    <div className="dark bg-black w-full text-white min-h-screen">
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
        <div className="border mt-16 mx-auto max-w-6xl w-full overflow-hidden rounded-lg shadow-lg">
          <img
            src="ss.jpg"
            alt="Descriptive Alt Text"
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </header>

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <section className="bg-dark mt-10 py-16 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primaryButton to-secondaryButton bg-clip-text text-transparent p-2">
            Start Your Writing Journey Today
          </h2>
          <p className="text-mediumDark text-lg mb-8 max-w-xl mx-auto">
            Join thousands of writers building better habits. Completely free to
            get started.
          </p>
          <Link
            href="/login"
            className="bg-primaryButton hover:bg-primaryButtonHover text-white px-8 py-3 rounded-lg text-lg transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="border-t border-lightgray bg-dark py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-mediumDark">
          <p className="text-center md:text-left ">
            © 2025 All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/muhammad-abdullah-9672bb247/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mediumDark hover:text-white transition-colors"
            >
              <p className="bg-gradient-to-r from-primaryButton to-secondaryButton bg-clip-text text-transparent  hover:text-white">
                Created by <span className="underline">Abdullah</span>
              </p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
