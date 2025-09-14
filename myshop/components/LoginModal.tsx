"use client"
import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { useUser } from "../context/UserContext"

type Props = {
	show: boolean
	onHide: () => void
}

const LoginModal: React.FC<Props> = ({ show, onHide }) => {
	const { login } = useUser()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		login(email, password)
		onHide()
	}

	return (
		<Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
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
					<Button type='submit' variant='primary'>
						Login
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	)
}

export default LoginModal
