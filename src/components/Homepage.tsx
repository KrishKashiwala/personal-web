import '../css/homepage.css'
import 'animate.css';
import Navbar from './Navbar'
export default function Homepage() {
	return (
		<div className="ml-20 mr-20 mt-6">
			<Navbar />
			<main className="flex justify-between mt-24">
				<div className="flex ">
					<img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" className=" w-11  absolute top-28 left-52 top-down transform rotate-45" alt="Git-Hub-Mark-32px" />
					<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" className=" w-11 transform -rotate-45 bot-down absolute bottom-6 left-10" alt="Git-Hub-Mark-32px" />
					<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg" className="animate-spin w-11 absolute bottom-44 right-10  " alt="Git-Hub-Mark-32px" />
					<img src="https://i.ibb.co/YcfmN8W/logo512.png" alt="logo512" className="w-11 absolute  top-50 animate-spin transform  scale-x-150 scale-y-150  right-72 up-down" ></img>
					<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="logo512" className="w-11 absolute bottom-80 right-64 transform rotate-45" ></img>
					<img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="logo512" className="w-11 absolute top-32 right-24 " ></img>
					<img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="logo512" className="w-11 absolute top-64 left-20" ></img>
					<img src="https://www.vectorlogo.zone/logos/vim/vim-icon.svg" alt="logo512" className="w-11 absolute bottom-20 bot-down left-3/4 transform -rotate-45" ></img>
					<img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="logo512" className="w-11 absolute mid-down top-96 left-52 transform -rotate-360   scale-x-150 scale-y-150 " ></img>
					<img src="https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg" alt="logo512" className="w-11 absolute  bottom-10 bot-down right-52 transform -rotate-45" ></img>
				</div>
				<section className="flex flex-col w-10/12 ml-28">
					<div className="main-section ml-10 ">
						<span className="font-normal text-base main-span-1 blur  ">Hi 👋🏻, my name is</span>
						<h1 className="main-h1">Krish Kashiwala.</h1>
						<h3 className="w-3/4 main-h3" >In ❤️ with  Technology, Photography, and Humor.</h3>
						<div className="w-5/12 mt-4 mb-4 font-normal text-lg text-gray-600">I'm a computer science grad based in Silicon Valley who thinks with both left and right brains whether it's coding, photography, or motion graphics.</div>
					</div>
					<button className="section-button rounded-lg  border-2 ml-10 mt-4 border-opacity-3  border-gray-50   w-52 p-4 box-border transition duration-400 ease-in transform  hover:bg-white  hover:text-black">Get In Touch 👋🏻</button>
				</section>
			</main>
			<main>
				<section className="mt-20 flex flex-col ml-36 mr-20 " id="about" >
					<div className="flex flex-row items-center ">
						<h3 className="info-head text-xl ml-24">01.</h3>&nbsp;&nbsp;<span className="font-bold text-3xl">About Me&nbsp;&nbsp;</span>
						<hr className="w-64 ml-2 opacity-40" />
					</div>
					<br />
					<div className="flex flex-row items-center  justify-around">
						<div className="w-3/5 info-info text-xl opacity-60"> Hello! I'm Krish, a computer science grad.
							When it comes to technology, there was always something that attracted me to learn and experiment with new things. The habit of asking questions for every new thing that attracted my eyes proved to be very beneficial to me. Exploring new things, finding answers, and creating something new is all that I do.

							The goal is to make something with which I can say that I have contributed something to the world! As a growing child, my parents always nurtured me and never let me stay in my comfort zone. This motivated me to work hard and so I will make every effort to repay their struggle.

							I am very adaptive to any new Technology as it is my passion to explore new technologies. For my work, I put all of my dedication towards it. I am an enthusiastic and hard-working student at my University.

							<div className="spc-col">I am UG student of Dept of Information Technology at  Charusat University .</div>
							<br />
							<br />
							Here are a few technologies I've known thoroughly:
							<br />
							<ul className="spc-col flex flex-row">
								<div>
									<li className="spc-li"> React.js ⚛</li>
									<li className="spc-li"> React Native 📱</li>
									<li className="spc-li"> Firebase 🔥</li>
									<li className="spc-li"> Node.js 💚</li>
									<li className="spc-li"> TypeScript 👩‍💻</li>
								</div>
								&nbsp;
								&nbsp;
								&nbsp;
								&nbsp;
								<div>
									<li className="spc-li"> Data Science 📚</li>
									<li className="spc-li"> Data Analysis 📝</li>
									<li className="spc-li"> After Effects ⚡</li>
									<li className="spc-li"> Illustrator ✏</li>
									<li className="spc-li"> Photoshop 📷</li>
								</div>
							</ul>
							<br />
							Some of my soft skills:
							<br />
							<ul>
								<li className="spc-li spc-col">Hackathon / Event Management 💻</li>
								<li className="spc-li spc-col">Project Leader</li>
								<li className="spc-li spc-col">Workshop Facilitator</li>
							</ul>
						</div>
						<div className="3/6">
							<div className="border-2 rounded-lg border-yellow-600 info-img-border  p-16"><img className="w-32 h-38 rounded-lg absolute  right-60 " src="https://i.ibb.co/-0Mz4RzK/Whats-App-Image-2021-11-12-at-10-18-29-PM-2.jpg" alt="Whats-App-Image-2021-11-12-at-10-18-29-PM-2" /></div>
						</div>
					</div >
				</section >
			</main >

		</div >
	)
}