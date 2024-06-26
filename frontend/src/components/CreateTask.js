// frontend/src/components/CreateTask.js
import React, { useState } from "react";
import ApiService from "../services/ApiService";

const CreateTask = () => {
	const [task, setTask] = useState({
		title: "",
		description: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTask((prevTask) => ({
			...prevTask,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		ApiService.createTask(task)
			.then((response) => {
				console.log("Task created:", response.data);
				// handle success
			})
			.catch((error) => {
				console.error("There was an error creating the task!", error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					value={task.title}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					name="description"
					value={task.description}
					onChange={handleChange}
					required
				></textarea>
			</div>
			<button type="submit">Create Task</button>
		</form>
	);
};

export default CreateTask;
