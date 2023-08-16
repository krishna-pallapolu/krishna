import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<About />
			<Experience />
			<Projects />
		</div>
	);
}

export default App;
