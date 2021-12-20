import React from 'react'
import '../css/homepage.css'
import 'animate.css';
import Navbar from './Navbar'
import "aos/dist/aos.css";
import Tilt from 'react-tilted'
import Project from './Project';
import Projectcard from './Projectcard';
import RevCard from './RevCard';
import Experience from './Experience';
import Loader from '../Loader';
export default function Homepage() {
	const [loading, setLoading] = React.useState<boolean>(true)
	const [show, setShow] = React.useState<boolean>(false)
	React.useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}, [])
	window.onload = () => {
		if (show) {
			let body = document.querySelectorAll('.home-div')
			let cn = "activated"
			body.forEach(item => {
				item.classList.add(cn)
			})
		}
		if (!show) {
			let cn = "activated"
			let body = document.querySelectorAll('.home-div')
			body.forEach(item => {
				item.classList.remove(cn)
			})
		}
	}
	if (loading) {
		return (
			<Loader />
		)
	} else
		return (


			<div className="mt-3 home-div ">
				<Navbar show={show} setShow={setShow} />
				<a href="mailto:krishkashiwala@gmail.com" className="lg:fixed   lg:block hidden   lg:rounded-l-full lg:backdrop-filter lg:backdrop-blur-lg lg:py-4 lg:px-4 lg:-right-48  lg:bottom-32 lg:transform lg:rotate-90 lg:bg-transparent lg:z-20 email-link">krishkashiwala@gmail.com &nbsp;<span>----------------------------------------------</span> </a>
				<main className="lg:flex lg:justify-between lg:mt-24 ">
					<div className=" lg:fixed lg:bottom-0 lg:ml-10 lg:bg-transparent lg:z-10 left-links">
						<ul className="lg:flex lg:flex-col lg:justify-between lg:gap-5 lg:h-full lg:p-4 lg:backdrop-filter lg:backdrop-blur-lg lg:bg-transparent hidden  lg:blur lg:rounded-t-full">
							<a href="https://github.com/KrishKashiwala" rel="noreferrer" target="_blank" className="media-links transform transition duration-300 ease-in hover:-translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github w-5 h-5"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
							<a href="https://www.linkedin.com/in/krish-kashiwala-4384521ab/" rel="noreferrer" target="_blank" className="media-links transform transition duration-300 ease-in hover:-translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a >
							<a href="https://www.instagram.com/krish.kashiwala/" target="_blank" rel="noreferrer" className="media-links transform transition duration-300 ease-in hover:-translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a >
							<a href="https://twitter.com/krishebish" target="_blank" rel="noreferrer" className="media-links transform transition duration-300 ease-in hover:-translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a >
							<div className="ml-2 border-l-2 border-l-white h-24 left-link-bo"></div>
						</ul>
					</div>
					<div className="lg:flex hidden">
						<img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" className=" w-11  absolute top-28 left-52 top-down transform rotate-45  " alt="Git-Hub-Mark-32px" />
						<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" className=" w-24 transform -rotate-45 bot-down absolute bottom-6 left-16 " alt="Git-Hub-Mark-32px" />
						<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg" className="animate-spin w-11 absolute bottom-36 right-3  " alt="Git-Hub-Mark-32px" />
						<img src="https://i.ibb.co/YcfmN8W/logo512.png" alt="logo512" className="w-24 absolute   animate-spin transform  scale-x-150 scale-y-150  right-72 up-down" ></img>
						<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="logo512" className="w-24 absolute mid-down bottom-64 right-64 transform rotate-45" ></img>
						<img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="logo512" className="w-11 absolute top-32 right-24 " ></img>
						<img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="logo512" className="w-11 absolute top-64 left-20 " ></img>
						<img src="https://www.vectorlogo.zone/logos/vim/vim-icon.svg" alt="logo512" className="w-32 absolute bottom-20 bot-down right-80 transform -rotate-45" ></img>
						<img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="logo512" className="w-20 absolute right-2/4  bottom-2 mid-bot-down  transform -rotate-360   scale-x-150 scale-y-150 " ></img>
						{/* <img src="https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg" alt="logo512" className="w-11 absolute   bot-down right-52 transform -rotate-45" ></img> */}
					</div>
					<img src="https://i.ibb.co/YcfmN8W/logo512.png " alt="logo512" className="w-16 absolute right-3  top-24  top-down  transform -rotate-360   scale-x-150 scale-y-150 lg:hidden" ></img>
					{/* <img src=" https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg" alt="logo512" className="w-24 absolute mid-down bottom-64 right-64 transform rotate-45" ></img> */}
					<img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="logo512" className="w-24 absolute   animate-spin transform  scale-x-150 scale-y-150  right-72 up-down lg:hidden" ></img>
					<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="logo512" className="w-24 absolute   bot-bot-down right-16 transform -rotate-45 lg:hidden" ></img>
					<img src="https://www.vectorlogo.zone/logos/vim/vim-icon.svg" alt="logo512" className="w-10 absolute mid-bot-down right-80 transform -rotate-45 lg:hidden" ></img>
					<img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="logo512" className="w-32 lg:block hidden absolute lg:-bottom-2/4 right-24 " ></img>
					<a title="Henry Zhu, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Babel_Logo.svg"><img width="512" className="absolute  lg:-bottom-3/4 -bottom-64" alt="Babel Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/512px-Babel_Logo.svg.png" /></a>
					<section className="lg:flex lg:flex-col lg:w-10/12 lg:ml-28 lg:mt-20 mt-32 mb-96 -ml-4  lg:backdrop-filter-none  backdrop-filter backdrop-blur-lg bg-transparent">
						<div className="main-section lg:ml-10 ml-10  backdrop-filter backdrop-blur-lg bg-transparent lg:w-11/12">
							<span className="lg:font-normal lg:text-base main-span-1  animate__animated animate__fadeInUp  lg:backdrop-filter lg:backdrop-blur-lg lg:bg-transparent backdrop-filter backdrop-blur-lg bg-transparent text-sm">Hi 👋🏻, my name is</span>
							<h1 className="main-h1  animate__animated animate__fadeInUp lg:backdrop-filter lg:backdrop-blur-lg lg:bg-transparent backdrop-filter backdrop-blur-lg bg-transparent ">Krish Kashiwala.</h1>
							<div className="lg:w-9/12 main-h3 animate__animated animate__fadeInUp lg:backdrop-filter lg:backdrop-blur-lg lg:bg-transparent backdrop-filter backdrop-blur-lg bg-transparent " >
								In &nbsp;&nbsp;&nbsp;&nbsp;with  Technology, Photography and Humor.

							</div>
							<img className="lg:w-10 lg:absolute lg:z-20 lg:top-44 lg:left-16 lg:h-10 absolute w-6 h-6 z-20 top-24 left-9 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/1200px-Love_Heart_SVG.svg.png" alt="Love Heart SVG.svg" />
							<div className="lg:w-5/12 lg:mt-4 lg:mb-4 lg:font-normal lg:text-lg  text-gray-300 animate__animated animate__fadeInUp  text-sm mt-10 w-10/12   lg:backdrop-filter lg:backdrop-blur-lg lg:bg-transparent small-des  mb-10 backdrop-filter backdrop-blur-lg bg-transparent">I'm a computer science grad  who thinks with both left and right brains whether it's coding  or photography.</div>
						</div>
						<a href="mailto:krishkashiwala@gmail.com" className=" animate__animated animate__fadeInDown section-button rounded-lg  border-2 ml-10 mt-10 border-opacity-3  border-gray-50   w-52 p-4 box-border transition duration-400 ease-in transform  hover:bg-white  hover:text-black lg:backdrop-filter lg:backdrop-blur-lg lg:bg-transparent backdrop-filter backdrop-blur-lg bg-transparent">Get In Touch 👋🏻</a>
					</section>
				</main>

				<main id="about" className="home-div lg:p-1  backdrop-filter backdrop-blur-lg bg-transparent lg:backdrop-filter lg:backdrop-blur-lg lg:bg-transparent" >
					<section className="lg:mt-32 lg:flex lg:flex-col lg:ml-36 lg:mr-20 second-main flex flex-col  -mt-52 home-div" data-aos="fade-up" data-aos-once="true">

						<a title="Henry Zhu, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Babel_Logo.svg"><img className=" hidden lg:w-64 lg:z-0 lg:h-32 lg:absolute lg:-left-24 t-top-down" alt="Babel Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/512px-Babel_Logo.svg.png" /></a>
						<div className="lg:flex lg:flex-row lg:items-center flex flex-row items-center ">
							<span className="lg:font-bold info-head lg:text-3xl  animate__animated animate__fadeInUp ab-span text-4xl font-bold ">&nbsp;&nbsp;About Me&nbsp;&nbsp;</span>
							<hr className="lg:w-64 lg:ml-2 lg:opacity-40 -ml-7 animate__animated animate__fadeInUp ab-hr" />
						</div>
						<br />
						<div className="lg:flex lg:flex-row  grid grid-rows-2 col-span-4   lg:items-center lg:justify-around ab-des-main w-full" >
							<div className="lg:w-3/5 info-info lg:text-xl lg:opacity-60   text-xl opacity-80 ml-6  lg:text-left   "> Hello! I'm Krish, a computer science grad.

								When it comes to technology, there was always something that attracted me to learn and experiment with new things. The habit of asking questions for every new thing that attracted my eyes proved to be very beneficial to me. Exploring new things, finding answers, and creating something new is all that I do.

								The goal is to make something with which I can say that I have contributed something to the world! As a growing child, my parents always nurtured me and never let me stay in my comfort zone. <br /><br /> This motivated me to work hard and so I will make every effort to repay their struggle.


								I am very adaptive to any new Technology as it is my passion to explore new technologies. For my work, I put all of my dedication towards it. I am an enthusiastic and hard-working student at my University.

								<div className="spc-col">I am  a UG student of Dept of Information Technology at  Charusat University .</div>
								<br />
								<br />
								Here are a few technologies I've known thoroughly:
								<br />
								<ul className="spc-col lg:flex lg:flex-row flex flex-row m-5 text-sm">
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
									<li className="spc-li"> After Effects ⚡</li> */}
										<li className="spc-li"> Illustrator ✏</li>
										<li className="spc-li"> Photoshop 📷</li>
									</div>
								</ul>
								<br />
								Some of my soft skills:
								<br />
								<ul>
									{/* <li className="spc-li spc-col">Hackathon / Event Management 💻</li> */}
									<li className="spc-li spc-col m-5">Project Leader</li>
									{/* <li className="spc-li spc-col">Workshop Facilitator</li> */}
								</ul>
							</div>
							<div data-aos="fade-up">
								<Tilt scale={1}>
									<div className="lg:border-2 lg:rounded-lg lg:border-yellow-400   lg:h-40 lg:px-32 lg:py-44 border-2 lg:-ml-10 rounded-lg border-yellow-400 w-36  h-52  ml-32 mt-14 ">
									</div>
									<img className="lg:w-64 lg:h-96 lg:rounded-lg lg:absolute lg:bottom-20 lg:right-16 w-40 ml-14  h-52 absolute  bottom-6 rounded-lg" src="https://i.ibb.co/9YYr9B6/IMG-20211124-WA0004.jpg" alt="pics" />

								</Tilt>
							</div>
						</div >
					</section >
				</main >
				<section className=" lg:mt-64 lg:-ml-10 sm:-mt-96 lg:block " id="experience">
					<div className="lg:flex lg:flex-row lg:items-center  lg:ml-64 flex flex-row items-center text-2xl font-bold -ml-5 ">
						<h2 data-sr-id="3" className="visible animate__animated animate__fadeInUp opacity-100 lg:text-3xl exp-h2 lg:font-bold">Experience</h2>
						<hr className="lg:w-64 lg:ml-4 text-gray-600 w-32 ml-4  opacity-40 animate__animated animate__fadeInUp" />
					</div>
					<div className=" mt-10 animate__animated animate__fadeInDown">
						<Experience />
					</div>
				</section>
				<section id="projects" className=" lg:mt-96 lg:-ml-10  mb-28 mt-24">
					<div className="lg:flex lg:flex-row lg:items-center lg:ml-64 flex flex-row items-center ml-5">
						<h2 data-sr-id="3" className="lg:visible animate__animated animate__fadeInUp lg:opacity-100 lg:text-3xl pro-h2 lg:font-bold visible opacity-100 text-xl font-bold ml-1 text-center ">Some things I've Built</h2>
						<hr className="lg:w-64 lg:ml-4 lg:text-gray-800  lg:opacity-80 animate__animated animate__fadeInUp w-12 ml-2" />
					</div>
					<ul className="flex flex-row ">
						<li className="w-full">
							<Projectcard />
							<RevCard />
						</li>
					</ul>
				</section>
				<section className="lg:flex lg:flex-col lg:text-center pro  lg:items-center  lg:mt-96 lg:ml-0 lg:mr-0 flex flex-col  mt-96 items-center -mb-96" data-aos="fade-up" id="projects" >
					<h1 className="lg:mb-10 lg:text-3xl lg:font-bold mb-10 text-2xl text-center  font-bold ">Other Noteworthy Projects</h1>

					<div className="lg:flex lg:flex-row  lg:gap-10 flex flex-col gap-5 ">
						<Project lang={['Typescript', 'ReactJS', 'ExpressJS', 'GraphQL', 'MongoDB']} title="Keep Clone" des="A simple Keep clone built using React.js and MongoDB" gitlink="https://github.com/KrishKashiwala/keep-clone-web" extralink="http://keep-clone-web.netlify.app/" />
						<Project lang={['Python']} title="Chat App" des="It's a command line based python chat application which basically connects two users on a socket connection and transfer of message does happen." gitlink="https://github.com/KrishKashiwala/cli-based-chat-app-using-python" extralink="https://www.linkedin.com/posts/krish-kashiwala-4384521ab_github-krishkashiwalacli-based-chat-app-using-python-activity-6851449785937903616-qGqM" />
						{/* <Project title="" des="0A1A2F" gitlink="" extralink="" /> */}
					</div>
				</section>
				<section className="lg:flex lg:flex-col lg:justify-center lg:items-center foot-main flex flex-col justify-center items-center -mt-64" data-aos="fade-up" data-aos-once="true" id="contact">
					<h5 className="foot-main-h5">What's Next?</h5>
					<h1 className="foot-main-h1">Get In Touch</h1>
					<h5 className="text-sm w-56 text-center opacity-20">I enjoy talking to new people so free feel to mail or connect with me</h5>
					<br />
					<h5> 🤖</h5>
					<br />
					<a href="mailto:krishkashiwala@gmail.com" className="foot-button border-2 py-4 px-6 rounded-lg transition duration-300 ease-in-out  ">Let's Talk</a>
				</section>
				<footer className="lg:text-center lg:opacity-20 lg:mt-52 text-center opacity-20 mt-52">
					<ul className="lg:hidden flex flex-row items-center justify-evenly ml-16 mr-16 mb-10">
						<li><a href="https://github.com/KrishKashiwala" className="foot-icon w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
						<li><a href="https://www.linkedin.com/in/krish-kashiwala-4384521ab/" className="foot-icon w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
						<li><a href="https://www.instagram.com/krish.kashiwala/" className="foot-icon w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
						<li><a href="https://twitter.com/krishebish" className="foot-icon w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
					</ul>
					© 2021 Krish Kashiwala
				</footer>

			</div >
		)
}