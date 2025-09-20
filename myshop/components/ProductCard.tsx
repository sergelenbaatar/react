"use client"
import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useCart, Product } from "../context/CardContext"
import Link from "next/link"

type ProductProps = Product

const ProductCard: React.FC<ProductProps> = ({
	id,
	title,
	image,
	description,
	price,
}) => {
	const { addToCart } = useCart()

	return (
		<Card
			className='shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300'
			style={{ borderRadius: "12px" }}
		>
			<Card.Img
				variant='top'
				src={image}
				alt={title}
				style={{ objectFit: "contain", height: "200px", padding: "10px" }}
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
						onClick={() => addToCart({ id, title, image, description, price })}
					>
						Add to Cart
					</Button>
				</div>
			</Card.Body>
		</Card>
	)
}

export default ProductCard
