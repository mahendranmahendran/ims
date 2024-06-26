// src/components/Tasks.js
import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";

const Tasks = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = async () => {
		try {
			const response = await ApiService.get("/tasks");
			setTasks(response.data);
		} catch (error) {
			console.error("Error fetching tasks:", error);
		}
	};

	return (
		<div>
			<h2>Tasks</h2>
			{tasks.map((task) => (
				<div key={task.id} className="task">
					<h3>{task.title}</h3>
					<p>{task.description}</p>
					<p>Status: {task.status}</p>
					<p>Priority: {task.priority}</p>
				</div>
			))}
		</div>
	);
};

export default Tasks;
