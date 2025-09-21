"use client"
import React from "react"
import MyCarousel from "@/components/MyCarousel"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"
import { Container } from "react-bootstrap"

export default function Home() {
	return (
		<>
			<MyCarousel />

			<Container>
				<div className='p-6 my-4 grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !gap-[20px]'>
					{products.map((p) => (
						<div key={p.id} className='flex flex-col'>
							<ProductCard {...p} />
						</div>
					))}
				</div>
			</Container>
		</>
	)
}
