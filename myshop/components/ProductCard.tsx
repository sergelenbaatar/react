"use client"
import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useCart, CartItem } from "../context/CartContext"
import Link from "next/link"

type ProductProps = {
	id: number
	title: string
	image: string
	description: string
	price: number
}

const ProductCard: React.FC<ProductProps> = ({
	id,
	title,
	image,
	description,
	price,
}) => {
	const { addToCart } = useCart()

	const handleAddToCart = () => {
		const item: CartItem = { id, title, price, quantity: 1 }
		addToCart({ id, title, price, quantity: 1 })
	}

	return (
		<Card
			className='shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300'
			style={{ borderRadius: "12px" }}
		>
			<Card.Img
				variant='top'
				src={image}
				alt={title}
				style={{ objectFit: "contain", height: "300px", padding: "10px" }}
			/>
			<Card.Body className='flex flex-col justify-between'>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<p className='text-green-600 font-bold text-xl mb-3'>${price}</p>
				<div className='flex gap-2'>
					<Link href={`/products/${id}`} className='flex-1'>
						<Button variant='dark' className='w-full'>
							View Details
						</Button>
					</Link>
					<Button
						variant='success'
						className='flex-1'
						onClick={handleAddToCart}
					>
						Add to Cart
					</Button>
				</div>
			</Card.Body>
		</Card>
	)
}

export default ProductCard
