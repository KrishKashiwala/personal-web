import '../css/navbar.css'
import 'animate.css';
import "aos/dist/aos.css";
const Navbar = () => {
	return (
		<div className="nav-main flex flex-row justify-between top-5 ml-20 mr-20 sticky animate__animated animate__fadeInDown" >
			<section className="logo rounded bg-cover w-3 h-3">Hello</section>
			<section className="flex flex-row justify-between w-3/12 ">
				<a href="#about" className="nav-link cursor-pointer hover:text-white">About</a>
				<a href="#experience" className="nav-link cursor-pointer hover:text-white">Experience</a>
				<a href="#projects" className="nav-link cursor-pointer hover:text-white">Projects</a>
				<a href="#contact" className="nav-link cursor-pointer hover:text-white">Contact</a>
			</section>
			<a href="https://drive.google.com/file/d/1w3qbgyAChvafxCf8xXZvcQ8VhUZMOaxL/view" rel="noreferrer" target="_blank" className="nav-button rounded-lg overflow-hidden  border-2 border-opacity-3  border-gray-50 px-4 py-1 box-border transition duration-500 ease-in-out transform  hover:bg-white  hover:text-black">Resume </a>
		</div>

	)
}
export default Navbar;