// controllers/tasksController.js
const pool = require("../config/db");

const getTasks = async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM tasks");
		res.json(result.rows);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const createTask = async (req, res) => {
	const {
		title,
		description,
		project_id,
		assignee_id,
		status,
		priority,
		due_date,
	} = req.body;
	try {
		const result = await pool.query(
			"INSERT INTO tasks (title, description, project_id, assignee_id, status, priority, due_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
			[title, description, project_id, assignee_id, status, priority, due_date]
		);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getTasks,
	createTask,
};
