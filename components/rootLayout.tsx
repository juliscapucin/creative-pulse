"use client"

import { useThemeStorage } from "@/hooks"

export default function RootLayout(props: { children: React.ReactNode }) {
	// const { theme } = useThemeStorage()
	const theme = "dark"

	return (
		<html
			lang='en'
			data-theme={theme}
			className='relative w-screen h-screen custom-min-h-screen bg-primary text-secondary'
		>
			{props.children}
		</html>
	)
}
