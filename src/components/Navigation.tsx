import React, { useState, useEffect } from "react";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768);
		if (window.innerWidth > 768) {
			setMenuOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="responsive-menu">
			<div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>
			<ul className={`menu-list ${menuOpen ? "open" : ""}`}>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#aboutme">About</a>
				</li>
				<li>
					<a href="#work">Experiences</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
