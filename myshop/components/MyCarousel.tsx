"use client"

import React from "react"
import Carousel from "react-bootstrap/Carousel"

const MyCarousel = () => {
	const slides = [
		{
			id: 1,
			src: "/images/tv1.webp",
			title: "First Slide Label",
			description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
		{
			id: 2,
			src: "/images/tv2.jpg",
			title: "Second Slide Label",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 3,
			src: "/images/tv3.webp",
			title: "Third Slide Label",
			description:
				"Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
		},
	]

	return (
		<Carousel variant='dark'>
			{slides.map((slide) => (
				<Carousel.Item key={slide.id} className='bg-black'>
					<div className='relative w-full h-full flex justify-center items-center overflow-hidden'>
						<img
							src={slide.src}
							alt={slide.title}
							className='w-full h-full object-contain'
						/>
					</div>
					<Carousel.Caption className='bg-black/50 rounded-md p-4'>
						<h3 className='text-xl md:text-2xl font-bold'>{slide.title}</h3>
						<p className='text-sm md:text-base'>{slide.description}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default MyCarousel
