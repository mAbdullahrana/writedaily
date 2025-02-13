// /** @type {import('tailwindcss').Config} */
// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       typography: {
//         DEFAULT: {
//           css: {
//             ol: {
//               color: "inherit", // Apply color to list items
//             },

//             // Adjust heading sizes
//             h1: {
//               fontSize: "2.5rem", // Adjust as needed
//               color: "inherit",
//             },
//             h2: {
//               fontSize: "2rem",
//               color: "inherit",
//             },
//             h3: {
//               fontSize: "1.5rem",
//               color: "inherit",
//             },
//             // Adjust paragraph size
//             p: {
//               fontSize: "1.095rem",
//               color: "inherit",
//             },
//             a: {
//               color: "#1e90ff", // Blue color
//               textDecoration: "underline",
//               cursor: "pointer",
//               transition: "color 0.2s ease-in-out",
//               "&:hover": {
//                 color: "#ff4500", // Change color on hover
//               },
//             },

//             blockquote: {
//               color: "inherit",
//             },
//             strong: {
//               color: "inherit",
//             },
//             ol: {
//               color: "inherit",
//             },
//             ul: {
//               color: "inherit",
//             },

//             // Customizing code blocks
//             pre: {
//               backgroundColor: "#161b22", // Dark background
//               color: "#e2e8f0", // Light text color
//               padding: "1rem",
//               borderRadius: "0.5rem",
//               border: "1px solid #30363d",
//               overflowX: "auto",
//               fontSize: "0.875rem",
//               lineHeight: "1.5",
//             },

//             // Inline code
//             code: {
//               backgroundColor: "#0d1117",
//               color: "#e2b714",
//               padding: "0.2rem 0.4rem",
//               borderRadius: "0.25rem",
//               fontSize: "0.875rem",
//             },
//           },
//         },
//         // Optionally, create a custom variant if needed:
//         sm: {
//           css: {
//             h1: {
//               fontSize: "1.25rem",
//               color: "#f7f5f5",
//             },
//             h2: {
//               fontSize: "1.125rem",
//               color: "inherit",
//             },
//             h3: {
//               fontSize: "1rem",
//               color: "inherit",
//             },
//             p: {
//               fontSize: "0.75rem",
//             },
//           },
//         },
//       },
//       colors: {
//         dark: "#171717",
//         lightgray: "#404040",
//         secondary: "#252525",
//         tertiary: "#fef7ed",
//         white: "#f8f9fa",
//         mediumDark: "#a1a1a1",
//         primaryButton: "#FF6B35",
//         primaryButtonHover: "#E65A2B",
//         secondaryButton: "#2EC4B6",
//         secondaryButtonHover: "#26A89C",
//         accentButton: "#FFD166",
//         accentButtonHover: "#E6B95C",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
// };









































/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/ui/**/*.{js,ts,jsx,tsx,mdx}", // include shadcn components if placed here
  ],
  theme: {
  	extend: {
  		typography: {
  			DEFAULT: {
  				css: {
  					ol: {
  						color: 'inherit'
  					},
  					h1: {
  						fontSize: '2.5rem',
  						color: 'inherit'
  					},
  					h2: {
  						fontSize: '2rem',
  						color: 'inherit'
  					},
  					h3: {
  						fontSize: '1.5rem',
  						color: 'inherit'
  					},
  					p: {
  						fontSize: '1.095rem',
  						color: 'inherit'
  					},
  					a: {
  						color: '#1e90ff',
  						textDecoration: 'underline',
  						cursor: 'pointer',
  						transition: 'color 0.2s ease-in-out',
  						'&:hover': {
  							color: '#ff4500'
  						}
  					},
  					blockquote: {
  						color: 'inherit'
  					},
  					strong: {
  						color: 'inherit'
  					},
  					ul: {
  						color: 'inherit'
  					},
  					pre: {
  						backgroundColor: '#161b22',
  						color: '#e2e8f0',
  						padding: '1rem',
  						borderRadius: '0.5rem',
  						border: '1px solid #30363d',
  						overflowX: 'auto',
  						fontSize: '0.875rem',
  						lineHeight: '1.5'
  					},
  					code: {
  						backgroundColor: '#0d1117',
  						color: '#e2b714',
  						padding: '0.2rem 0.4rem',
  						borderRadius: '0.25rem',
  						fontSize: '0.875rem'
  					}
  				}
  			},
  			sm: {
  				css: {
  					h1: {
  						fontSize: '1.25rem',
  						color: '#f7f5f5'
  					},
  					h2: {
  						fontSize: '1.125rem',
  						color: 'inherit'
  					},
  					h3: {
  						fontSize: '1rem',
  						color: 'inherit'
  					},
  					p: {
  						fontSize: '0.75rem'
  					}
  				}
  			}
  		},
  		colors: {
  			dark: '#171717',
  			lightgray: '#404040',
  			secondary: "#252525",
  			tertiary: '#fef7ed',
  			white: '#f8f9fa',
  			mediumDark: '#a1a1a1',
  			primaryButton: '#FF6B35',
  			primaryButtonHover: '#E65A2B',
  			secondaryButton: '#2EC4B6',
  			secondaryButtonHover: '#26A89C',
  			accentButton: '#FFD166',
  			accentButtonHover: '#E6B95C',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
