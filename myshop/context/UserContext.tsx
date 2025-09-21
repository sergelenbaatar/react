"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"

type User = {
	name: string
	email: string
	password: string
}

type UserContextType = {
	user: User | null
	signUp: (name: string, email: string, password: string) => void
	login: (email: string, password: string) => void
	logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [users, setUsers] = useState<User[]>([]) // бүртгэгдсэн хэрэглэгчид
	const [user, setUser] = useState<User | null>(null) // идэвхтэй хэрэглэгч

	const signUp = (name: string, email: string, password: string) => {
		// Хэрэв email бүртгэлтэй бол алдаа
		const existing = users.find((u) => u.email === email)
		if (existing) {
			alert("This email is already registered!")
			return
		}

		const newUser: User = { name, email, password }
		setUsers((prev) => [...prev, newUser])
		setUser(newUser) // бүртгэсний дараа автоматаар login
	}

	const login = (email: string, password: string) => {
		const found = users.find(
			(u) => u.email === email && u.password === password
		)
		if (!found) {
			alert("No user found. Please sign up first or check your credentials.")
			return
		}
		setUser(found)
	}

	const logout = () => setUser(null)

	return (
		<UserContext.Provider value={{ user, signUp, login, logout }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => {
	const context = useContext(UserContext)
	if (!context) throw new Error("useUser must be used within a UserProvider")
	return context
}
