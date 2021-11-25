const SideNav: React.FC<{ show: boolean }> = (show) => {

	return (
		<div className="lg:hidden absolute top-5 right-0 flex flex-col justify-evenly w-6/12 h-full  ">

			<a href="#about" className=" cursor-pointer hover:text-white">About</a>
			<a href="#experience" className=" cursor-pointer hover:text-white">Experience</a>
			<a href="#projects" className=" cursor-pointer hover:text-white">Projects</a>
			<a href="#contact" className=" cursor-pointer hover:text-white">Contact</a>
		</div>
	)
}
export default SideNav;