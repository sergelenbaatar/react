"use client"
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function Contact() {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-grow py-8 bg-gray-100'>
				<Container>
					<h1 className='text-4xl font-bold text-center my-[50px]'>
						Contact Us
					</h1>
					<Row>
						{/* Зүүн талын холбоо барих мэдээлэл */}
						<Col md={6} className='mb-4'>
							<h4 className='mb-3'>Get in Touch</h4>
							<p>
								Email: <a href='mailto:info@myshop.com'>info@myshop.com</a>
							</p>
							<p>Phone: +976 1234 5678</p>
							<p>Address: Ulaanbaatar, Mongolia</p>
							<p>
								We’d love to hear from you! Whether you have a question about
								products, pricing, or anything else, our team is ready to answer
								all your questions.
							</p>

							{/* Google Maps */}
							<div className='mt-4 rounded-lg overflow-hidden shadow-lg'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.31670207262454!2d106.92031746483823!3d47.91518536959225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693003e1dc3cb%3A0x9df3789a2ff10b12!2sNational%20Life%20Insurance%2C%20Minister%20office!5e0!3m2!1sen!2smn!4v1758351098905!5m2!1sen!2smn'
									height='250'
									width='100%'
									style={{ border: 0 }}
									allowFullScreen={true}
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
								></iframe>
							</div>
						</Col>

						<Col md={6}>
							<h4 className='mb-3'>Send Us a Message</h4>
							<Form>
								<Form.Group className='mb-3'>
									<Form.Label>Name</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter your name'
										required
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='email'
										placeholder='Enter your email'
										required
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Message</Form.Label>
									<Form.Control
										as='textarea'
										rows={4}
										placeholder='Write your message...'
										required
									/>
								</Form.Group>
								<Button type='submit' variant='primary'>
									Send
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</main>
		</div>
	)
}
