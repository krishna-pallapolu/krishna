import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function HomePage() {
	// Todo page content
	return (
		<div>
			<Header />
			<About />
			<Experience />
			<Projects />
		</div>
	);
}

export default HomePage;
