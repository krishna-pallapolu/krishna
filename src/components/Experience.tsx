import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";

const Experience = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
		}, 6000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const accordions = [
		{
			title: (
				<div>
					<div className="d-flex align-items-center align-items-center">
						<h5 className="mb-0"> Sapaad Software Pvt Ltd</h5>
						<span className="px-1">,Bangalore</span>
					</div>
				</div>
			),
			content: (
				<div>
					<div className="d-flex justify-content-between">
						<p>Senior Web developer/ Lead</p>
						<p>01/2022 - Present</p>
					</div>
					<div className="">
						<h6>Skills used:</h6>
						<p>HTML | CSS | JavaScript | PHP | WordPress | Node Js | React JS | TypeScript | jQuery | MySQL | JSON API | Ajax</p>
					</div>
				</div>
			),
		},
		{
			title: (
				<div>
					<div className="d-flex align-items-center align-items-center">
						<h5 className="mb-0"> Google Operations Center</h5>
						<span className="px-1">,Hyderabad</span>
					</div>
				</div>
			),
			content: (
				<div>
					<div className="d-flex justify-content-between">
						<p>Production Specialist</p>
						<p>08/2020 - 12/2021</p>
					</div>
					<div className="">
						<h6>Skills used:</h6>
						<p>HTML | CSS | JavaScript | FTL | jQuery </p>
					</div>
				</div>
			),
		},
		{
			title: (
				<div>
					<div className="d-flex align-items-center align-items-center">
						<h5 className="mb-0">OneTrust Privacy Management Software</h5>
						<span className="px-1">,Bangalore</span>
					</div>
				</div>
			),
			content: (
				<div>
					<div className="d-flex justify-content-between">
						<p>Web designer and Developer</p>
						<p>08/2019 - 08-2020</p>
					</div>
					<div className="">
						<h6>Skills used:</h6>
						<p>HTML | CSS | JavaScript | PHP | WordPress | Node Js | Angular JS | jQuery | MySQL | JSON API | Ajax</p>
					</div>
				</div>
			),
		},
		{
			title: (
				<div>
					<div className="d-flex align-items-center align-items-center">
						<h5 className="mb-0">Cognizant Technology Solutions</h5>
						<span className="px-1">,Bangalore</span>
						<span>(Onsite at Google)</span>
					</div>
				</div>
			),
			content: (
				<div>
					<div className="d-flex justify-content-between">
						<p>Web Consultant</p>
						<p>05/2017 - 08/2019</p>
					</div>
					<div className="">
						<h6>Skills used:</h6>
						<p>AMP | HTML | CSS | Bootstrap | JavaScript | jQuery | PHP | WordPress | Shopify | Magento | Drupal</p>
					</div>
				</div>
			),
		},
		{
			title: (
				<div>
					<div className="d-flex align-items-center align-items-center">
						<h5 className="mb-0">Dell Technologies</h5>
						<span className="px-1">,Bangalore</span>
					</div>
				</div>
			),
			content: (
				<div>
					<div className="d-flex justify-content-between">
						<p>Senior Technical Specialist</p>
						<p>08/2015 - 05/2017</p>
					</div>
				</div>
			),
		},
	];

	return (
		<section id="work" className="container accordion-container py-5">
			<div className="pb-4">
				<h2>Work Experiences</h2>
			</div>
			{accordions.map((accordion, index) => (
				<Accordion key={index} title={accordion.title} content={accordion.content} isOpen={index === activeIndex} />
			))}
		</section>
	);
};

export default Experience;
