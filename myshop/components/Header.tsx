"use client"
import React, { useState } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import SignUpModal from "./SignUpModal"
import LoginModal from "./LoginModal"
import { useUser } from "../context/UserContext"

const Header = () => {
	const { user, logout } = useUser()
	const [showSignUp, setShowSignUp] = useState(false)
	const [showLogin, setShowLogin] = useState(false)

	return (
		<>
			<Navbar
				bg='dark'
				variant='dark'
				expand='lg'
				className='sticky-top shadow-lg py-3'
			>
				<Container className='d-flex justify-content-between align-items-center'>
					<Navbar.Brand href='/' className='text-white fw-bold text-2xl'>
						MyShop
					</Navbar.Brand>
					<Nav>
						<Nav.Link href='#products' className='text-white px-3'>
							Products
						</Nav.Link>
						<Nav.Link href='/about' className='text-white px-3'>
							About
						</Nav.Link>
						<Nav.Link href='#contact' className='text-white px-3'>
							Contact
						</Nav.Link>

						{user ? (
							<>
								<span className='text-white px-3'>Welcome, {user.name}</span>
								<Button variant='outline-light' onClick={logout}>
									Logout
								</Button>
							</>
						) : (
							<>
								<Button
									variant='success'
									className='ms-2'
									onClick={() => setShowSignUp(true)}
								>
									Sign Up
								</Button>
								<Button
									variant='primary'
									className='ms-2'
									onClick={() => setShowLogin(true)}
								>
									Login
								</Button>
							</>
						)}
					</Nav>
				</Container>
			</Navbar>

			{/* Modals */}
			<SignUpModal show={showSignUp} onHide={() => setShowSignUp(false)} />
			<LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
		</>
	)
}

export default Header
