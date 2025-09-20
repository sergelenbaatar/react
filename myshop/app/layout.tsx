import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { UserProvider } from "../context/UserContext"
import { CartProvider } from "../context/CardContext"

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
