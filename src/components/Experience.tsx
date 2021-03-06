import '../css/experience.css'
const Experience = () => {
	return (
		<main className="CV-page">
			<div className="CV-grid">
				<div className="CV-grid-column">
					<div className="CV-jobs">
						<h2 className="CV-secondaryHeading CV-jobs-heading">Relevant Experience</h2>
						<section className="CV-timeline CV-job">
							<h3 className="CV-timeline-heading"><span className="CV-timeline-heading-title">Tech Exordium </span>&#8211; <span className="CV-timeline-heading-location"> New Delhi , India</span><small className="CV-timeline-heading-duration">June 2021 - August 2021</small></h3>
							<ul className="CV-timeline-details">
								<li className="CV-job-timeline-item">Developed and maintained code for client websites utilizing HTML5, CSS3, Javascript</li>
								<li className="CV-job-timeline-item">Tested front-end code in multiple browsers to ensure cross-browser compatability.</li>
								<li className="CV-job-timeline-item">Coordinated closely with other developers and co-founders.</li>
								<li className="CV-job-timeline-item">Clients included Dosa vala, Baker Zone, Ridez, and more.</li>
							</ul>
						</section>

					</div>
				</div>
			</div>
		</main>
	)

}
export default Experience