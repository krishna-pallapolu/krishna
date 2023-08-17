import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomePage from "./Home";
import TodoPage from "./ToDoPage";
import BlogPage from "./pages/BlogPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/todo" element={<TodoPage />} />
					<Route path="/blogs" element={<BlogPage />} />
				</Routes>
			</Router>

			<div className="container pb-5">
				Contact me on <a href="tel:+919945789900">+919945789900</a>
			</div>
		</div>
	);
}

export default App;
