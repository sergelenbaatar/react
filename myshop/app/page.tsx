"use client"
import React from "react"
import ProductCard from "../components/ProductCard"
import MyCarousel from "../components/MyCarousel"

const products = [
	{
		id: 1,
		title: "Old TV-1",
		image: "/images/tv1.webp",
		description: "",
		price: 1200,
	},
	{
		id: 2,
		title: "Old TV-2",
		image: "/images/tv2.webp",
		description: "",
		price: 1300,
	},
	{
		id: 2,
		title: "Old TV-2",
		image: "/images/tv2.webp",
		description: "",
		price: 1300,
	},
	{
		id: 2,
		title: "Old TV-2",
		image: "/images/tv2.webp",
		description: "",
		price: 1300,
	},
	{
		id: 2,
		title: "Old TV-2",
		image: "/images/tv2.webp",
		description: "",
		price: 1300,
	},
	{
		id: 2,
		title: "Old TV-2",
		image: "/images/tv2.webp",
		description: "",
		price: 1300,
	},
]

export default function Home() {
	return (
		<>
			<MyCarousel />
			<div className='grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6'>
				{products.map((p) => (
					<ProductCard key={p.id} {...p} />
				))}
			</div>
		</>
	)
}
