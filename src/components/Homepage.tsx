import '../css/homepage.css'
import 'animate.css';
import Navbar from './Navbar'
import * as AOS from 'aos'
import "aos/dist/aos.css";
import React from 'react';
import Tilt from 'react-tilted'

export default function Homepage() {
	React.useEffect(() => {
		AOS.init({
			duration: 2000,
		})
	}, [])

	return (
		<div className="mt-6 first-main">
			<Navbar />
			<a href="mailto:krishkashiwala@gmail.com" className="fixed bottom-16  rounded-l-full bg-gray-900 py-4 px-4 -right-56 transform rotate-90 bg-transparent z-20 email-link">krishkashiwala@gmail.com <span className="text-white"> &nbsp;&nbsp;&nbsp;_________________________________________________________ </span></a>
			<main className="flex justify-between mt-24 ">
				<div className=" fixed bottom-0 ml-10 bg-transparent z-10 ">
					<ul className="flex flex-col justify-between gap-5 h-full p-3 bg-gray-900 bg-transparent blur rounded-t-full">
						<a href="https://github.com/KrishKashiwala" target="_blank" className="media-links transform transition duration-300 ease-in hover:-translate-y-3"><i className="fab fa-github text-xl transform hover:scale-y-4"></i></a>
						<a href="https://www.linkedin.com/in/krish-kashiwala-4384521ab/" target="_blank" className="media-links transform transition duration-300 ease-in hover:-translate-y-3"><i className="fab fa-linkedin text-xl"></i></a >
						<a href="https://www.instagram.com/krish.kashiwala/" target="_blank" className="media-links transform transition duration-300 ease-in hover:-translate-y-3"><i className="fab fa-instagram text-xl"></i></a >
						<a href="https://twitter.com/krishebish" target="_blank" className="media-links transform transition duration-300 ease-in hover:-translate-y-3"><i className="fab fa-twitter text-xl"></i></a >
						<div className="ml-2 border-l-2 border-l-white h-24 "></div>
					</ul>
				</div>
				<div className="flex ">
					<img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" className=" w-11  absolute top-28 left-52 top-down transform rotate-45" alt="Git-Hub-Mark-32px" />
					<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" className=" w-11 transform -rotate-45 bot-down absolute bottom-6 left-24" alt="Git-Hub-Mark-32px" />
					<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg" className="animate-spin w-11 absolute bottom-44 right-3  " alt="Git-Hub-Mark-32px" />
					<img src="https://i.ibb.co/YcfmN8W/logo512.png" alt="logo512" className="w-11 absolute  top-50 animate-spin transform  scale-x-150 scale-y-150  right-72 up-down" ></img>
					<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="logo512" className="w-11 absolute bottom-64 right-64 transform rotate-45" ></img>
					<img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="logo512" className="w-11 absolute top-32 right-24 " ></img>
					<img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="logo512" className="w-11 absolute top-64 left-20" ></img>
					<img src="https://www.vectorlogo.zone/logos/vim/vim-icon.svg" alt="logo512" className="w-11 absolute bottom-20 bot-down left-3/4 transform -rotate-45" ></img>
					<img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="logo512" className="w-11 absolute mid-down top-96 left-52 transform -rotate-360   scale-x-150 scale-y-150 " ></img>
					<img src="https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg" alt="logo512" className="w-11 absolute  bottom-10 bot-down right-52 transform -rotate-45" ></img>
				</div>
				<section className="flex flex-col w-10/12 ml-28">
					<div className="main-section ml-10 ">
						<span className="font-normal text-base main-span-1 blur animate__animated animate__fadeInUp  ">Hi 👋🏻, my name is</span>
						<h1 className="main-h1 animate__animated animate__fadeInUp">Krish Kashiwala.</h1>
						<h3 className="w-3/4 main-h3 animate__animated animate__fadeInUp" >In ❤️ with  Technology, Photography and Humor.</h3>
						<div className="w-5/12 mt-4 mb-4 font-normal text-lg text-gray-600 animate__animated animate__fadeInUp">I'm a computer science grad based in Silicon Valley who thinks with both left and right brains whether it's coding, photography, or motion graphics.</div>
					</div>
					<a href="mailto:krishkashiwala@gmail.com" className="section-button rounded-lg  border-2 ml-10 mt-4 border-opacity-3  border-gray-50   w-52 p-4 box-border transition duration-400 ease-in transform  hover:bg-white  hover:text-black">Get In Touch 👋🏻</a>
				</section>
			</main>

			<main id="about" >
				<section className="mt-52 flex flex-col ml-36 mr-20 second-main" data-aos="fade-up" data-aos-once="true">
					<div className="flex flex-row items-center ">
						<h3 className="info-head text-xl ml-24" data-aos="slide-up">01.</h3>&nbsp;&nbsp;<span className="font-bold text-3xl animate__animated animate__fadeInUp">About Me&nbsp;&nbsp;</span>
						<hr className="w-64 ml-2 opacity-40 animate__animated animate__fadeInUp" />
					</div>
					<br />
					<div className="flex flex-row items-center  justify-around" >
						<div className="w-3/5 info-info text-xl opacity-60"> Hello! I'm Krish, a computer science grad.
							When it comes to technology, there was always something that attracted me to learn and experiment with new things. The habit of asking questions for every new thing that attracted my eyes proved to be very beneficial to me. Exploring new things, finding answers, and creating something new is all that I do.

							The goal is to make something with which I can say that I have contributed something to the world! As a growing child, my parents always nurtured me and never let me stay in my comfort zone. This motivated me to work hard and so I will make every effort to repay their struggle.

							I am very adaptive to any new Technology as it is my passion to explore new technologies. For my work, I put all of my dedication towards it. I am an enthusiastic and hard-working student at my University.

							<div className="spc-col">I am  a UG student of Dept of Information Technology at  Charusat University .</div>
							<br />
							<br />
							Here are a few technologies I've known thoroughly:
							<br />
							<ul className="spc-col flex flex-row">
								<div>
									<li className="spc-li"> React.js ⚛</li>
									<li className="spc-li"> GraphQL 📱</li>
									<li className="spc-li"> MongoDB 🔥</li>
									<li className="spc-li"> Node.js 💚</li>
									<li className="spc-li"> TypeScript 👩‍💻</li>
								</div>
								&nbsp;
								&nbsp;
								&nbsp;
								&nbsp;
								<div>
									{/* <li className="spc-li"> Data Science 📚</li>
									<li className="spc-li"> Data Analysis 📝</li>
									<li className="spc-li"> After Effects ⚡</li>
									<li className="spc-li"> Illustrator ✏</li> */}
									<li className="spc-li"> Photoshop 📷</li>
								</div>
							</ul>
							<br />
							Some of my soft skills:
							<br />
							<ul>
								{/* <li className="spc-li spc-col">Hackathon / Event Management 💻</li> */}
								<li className="spc-li spc-col">Project Leader</li>
								{/* <li className="spc-li spc-col">Workshop Facilitator</li> */}
							</ul>
						</div>
						<Tilt scale={1}>
							<div className="3/6 ">
								<div className="border-2 rounded-lg border-yellow-400 info-img-border  h-40 px-32 py-44">
								</div>
								<img className="w-64 h-96 rounded-lg absolute bottom-20 right-20  " src="https://i.ibb.co/bbyxyQ7/Whats-App-Image-2021-11-12-at-9-37-12-PM.jpg" alt="Whats-App-Image-2021-11-12-at-9-37-12-PM" />

							</div>
						</Tilt>
					</div >
				</section >
			</main >
			<section className="flex flex-col justify-center items-center foot-main" data-aos="fade-up" data-aos-once="true" id="contact">
				<h5 className="foot-main-h5">What's Next?</h5>
				<h1 className="foot-main-h1">Get In Touch</h1>
				<h5 className="foot-not-main opacity-20">I enjoy talking to new people so free feel to mail or connect with me</h5>
				<br />
				<h5> 🤖</h5>
				<br />
				<a href="mailto:krishkashiwala@gmail.com" className="foot-button border-2 py-4 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-black">Let's Talk</a>
			</section>
			<footer className="text-center opacity-20 mt-52">
				© 2021 Krish Kashiwala
			</footer>

		</div >
	)
}