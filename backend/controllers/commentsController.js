// controllers/commentsController.js
const pool = require("../config/db");

const getComments = async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM comments");
		res.json(result.rows);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const createComment = async (req, res) => {
	const { task_id, user_id, content } = req.body;
	try {
		const result = await pool.query(
			"INSERT INTO comments (task_id, user_id, content) VALUES ($1, $2, $3) RETURNING *",
			[task_id, user_id, content]
		);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getComments,
	createComment,
};
