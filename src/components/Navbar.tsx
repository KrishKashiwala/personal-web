import '../css/navbar.css'
import * as AOS from 'aos'
import "aos/dist/aos.css";
import React from 'react';
const Navbar = () => {

	React.useEffect(() => {
		AOS.init({
			duration: 2000,
		})
	}, [])
	return (
		<div className="nav-main flex flex-row justify-between top-5 ml-20 mr-20" data-aos="fade-down" data-aos-once="true" id="navbar">
			<section className="logo rounded bg-cover w-3 h-3">Hello</section>
			<section className="work flex flex-row justify-between w-3/12 ">
				<a href="#about" className="nav-link cursor-pointer hover:text-white">About</a>
				<a href="#" className="nav-link cursor-pointer hover:text-white">Experience</a>
				<a href="#" className="nav-link cursor-pointer hover:text-white">Blogs</a>
				<a href="#contact" className="nav-link cursor-pointer hover:text-white">Contact</a>
			</section>
			<button className="nav-button rounded-lg overflow-hidden  border-2 border-opacity-3  border-gray-50 px-4 py-1 box-border transition duration-500 ease-in-out transform  hover:bg-white  hover:text-black">Resume </button>
		</div>

	)
}
export default Navbar;