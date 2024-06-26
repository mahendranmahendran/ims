// src/components/Projects.js
import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetchProjects();
	}, []);

	const fetchProjects = async () => {
		try {
			const response = await ApiService.get("/projects");
			setProjects(response.data);
		} catch (error) {
			console.error("Error fetching projects:", error);
		}
	};

	return (
		<div>
			<h2>Projects</h2>
			{projects.map((project) => (
				<div key={project.id} className="project">
					<h3>{project.name}</h3>
					<p>{project.description}</p>
				</div>
			))}
		</div>
	);
};

export default Projects;
