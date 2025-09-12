import "./globals.css"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "MyShop",
	description: "Demo shop with carousel and products",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='bg-gray-50'>{children}</body>
		</html>
	)
}
