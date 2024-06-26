// src/components/Comments.js
import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";

const Comments = () => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetchComments();
	}, []);

	const fetchComments = async () => {
		try {
			const response = await ApiService.get("/comments");
			setComments(response.data);
		} catch (error) {
			console.error("Error fetching comments:", error);
		}
	};

	return (
		<div>
			<h2>Comments</h2>
			{comments.map((comment) => (
				<div key={comment.id} className="comment">
					<p>
						<strong>User:</strong> {comment.user_id}
					</p>
					<p>{comment.content}</p>
				</div>
			))}
		</div>
	);
};

export default Comments;
