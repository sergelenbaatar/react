"use client"
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => {
	return (
		<footer className='bg-dark text-white pt-5 pb-3 mt-8 mt-100px'>
			<Container>
				<Row className='mb-3'>
					<Col md={4}>
						<h5>MyShop</h5>
						<p>Premium electronics and gadgets.</p>
					</Col>
					<Col md={4}>
						<h5>Quick Links</h5>
						<ul className='list-unstyled'>
							<li>
								<a href='#products' className='text-white text-decoration-none'>
									Products
								</a>
							</li>
							<li>
								<a href='#about' className='text-white text-decoration-none'>
									About
								</a>
							</li>
							<li>
								<a href='#contact' className='text-white text-decoration-none'>
									Contact
								</a>
							</li>
						</ul>
					</Col>
					<Col md={4}>
						<h5>Contact</h5>
						<p>Email: info@myshop.com</p>
						<p>Phone: +976 1234 5678</p>
					</Col>
				</Row>
				<hr className='border-secondary' />
				<p className='text-center mb-0'>
					&copy; 2025 MyShop. All rights reserved.
				</p>
			</Container>
		</footer>
	)
}

export default Footer
