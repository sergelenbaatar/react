"use client"
import React from "react"

export default function About() {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-grow p-8 bg-gray-100'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-4xl font-bold mb-6'>About MyShop</h1>
					<p className='text-lg text-gray-700 mb-4'>
						Welcome to MyShop, your number one source for all things
						electronics. We`re dedicated to giving you the very best products,
						with a focus on quality, customer service, and uniqueness.
					</p>
					<p className='text-lg text-gray-700 mb-4'>
						Founded in 2025, MyShop has come a long way from its beginnings.
						When we first started out, our passion for providing the best
						equipment for our customers drove us to do tons of research so that
						MyShop can offer you the world`s most advanced electronics.
					</p>
					<p className='text-lg text-gray-700'>
						We hope you enjoy our products as much as we enjoy offering them to
						you. If you have any questions or comments, please don`t hesitate to
						contact us.
					</p>
				</div>
			</main>
		</div>
	)
}
