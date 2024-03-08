import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			colorBlack: "rgb(var(--color-black) / <alpha-value>)",
			colorWhite: "rgb(var(--color-white) / <alpha-value>)",
			primary: "rgb(var(--color-primary) / <alpha-value>)",
			secondary: "rgb(var(--color-secondary) / <alpha-value>)",
			colorFaded: "rgba(var(--color-secondary-rgb), 0.3)",
		},
		fontSize: {
			displayLarge: "147px",
			displayMedium: "103px",
			displaySmall: "72px",
			headlineLarge: "32px",
			headlineMedium: "28px",
			headlineSmall: "25px",
			titleLarge: "22px",
			titleMedium: "20px",
			titleSmall: "18px",
			bodyLarge: "18px",
			bodyMedium: "16px",
			bodySmall: "14px",
			labelLarge: "14px",
			labelMedium: "12px",
			labelSmall: "10px",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
}
export default config
