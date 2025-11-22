

import React, { useState } from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
	const [email, setEmail] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		
		setEmail('')
	}

	return (
		<section className="newsletter">
			<h3 className="newsletter-title">Get notified with new projects, gear and stories.</h3>

			<form className="newsletter-form" onSubmit={handleSubmit}>
				<label htmlFor="nl-email" className="visually-hidden">Email address</label>
				<input
					id="nl-email"
					type="email"
					placeholder="Email Address"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="newsletter-input"
					required
				/>

				<button type="submit" className="newsletter-button">SUBSCRIBE</button>
			</form>
		</section>
	)
}