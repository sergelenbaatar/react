"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"

type User = {
	name: string
	email: string
}

type UserContextType = {
	user: User | null
	signup: (name: string, email: string, password: string) => void
	login: (email: string, password: string) => void
	logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)

	const signup = (name: string, email: string, password: string) => {
		// Тестийн хувьд шууд хэрэглэгчийг хадгалах
		setUser({ name, email })
	}

	const login = (email: string, password: string) => {
		// Тестийн хувьд шууд хэрэглэгчийг хадгалах
		setUser({ name: "Demo User", email })
	}

	const logout = () => {
		setUser(null)
	}

	return (
		<UserContext.Provider value={{ user, signup, login, logout }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => {
	const context = useContext(UserContext)
	if (!context) throw new Error("useUser must be used within UserProvider")
	return context
}
