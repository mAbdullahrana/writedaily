function Footer() {
  return (
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
  )
}

export default Footer
