import Link from "next/link"

function CTA() {
  return (
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
  )
}

export default CTA
