/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Adjust heading sizes
            h1: {
              fontSize: "2.5rem", // Adjust as needed
              color: "inherit",
            },
            h2: {
              fontSize: "2rem",
              color: "inherit",
            },
            h3: {
              fontSize: "1.5rem",
              color: "inherit",
            },
            // Adjust paragraph size
            p: {
              fontSize: "1.095rem",
              color: "inherit",
            },
						a: {
              color: '#1e90ff', // Blue color
              textDecoration: 'underline',
              cursor: 'pointer',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: '#ff4500', // Change color on hover
              },
						},
            // Customizing code blocks
            pre: {
              backgroundColor: "#161b22", // Dark background
              color: "#e2e8f0", // Light text color
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #30363d",
              overflowX: "auto",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            },

            // Inline code
            code: {
              backgroundColor: "#0d1117",
              color: "#e2b714",
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
              fontSize: "0.875rem",
            },

           
     
          },
        },
        // Optionally, create a custom variant if needed:
        sm: {
          css: {
            h1: {
              fontSize: "1.25rem",
							 color: "#f7f5f5",
            },
            h2: {
              fontSize: "1.125rem",
							color: "inherit",
            },
            h3: {
              fontSize: "1rem",
							color: "inherit",
            },
            p: {
              fontSize: "0.75rem",
            },
          },
        },
      },
      colors: {
        dark: "#171717", // Custom dark gray color
        lightgray: "#404040", // Custom medium gray color
       
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
