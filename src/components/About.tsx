import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS

const About = () => {
	return (
		<>
			<section className="container about">
				{/* <div className="row align-items-center">
					<div className="col-12 pb-5">
						<div className="d-flex navigation">
							<a href="#aboutme" className="me-3" aria-current="page">
								About Me
							</a>
							<a href="#work" className="me-3">
								Work Experience
							</a>
							<a href="#projects" className="me-3">
								Projects
							</a>
						</div>
					</div>
				</div> */}
				<div id="aboutme" className="row border rounded">
					<div className="col-12 bg-secondary">
						<h3 className="w-100 my-2 text-white">About me</h3>
					</div>
					<div className="col-sm-4 left py-3">
						<div className="self-image">
							<img
								className="profile_pic"
								width="200"
								height="200"
								src="https://user-images.githubusercontent.com/30073553/259414590-c2b1f531-cdd6-42bd-9bd6-ed7fef71b8eb.jpg"
								alt="Krishna Pallapolu"
							/>
						</div>

						<div className="social-share d-flex align-items-center mt-3 ps-3">
							{/* <!-- Facebook --> */}
							<a className="btn btn-primary me-2" href="https://www.linkedin.com/in/krishna-pallapolu-b4552738/" target="_blank" role="button">
								<i className="bi bi-linkedin"></i>
							</a>
							{/* <!-- Google --> */}
							<a className="btn btn-primary me-2" href="mailto: krishna.naidu24@gmail.com" target="_blank" role="button">
								<i className="bi bi-google"></i>
							</a>
							{/* <!-- Whatsapp --> */}
							<a className="btn btn-primary" href="https://wa.me/+919945789900" target="_blank" role="button">
								<i className="bi bi-whatsapp"></i>
							</a>
						</div>
					</div>
					<div className="col-sm-8 right p-3">
						<table className="w-100">
							<tr>
								<th>Name:</th>
								<td>Krishna Pallapolu</td>
							</tr>

							<tr>
								<th>Current Location:</th>
								<td>Bangalore, India</td>
							</tr>
							<tr>
								<th>Education:</th>
								<td>
									B.Tech [ME] <br />
									(Graduated 2014){" "}
								</td>
							</tr>
							<tr>
								<th>Profession:</th>
								<td>Technical Lead / Senior Web Developer</td>
							</tr>
						</table>
						<div id="resume" className="position-absolute d-flex align-items-center">
							<h4 className="m-0">Download resume</h4>
							<a className="m-3" href="Krishna_Pallapolu_Resume_2023.pdf" download>
								<i className="bi bi-file-earmark-pdf"></i>
							</a>
							<a className="m-3" href="Krishna_Pallapolu_Resume.docx" download>
								<i className="bi bi-filetype-docx"></i>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
