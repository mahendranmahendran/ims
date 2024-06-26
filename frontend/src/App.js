// src/App.js
import React from "react";
import "./styles.css";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";
import Comments from "./components/Comments";
import CreateUser from "./components/CreateUser";
import CreateProject from "./components/CreateProject";
import CreateTask from "./components/CreateTask";
import CreateComment from "./components/CreateComment";

function App() {
	return (
		<div className="App">
			<h1>Jira Clone</h1>
			<CreateUser />
			<hr />
			<CreateProject />
			<Projects />
			<hr />
			<CreateTask />
			<Tasks />
			<hr />
			<CreateComment />
			<Comments />
		</div>
	);
}

export default App;
