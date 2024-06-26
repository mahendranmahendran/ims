// server.js
const express = require("express");
const cors = require("cors");

const usersRoutes = require("./routes/users");
const projectsRoutes = require("./routes/projects");
const tasksRoutes = require("./routes/tasks");
const commentsRoutes = require("./routes/comments");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// Add this code to your server.js file

app.get("/", (req, res) => {
	res.send("Welcome to the IMS API");
}); // Add this code to your server.js file

app.get("/", (req, res) => {
	res.send("Welcome to the IMS API");
});

app.use("/api/users", usersRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/tasks", tasksRoutes);
app.use("/api/comments", commentsRoutes);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
