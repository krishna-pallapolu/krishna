import React, { useState, useEffect } from "react";

function TodoApp() {
	const [todos, setTodos] = useState<string[]>(() => {
		const savedTodos = localStorage.getItem("todos");
		return savedTodos ? JSON.parse(savedTodos) : [];
	});

	const [task, setTask] = useState<string>("");

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTask = () => {
		if (task.trim() !== "") {
			setTodos([...todos, task]);
			setTask("");
		}
	};

	return (
		<div className="container">
			<h2 className="mb-4">To-Do List</h2>
			<input type="text" placeholder="Enter task" value={task} onChange={(e) => setTask(e.target.value)} />
			<button onClick={addTask}>Add Task</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default TodoApp;
