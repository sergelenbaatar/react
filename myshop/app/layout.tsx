import "./globals.css"
import type { Metadata } from "next"
import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "@/components/Header"
import { UserProvider } from "@/context/UserContext"
import { CartProvider } from "@/context/CardContext"
import Footer from "@/components/Footer"

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
			<body className='bg-gray-50'>
				<UserProvider>
					<CartProvider>
						<Header />
						{children}
						<Footer />
					</CartProvider>
				</UserProvider>
			</body>
		</html>
	)
}
