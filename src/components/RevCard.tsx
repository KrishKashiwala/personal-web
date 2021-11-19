import React from 'react'
import '../css/revcard.css'
import * as AOS from 'aos'
import 'animate.css';
import "aos/dist/aos.css";
const RevCard: React.FC = () => {
	React.useEffect(() => {
		AOS.init({
			duration: 2000,
		})
	}, [])
	return (
		<div className="rev-main items-center justify-start " data-aos="fade-down">
			<div className="flex rev-sub-div flex-col justify-center items-start  p-5 gap-4 z-20 ">
				<p className="rev-p ">Featured Project</p>
				<h3 className="rev-h3 font-bold text-4xl">Python Chat App</h3>
				<div className="">
					<p className="absolute w-2/4 rounded-3xl bg-gray-900 left-4 p-5 float-left text-left text-gray-400">Command Line Based Tool which supports Multi-client chat Facility.</p>
				</div>
				<div className="absolute mt-72 flex flex-row items-center">
					<a className="link" href="https://github.com/KrishKashiwala/cli-based-chat-app-using-python">
						<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github w-10 h-5 fill-current opacity-40 transition ease-in-out duration-1000"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
					</a>
					<a className="link" href="https://www.linkedin.com/feed/update/urn:li:activity:6851449785937903616/">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
							width="30" height="30"
							viewBox="0 0 30 30"
							className="fill-current opacity-40 transition ease-in-out duration-1000"
						><path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path></svg>
					</a>
				</div>

			</div>
			<img className="rev-img " src="https://raw.githubusercontent.com/KrishKashiwala/cli-based-chat-app-using-python/main/1.png?raw=true" alt="pp-1"></img>
		</div>
	)

}
export default RevCard