import '../css/experience.css'
const Experience = () => {
	window.onload = function () {
		const tabs = document.querySelector('.tabs');
		if (tabs) {
			console.log(tabs)
		}
		tabs.addEventListener('click', e => handleClick(e));

		function handleClick(e: any) {
			const target = e.target;
			const tabNum = target.dataset.tab;
			const activeTab = document.querySelector('.tabs .active');
			const activeContent = document.querySelector(
				'.content .visible'
			);
			const currentContent = document.querySelector(
				`.content__section[data-tab='${tabNum}']`
			);

			if (!tabNum) {
				return;
			}

			activeTab.classList.remove('active');
			target.classList.add('active');
			activeContent.classList.remove('visible');
			currentContent.classList.add('visible');
		}
	}
	return (
		<div className="container">
			<div className="tabs">

				<div className="tab tab-1 active cursor-pointer" data-tab="1">Tech Exordium</div>
				<div className="tab tab-2 cursor-pointer" data-tab="2">CodeChef</div>
				{/* <div className="tab tab-3 cursor-pointer" data-tab="3">Tab 3</div> */}

				<span className="highlighter"></span>

			</div>

			<div className="content">

				<div className="content__section visible" data-tab="1">
					<p>Worked as <span className="high"> Team Lead and Frontend Developer</span> in more than 2 projects.</p>
					<p className="opacity-60 timeline mt-2">June 2020 - August 2020</p>
				</div>

				<div className="content__section" data-tab="2">
					<div>
						<h1>CodeChef's College Chapter</h1>
						<p>Member of <span className="high"> CHARUSAT Media and Outreach</span></p>
						<p className="opacity-60 timeline mt-2">Sept 2020 - Present</p>
					</div>
				</div>

				{/* <div className="content__section" data-tab="3">
					<p>Gluten-free you probably haven't heard of them jianbing pitchfork pabst. Kombucha occupy iPhone live-edge beard iceland freegan small batch before they sold out DIY marfa chillwave sustainable taiyaki bushwick. Meggings franzen kogi, next level fingerstache +1 kitsch YOLO activated charcoal craft beer adaptogen twee. Yuccie tumeric irony heirloom, shoreditch kinfolk swag cold-pressed 90's chicharrones.</p>
				</div> */}
			</div>
		</div>
	)

}
export default Experience