"use client"
import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useCart } from "../context/CardContext"
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
	const { addToCart } = useCart() // CartContext-с Add to Cart авах

	const handleAddToCart = () => {
		addToCart({ id, title, price, quantity: 1 })
	}

	return (
		<Card
			className='shadow-lg h-full flex flex-col justify-between transition-transform transform hover:scale-105 duration-300'
			style={{ borderRadius: "12px" }}
		>
			<Card.Img
				variant='top'
				src={image}
				alt={title}
				style={{ objectFit: "contain", height: "200px", padding: "10px" }}
			/>
			<Card.Body className='flex flex-col justify-between'>
				<Card.Title className='text-lg font-semibold'>{title}</Card.Title>
				<Card.Text className='text-gray-600 text-sm mb-2'>
					{description}
				</Card.Text>
				<p className='text-xl font-bold text-green-600 mb-3'>${price}</p>
				<div className='flex gap-2'>
					{/* View Details товч */}
					<Link href={`/products/${id}`} className='flex-1'>
						<Button variant='dark' className='w-full'>
							View Details
						</Button>
					</Link>
					{/* Add to Cart товч */}
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
