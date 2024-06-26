// src/components/CreateUser.js
import React, { useState } from "react";
import ApiService from "../services/ApiService";

const CreateUser = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await ApiService.post("/users", {
				username,
				email,
				password_hash: password, // Note: In a real app, you should hash the password properly on the server side.
				role,
			});
			console.log("User created:", response.data);
			// Optionally: Clear form fields or show success message
			setUsername("");
			setEmail("");
			setPassword("");
			setRole("");
		} catch (error) {
			console.error("Error creating user:", error);
		}
	};

	return (
		<div className="create-user">
			<h2>Create User</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<input
					type="text"
					placeholder="Role"
					value={role}
					onChange={(e) => setRole(e.target.value)}
					required
				/>
				<button type="submit">Create User</button>
			</form>
		</div>
	);
};

export default CreateUser;
