"use client"
import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useUser } from "../context/UserContext"

type Props = { show: boolean; onHide: () => void }

const SignUpModal = ({ show, onHide }: Props) => {
	const { signUp } = useUser()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (password !== confirmPassword) {
			alert("Passwords do not match!")
			return
		}
		signUp(name, email, password)
		onHide()
	}

	return (
		<Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Sign Up</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type='password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</Form.Group>

					<Button type='submit' variant='success' className='w-full'>
						Sign Up
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	)
}

export default SignUpModal
