import { Dispatch, SetStateAction } from "react";

const SideNav: React.FC<{ show: boolean, setShow: Dispatch<SetStateAction<boolean>> }> = ({ show, setShow }) => {

	const handleChange = () => {
		setShow(!show)
	}
	return (
		<div className="lg:hidden absolute side-body h-full w-6/12  bg-transparent right-1 -top-1 backdrop-filter-none backdrop-blur-none ">

			<div onClick={handleChange} className="absolute right-5 text-6xl cursor-pointer z-20">
				&times;
			</div>
			<div className="lg:hidden flex flex-col absolute top-20 w-full h-96  items-center justify-between">

				<a href="#about" className=" cursor-pointer hover:text-white">About</a>
				<a href="#experience" className=" cursor-pointer hover:text-white">Experience</a>
				<a href="#projects" className=" cursor-pointer hover:text-white">Projects</a>
				<a href="#contact" className=" cursor-pointer hover:text-white">Contact</a>
			</div>
		</div>
	)
}
export default SideNav;