"use client"
import React from "react"
import Offcanvas from "react-bootstrap/Offcanvas"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import { useCart } from "../context/CartContext"

// Item-ийн type тодорхойлж байна
interface CartItem {
	id: number
	title: string
	price: number
	quantity: number
}

type Props = { show: boolean; onHide: () => void }

const CartSidebar: React.FC<Props> = ({ show, onHide }) => {
	const { cart, addToCart, removeFromCart, clearCart } = useCart()
	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

	const increaseQuantity = (item: CartItem) =>
		addToCart({ ...item, quantity: 1 })
	const decreaseQuantity = (item: CartItem) => {
		if (item.quantity > 1) addToCart({ ...item, quantity: -1 })
		else removeFromCart(item.id)
	}

	return (
		<Offcanvas show={show} onHide={onHide} placement='end'>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>🛒 Your Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				{cart.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					<>
						<ListGroup variant='flush'>
							{cart.map((item) => (
								<ListGroup.Item key={item.id}>
									<div className='d-flex justify-content-between align-items-center'>
										<div>
											<strong>{item.title}</strong>
											<br />${item.price} each
										</div>
										<div className='d-flex align-items-center gap-2'>
											<Button
												size='sm'
												variant='outline-secondary'
												onClick={() => decreaseQuantity(item)}
											>
												-
											</Button>
											<span>{item.quantity}</span>
											<Button
												size='sm'
												variant='outline-secondary'
												onClick={() => increaseQuantity(item)}
											>
												+
											</Button>
											<Button
												size='sm'
												variant='outline-danger'
												onClick={() => removeFromCart(item.id)}
											>
												×
											</Button>
										</div>
									</div>
									<div className='mt-1 text-end'>
										${item.price * item.quantity}
									</div>
								</ListGroup.Item>
							))}
						</ListGroup>

						<hr />
						<h5>Total: ${total}</h5>
						<Button variant='success' className='w-100 mt-2'>
							Checkout
						</Button>
						<Button
							variant='outline-secondary'
							className='w-100 mt-2'
							onClick={clearCart}
						>
							Clear Cart
						</Button>
					</>
				)}
			</Offcanvas.Body>
		</Offcanvas>
	)
}

export default CartSidebar
