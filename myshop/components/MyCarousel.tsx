"use client"

import React from "react"
import Carousel from "react-bootstrap/Carousel"

const MyCarousel = () => {
	return (
		<Carousel variant='dark'>
			<Carousel.Item style={{ backgroundColor: "#000" }}>
				<img
					className='d-block mx-auto'
					src='/images/tv1.webp'
					alt='First slide'
					style={{ maxHeight: "500px", objectFit: "contain" }}
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item style={{ backgroundColor: "black" }}>
				<img
					className='d-block mx-auto'
					src='/images/tv2.jpg'
					alt='Second slide'
					style={{ maxHeight: "500px", objectFit: "contain" }}
				/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item style={{ backgroundColor: "black" }}>
				<img
					className='d-block mx-auto'
					src='/images/tv3.webp'
					alt='Third slide'
					style={{ maxHeight: "500px", objectFit: "contain" }}
				/>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default MyCarousel
