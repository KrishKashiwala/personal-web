import React from 'react'
import '../css/projectcard.css'
import * as AOS from 'aos'
import 'animate.css';
import "aos/dist/aos.css";
const Projectcard: React.FC = () => {
	React.useEffect(() => {
		AOS.init({
			duration: 2000,
		})
	}, [])
	return (
		<div className="proj-main lg:items-center  lg:justify-end  text-sm flex items-center justify-start bg-gray-900 lg:bg-black " data-aos="fade-up">
			<div className="lg:flex proj-sub-div lg:flex-col lg:justify-center lg:items-end  lg:p-5 lg:gap-4 lg:z-20 flex flex-col  justify-center items-start p-5 gap-4">
				<p className="proj-p -mt-5">Featured Project</p>
				<h3 className="proj-h3 font-bold text-4xl ">Farmgistics</h3>
				<div className="https://github.com/KrishKashiwala/Farmgistics">
					<p className="lg:absolute lg:w-2/4 lg:rounded-3xl lg:bg-gray-900  lg:right-4 lg:p-5 lg:float-bottom lg:text-right   w-full lg:text-gray-400">A non-profit company that aims to give farmers their selling rights and reach every part of India. We, also believe in Aatmanirbhar Bharat.</p>
				</div>
				<a href="https://github.com/KrishKashiwala/Farmgistics" rel="noreferrer" target="_blank" className="lg:absolute lg:mt-64 link  transition ease-in-out duration-200">
					<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github w-10 h-5 fill-current opacity-40"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
				</a>

			</div>
			<img className="proj-img hidden lg:block" src="https://i.ibb.co/XYQc8cs/pp-1.png" alt="pp-1"></img>
		</div>
	)

}
export default Projectcard