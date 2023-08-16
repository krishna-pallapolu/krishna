import React from "react";

const Projects = () => {
	return (
		<section id="projects" className="projects container pb-5 mb-5">
			<h2>Projects</h2>
			{/* Create and map project items */}
			{/* Example: */}
			<ul className="project-item">
				<li>
					<a href="https://www.sapaad.com">sapaad.com</a>
				</li>
				<li>
					<a href="https://www.onetrust.com">onetrust.com</a>
				</li>
				<li>
					<a href="https://www.privacyconnect.com">privacyconnect.com</a>
				</li>
				<li>
					<a href="https://www.admissionleap.com">admissionleap.com</a>
				</li>
			</ul>
		</section>
	);
};

export default Projects;
