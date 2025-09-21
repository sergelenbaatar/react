"use client"
import { useCart } from "../context/CartContext"

export default function Cart() {
	const { cart, removeFromCart } = useCart()

	if (cart.length === 0) return <p>Cart is empty</p>

	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	)

	return (
		<div className='border border-blue-500 p-4 m-4'>
			<h2 className='text-xl font-bold mb-2'>Cart</h2>
			{cart.map((item) => (
				<div key={item.id} className='mb-2 flex justify-between items-center'>
					<p>
						{item.title} - ${item.price} x {item.quantity}
					</p>
					<button
						className='bg-red-500 text-white px-2 py-1 rounded'
						onClick={() => removeFromCart(item.id)}
					>
						Remove
					</button>
				</div>
			))}
			<hr className='my-2' />
			<p className='font-bold text-lg'>Total: ${totalPrice}</p>
		</div>
	)
}
