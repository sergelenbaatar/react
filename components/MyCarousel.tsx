"use client"

import React from "react"
import Carousel from "react-bootstrap/Carousel"

const MyCarousel = () => {
	const slides = [
		{
			id: 1,
			src: "/images/lebron.avif",
			title: "First Slide Label",
			description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
		{
			id: 2,
			src: "/images/jr.avif",
			title: "Second Slide Label",
			description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
		{
			id: 3,
			src: "/images/run.avif",
			title: "Third Slide Label",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 4,
			src: "/images/all.avif",
			title: "Fourth Slide Label",
			description:
				"Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
		},
	]

	return (
		<Carousel variant='dark'>
			{slides.map((slide, index) => (
				<Carousel.Item key={slide.id} className='bg-dark'>
					<div className='relative w-full h-[600px] flex justify-center items-center overflow-hidden'>
						<img
							src={slide.src}
							alt={slide.title}
							className='w-full h-full object-cover'
						/>

						{/* Slide дугаар */}
						<span className='absolute top-4 right-4 text-white font-bold text-xl md:text-2xl shadow-lg bg-black/40 rounded-full px-3 py-1'>
							{index + 1} / {slides.length}
						</span>
					</div>

					<Carousel.Caption className='bg-black/50 rounded-md p-4'>
						<h3 className='text-xl md:text-2xl font-bold text-white'>
							{slide.title}
						</h3>
						<p className='text-sm md:text-base text-white'>
							{slide.description}
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default MyCarousel
