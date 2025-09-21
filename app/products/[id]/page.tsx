"use client"
import React from "react"
import Link from "next/link"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { notFound } from "next/navigation"
import { products } from "../../../data/products"

type Props = { params: { id: string } }

export default function ProductPage({ params }: Props) {
	const product = products.find((p) => p.id === parseInt(params.id))
	if (!product) return notFound()

	return (
		<div className='p-6 max-w-4xl mx-auto'>
			<Link
				href='/'
				className='mb-4 inline-block text-blue-600 hover:underline'
			>
				&larr; Back to Home
			</Link>

			<Card className='shadow-lg rounded-lg overflow-hidden'>
				<Card.Img
					variant='top'
					src={product.image}
					alt={product.title}
					style={{ objectFit: "contain", maxHeight: "400px", padding: "10px" }}
				/>
				<Card.Body>
					<Card.Title className='text-3xl font-bold mb-3'>
						{product.title}
					</Card.Title>
					<Card.Text className='text-gray-700 mb-3'>
						{product.description}
					</Card.Text>
					<p className='text-2xl font-bold text-green-600 mb-4'>
						${product.price}
					</p>
					<Button variant='dark' className='w-full'>
						Add to Cart
					</Button>
				</Card.Body>
			</Card>
		</div>
	)
}
