import React, { useState } from "react";
import TodoApp from "./components/Taskapp";

function TodoPage() {
	// Todo page content
	return (
		<div id="taskpage" className="taskpage">
			<div className="container py-5">
				{/* Add your Todo list components here */}
				<TodoApp />
			</div>
		</div>
	);
}

export default TodoPage;
