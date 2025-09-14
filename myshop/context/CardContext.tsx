"use client"
import React, { createContext, useContext, ReactNode, useState } from "react"

type CartItem = {
	id: number
	title: string
	price: number
	quantity: number
}

type CartContextType = {
	cart: CartItem[]
	addToCart: (item: Omit<CartItem, "quantity">) => void
	removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<CartItem[]>([])

	const addToCart = (item: Omit<CartItem, "quantity">) => {
		setCart((prev) => {
			const existing = prev.find((i) => i.id === item.id)
			if (existing) {
				return prev.map((i) =>
					i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
				)
			}
			return [...prev, { ...item, quantity: 1 }]
		})
	}

	const removeFromCart = (id: number) => {
		setCart((prev) => prev.filter((i) => i.id !== id))
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) throw new Error("useCart must be used within CartProvider")
	return context
}
