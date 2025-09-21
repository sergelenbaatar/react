"use client"
import React, { useState } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import SignUpModal from "./SignUpModal"
import LoginModal from "./LoginModal"
import { useUser } from "../context/UserContext"
import { useCart } from "../context/CartContext"
import CartSidebar from "./CartSidebar"

const Header = () => {
	const { user, logout } = useUser()
	const { cart } = useCart()
	const [showCart, setShowCart] = useState(false)
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
				<Container>
					<Navbar.Brand
						href='/'
						className='text-white fw-bold text-2xl flex items-center gap-2'
					>
						🛡️MyShop
					</Navbar.Brand>

					<Navbar.Toggle aria-controls='main-navbar' />
					<Navbar.Collapse id='main-navbar'>
						<Nav className='ms-auto align-items-center'>
							<Nav.Link href='#products' className='text-white px-3'>
								Products
							</Nav.Link>
							<Nav.Link href='/about' className='text-white px-3'>
								About
							</Nav.Link>
							<Nav.Link href='/contact' className='text-white px-3'>
								Contact
							</Nav.Link>

							{/* Cart icon with badge */}
							<div
								className='position-relative px-3 my-2 my-lg-0 cursor-pointer'
								onClick={() => setShowCart(true)}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									fill='currentColor'
									className='bi bi-cart3 text-white'
									viewBox='0 0 16 16'
								>
									<path d='M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zM3.14 6l1.25 6.5H13l1.25-6.5H3.14z' />
								</svg>
								{cart.length > 0 && (
									<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
										{cart.length}
										<span className='visually-hidden'>items in cart</span>
									</span>
								)}
							</div>

							{user ? (
								<>
									<span className='text-white px-3 my-2 my-lg-0'>
										Welcome, {user.name}
									</span>
									<Button
										variant='outline-light'
										className='my-2 my-lg-0'
										onClick={logout}
									>
										Logout
									</Button>
								</>
							) : (
								<>
									<Button
										variant='success'
										className='ms-2 my-2 my-lg-0'
										onClick={() => setShowSignUp(true)}
									>
										Sign Up
									</Button>
									<Button
										variant='primary'
										className='ms-2 my-2 my-lg-0'
										onClick={() => setShowLogin(true)}
									>
										Login
									</Button>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* Modals */}
			<SignUpModal show={showSignUp} onHide={() => setShowSignUp(false)} />
			<LoginModal show={showLogin} onHide={() => setShowLogin(false)} />

			{/* Cart Sidebar */}
			<CartSidebar show={showCart} onHide={() => setShowCart(false)} />
		</>
	)
}

export default Header
