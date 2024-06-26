// controllers/usersController.js
const pool = require("../config/db");

const getUsers = async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM users");
		res.json(result.rows);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const createUser = async (req, res) => {
	const { username, email, password_hash, role } = req.body;
	try {
		const result = await pool.query(
			"INSERT INTO users (username, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING *",
			[username, email, password_hash, role]
		);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getUsers,
	createUser,
};
