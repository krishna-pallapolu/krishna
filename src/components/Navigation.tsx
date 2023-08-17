import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const location = useLocation(); // Get the current location

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
					<Link to="/" className={location.pathname === "/" ? "active" : ""}>
						Home
					</Link>
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
				<li>
					<Link to="/todo" className={location.pathname === "/todo" ? "active" : ""}>
						Todo
					</Link>
				</li>
				<li>
					<Link to="/blogs" className={location.pathname === "/blogs" ? "active" : ""}>
						Blogs
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
