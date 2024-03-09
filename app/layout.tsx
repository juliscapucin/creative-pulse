import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { NavBar, RootLayout } from "@/components"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
})

export const metadata: Metadata = {
	title: "Creative Pulse",
	description:
		"Creative Pulse is a digital agency that specializes in web design, web development, and digital marketing.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<RootLayout>
			<body
				className={`${inter.className} relative w-screen h-screen custom-min-h-screen overflow-x-clip`}
			>
				<NavBar />
				<main>{children}</main>
			</body>
		</RootLayout>
	)
}
