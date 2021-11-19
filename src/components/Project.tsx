import '../css/project.css'
import '../css/label.css'
const Project = ({ title, des, gitlink, extralink }: any) => {

	return (
		<div className="w-80 p-3 overflow-auto flex flex-col  pro-main rounded-2xl mt-20">
			<div className="flex flex-row  justify-between items-center">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Icons8_flat_opened_folder.svg/1200px-Icons8_flat_opened_folder.svg.png" className="w-16 h-16" alt="" />
				<div className="flex flex-row">
					<a href={gitlink} className="git-logo" target="_blank" rel="noreferrer"><svg fill="#64FFDA" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
					<a href={extralink} rel="noreferrer" target="_blank" className=" ml-5"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						width="30" height="30"
						viewBox="0 0 30 30"
						className="fill-current text-white"
					><path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path></svg></a>
				</div>
			</div>
			<div className="content flex flex-col gap-5 mt-5">
				<h1 className="text-2xl font-bold justify-start">{title}</h1>
				<h6 className="opacity-25 flex justify-start">{des}</h6>
			</div>
			<div className="w-72 mt-5">
				<div className="grid grid-cols-3 label-main">
					<span>Typescript</span>
					<span>Reactjs</span>
					<span>GraphQL</span>
					<span>Nodejs</span>
					<span>MongoDB</span>
				</div>
			</div>

		</div >
	)
}
export default Project