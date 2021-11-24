import '../css/navbar.css'
import 'animate.css';
import "aos/dist/aos.css";
const Navbar = () => {

	return (
		<div>
			<div className=" lg:flex lg:flex-row lg:justify-between  lg:top-5  lg:ml-20 lg:mr-20  animate__animated animate__fadeInDown flex flex-row justify-between top-5 content-start items-start ml-6 mr-3 mt-8" >
				<section className="logo rounded bg-cover w-3 h-3 ">Hello</section>
				<section className="lg:flex lg:flex-row lg:justify-between lg:w-3/12 hidden">
					<a href="#about" className="nav-link cursor-pointer hover:text-white">About</a>
					<a href="#experience" className="nav-link cursor-pointer hover:text-white">Experience</a>
					<a href="#projects" className="nav-link cursor-pointer hover:text-white">Projects</a>
					<a href="#contact" className="nav-link cursor-pointer hover:text-white">Contact</a>
				</section>
				<a href="https://drive.google.com/file/d/1w3qbgyAChvafxCf8xXZvcQ8VhUZMOaxL/view" rel="noreferrer" target="_blank" className="hidden  lg:block nav-button lg:rounded-lg lg:overflow-hidden  lg:border-2 lg:border-opacity-3  lg:border-gray-50 lg:px-4 lg:py-1 lg:box-border lg:transition lg:duration-500 lg:ease-in-out lg:transform  lg:hover:bg-white  lg:hover:text-black">Resume </a>

				{/* mobile logo */}

			</div>

		</div >
	)
}
export default Navbar;