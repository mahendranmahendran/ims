// frontend/src/services/ApiService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const ApiService = {
	getProjects: () => axios.get(`${API_URL}/projects`),
	createProject: (project) => axios.post(`${API_URL}/projects`, project),
	getTasks: () => axios.get(`${API_URL}/tasks`),
	createTask: (task) => axios.post(`${API_URL}/tasks`, task),
	// Add other API methods as needed
};

export default ApiService;
