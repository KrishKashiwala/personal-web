import '../css/sidenav.css'
import { Dispatch, SetStateAction } from "react";

const SideNav: React.FC<{ show: boolean, setShow: Dispatch<SetStateAction<boolean>> }> = ({ show, setShow }) => {

	const handleChange = () => {
		setShow(!show)
	}
	return (
		<div className="lg:hidden   transform transition-all ease-in-out duration-500 side-main h-5/6 w-6/12   right-1 -top-1  ">

			<div onClick={handleChange} className="times flex items-end justify-end content-end text-2xl ">
				&times;
			</div>
			<div className="lg:hidden flex flex-col absolute top-20 w-full h-96  items-center justify-between">

				<a href="#about" className=" cursor-pointer line-1">About</a>
				<a href="#experience" className=" cursor-pointer line-1">Experience</a>
				<a href="#projects" className=" cursor-pointer line-1">Projects</a>
				<a href="#contact" className=" cursor-pointer line-1">Contact</a>
				<a href="https://drive.google.com/file/d/1w3qbgyAChvafxCf8xXZvcQ8VhUZMOaxL/view" rel="noreferrer" target="_blank" className="lg:hidden side-button">Resume </a>
			</div>
		</div>
	)
}
export default SideNav;