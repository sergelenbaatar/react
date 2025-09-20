"use client"
import React, { createContext, useContext, useState } from "react"

export type Product = {
	id: number
	title: string
	image: string
	description: string
	price: number
}

export type CartItem = Product & { quantity: number }

type CartContextType = {
	cart: CartItem[]
	addToCart: (product: Product) => void
	removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cart, setCart] = useState<CartItem[]>([])

	const addToCart = (product: Product) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id)
			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			}
			return [...prev, { ...product, quantity: 1 }]
		})
	}

	const removeFromCart = (id: number) => {
		setCart((prev) => prev.filter((item) => item.id !== id))
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	const context = useContext(CartContext)
	if (!context) throw new Error("useCart must be used within CartProvider")
	return context
}
