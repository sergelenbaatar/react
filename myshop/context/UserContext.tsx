"use client"
import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react"

type User = {
	name: string
	password: string
}

type UserContextType = {
	user: User | null
	signup: (name: string, password: string) => boolean
	login: (name: string, password: string) => boolean
	logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		const savedUser = localStorage.getItem("current_user")
		if (savedUser) setUser(JSON.parse(savedUser))
	}, [])

	const signup = (name: string, password: string) => {
		const users = JSON.parse(localStorage.getItem("users") || "[]")
		const exist = users.find((u: User) => u.name === name)
		if (exist) return false // already exists

		const newUser = { name, password }
		users.push(newUser)
		localStorage.setItem("users", JSON.stringify(users))
		localStorage.setItem("current_user", JSON.stringify(newUser))
		setUser(newUser)
		return true
	}

	const login = (name: string, password: string) => {
		const users = JSON.parse(localStorage.getItem("users") || "[]")
		const exist = users.find(
			(u: User) => u.name === name && u.password === password
		)
		if (!exist) return false
		localStorage.setItem("current_user", JSON.stringify(exist))
		setUser(exist)
		return true
	}

	const logout = () => {
		localStorage.removeItem("current_user")
		setUser(null)
	}

	return (
		<UserContext.Provider value={{ user, signup, login, logout }}>
			{children}
		</UserContext.Provider>
	)
}

export function useUser() {
	const context = useContext(UserContext)
	if (!context) throw new Error("useUser must be used within UserProvider")
	return context
}
