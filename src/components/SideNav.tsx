import { Dispatch, SetStateAction } from "react";

const SideNav: React.FC<{ show: boolean, setShow: Dispatch<SetStateAction<boolean>> }> = ({ show, setShow }) => {

	const handleChange = () => {
		setShow(!show)
	}
	return (
		<div>

			<div onClick={handleChange} className="absolute right-5 text-6xl cursor-pointer z-20">
				&times;
			</div>
			<div className="lg:hidden absolute  right-0 flex flex-col justify-evenly  items-center z-10 w-6/12 bg-gray-700 h-full transform ease-in-out duration-500  ">

				<a href="#about" className=" cursor-pointer hover:text-white">About</a>
				<a href="#experience" className=" cursor-pointer hover:text-white">Experience</a>
				<a href="#projects" className=" cursor-pointer hover:text-white">Projects</a>
				<a href="#contact" className=" cursor-pointer hover:text-white">Contact</a>
			</div>
		</div>
	)
}
export default SideNav;