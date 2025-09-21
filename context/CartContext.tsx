"use client"
import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react"

export type CartItem = {
	id: number
	title: string
	price: number
	quantity: number
}

type CartContextType = {
	cart: CartItem[]
	addToCart: (item: CartItem) => void
	removeFromCart: (id: number) => void
	clearCart: () => void
	setCartFromStorage: (items: CartItem[]) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<CartItem[]>([])

	// Page load дээр localStorage-аас авах
	useEffect(() => {
		const saved = localStorage.getItem("cart")
		if (saved) setCart(JSON.parse(saved))
	}, [])

	// cart update болохоор localStorage-д хадгалах
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart))
	}, [cart])

	const addToCart = (item: CartItem) => {
		setCart((prev) => {
			const existing = prev.find((p) => p.id === item.id)
			if (existing) {
				return prev.map((p) =>
					p.id === item.id
						? { ...p, quantity: p.quantity + (item.quantity || 1) }
						: p
				)
			}
			return [...prev, { ...item, quantity: item.quantity || 1 }]
		})
	}

	const removeFromCart = (id: number) =>
		setCart((prev) => prev.filter((i) => i.id !== id))
	const clearCart = () => setCart([])

	const setCartFromStorage = (items: CartItem[]) => setCart(items)

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, clearCart, setCartFromStorage }}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) throw new Error("useCart must be used within CartProvider")
	return context
}
