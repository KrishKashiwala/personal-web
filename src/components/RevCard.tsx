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
		<a href="https://octoprofiler.vercel.app/" target="_blank" rel='noopener noreferrer'>
			<div className="rev-main lg:items-center lg:justify-start  flex items-center justify-start flex-col text-start  " data-aos="fade-down">
				<div className="lg:flex rev-sub-div lg:flex-col lg:justify-center  lg:items-start  lg:p-5 lg:mt-16 lg:gap-4 lg:z-20 flex flex-col  justify-center items-start gap-4 p-5">
					<p className="rev-p ">Featured Project</p>
					<h3 className="rev-h3 font-bold text-4xl">Github Profiler</h3>
					<div className="">
						<p className=" lg:rounded-3xl  lg:w-6/12 lg:absolute  lg:p-6 lg:float-left lg:text-left lg:bg-gray-900 lg:text-gray-400">A nicer look at GitHub profiles built with Next.js and the GitHub API</p>
					</div>
					<div className=" lg:mt-24  lg:flex lg:flex-row lg:items-center flex items-center gap-1">
						<a className="link" href="https://github.com/KrishKashiwala/Octoprofile" target="_blank" rel='noopener noreferrer'>
							<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github w-10 h-5 fill-current opacity-40 transition ease-in-out duration-200"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
						</a>
						<a className="link" href="https://www.linkedin.com/feed/update/urn:li:activity:6878261971884617728/">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								width="30" height="30"
								viewBox="0 0 30 30"
								className="fill-current opacity-40 transition ease-in-out duration-200"
							><path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path></svg>
						</a>
					</div>

				</div>
				<img className="rev-img hidden lg:block" src="https://i.ibb.co/2cftsKp/demo.png" alt="demo" ></img>
			</div >
		</a>
	)

}
export default RevCard