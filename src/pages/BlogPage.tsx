import React from "react";

const BlogPage = () => {
	const blogPosts = [
		{
			id: 1,
			title: "Launching a Portfolio Website on GitHub Pages Using React and TypeScript",
			excerpt: "Deply React portfolio site on Github Pages",
			content: (
				<div>
					<div className="pb-3">
						<strong>Introduction:</strong>
						<br /> In the world of software development, creating a portfolio website is a great way to showcase your skills, projects, and achievements. GitHub Pages offers a
						straightforward and free hosting solution for static websites, making it an ideal platform for launching your portfolio. In this blog, we'll guide you through the process of
						creating a portfolio website using React and TypeScript and deploying it on GitHub Pages.
						<br /> We'll cover the questions and challenges you might encounter along the way and provide solutions to help you successfully launch your portfolio.
					</div>
					<div className="pb-3">
						Table of Contents: Choosing the Tech Stack: Why choose React and TypeScript for your portfolio website?
						<br /> Setting up the development environment. Creating a Responsive Menu: Building a responsive hamburger menu without using UI libraries. Using state and hooks to manage menu
						behavior. <br />
						Adding a To-Do Page: Integrating a to-do list page into your portfolio. Using React Router to create multiple pages within your single-page app. <br />
						Deployment on GitHub Pages: Setting up a GitHub repository for your portfolio. Configuring the deployment process using gh-pages package. Troubleshooting deployment issues and
						ensuring your site updates correctly.
					</div>
				</div>
			),
		},
		// Add more blog posts here
	];

	return (
		<div className="container py-4 blogpage">
			<h2 className="mx-auto text-center py-5">Blogs</h2>
			<div className="row py-4">
				{blogPosts.map((post) => (
					<div key={post.id} className="col-12 blog-post py-4">
						<h3>{post.title}</h3>
						<p>{post.excerpt}</p>
						<div>{post.content}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogPage;
