// controllers/projectsController.js
const pool = require("../config/db");

const getProjects = async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM projects");
		res.json(result.rows);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const createProject = async (req, res) => {
	const { name, description, owner_id } = req.body;
	try {
		const result = await pool.query(
			"INSERT INTO projects (name, description, owner_id) VALUES ($1, $2, $3) RETURNING *",
			[name, description, owner_id]
		);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getProjects,
	createProject,
};
