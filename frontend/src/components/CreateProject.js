// src/components/CreateProject.js
import React, { useState } from "react";
import ApiService from "../services/ApiService";

const CreateProject = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [ownerId, setOwnerId] = useState(""); // Assuming ownerId is selected from existing users

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await ApiService.post("/projects", {
				name,
				description,
				owner_id: ownerId, // Ensure ownerId corresponds to an existing user in your database
			});
			console.log("Project created:", response.data);
			// Optionally: Clear form fields or show success message
			setName("");
			setDescription("");
			setOwnerId("");
		} catch (error) {
			console.error("Error creating project:", error);
		}
	};

	return (
		<div className="create-project">
			<h2>Create Project</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<textarea
					placeholder="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
				/>
				<input
					type="text"
					placeholder="Owner ID"
					value={ownerId}
					onChange={(e) => setOwnerId(e.target.value)}
					required
				/>
				<button type="submit">Create Project</button>
			</form>
		</div>
	);
};

export default CreateProject;
