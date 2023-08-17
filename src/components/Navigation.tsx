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
		<div className="responsive-menu container">
			<div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>
			<div className={`menu-wrapper d-flex align-items-center ${menuOpen ? "open" : ""}`}>
				<div className="logo_header">
					<img width={180} height={40} src="https://i.imgur.com/bkAfs7u.png" alt="" />
				</div>
				<ul className="d-flex flex-column flex-md-row aligne-items-center">
					<li>
						<Link to="/" className={location.pathname === "/" ? "active" : ""}>
							Home
						</Link>
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
		</div>
	);
};

export default Navigation;
