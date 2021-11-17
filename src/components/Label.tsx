import '../css/label.css'
const Label = ({ no }: any) => {
	switch (no) {

		case '1':

			return (
				<div className="grid grid-cols-3 bg-cover">
					<span>Typescript</span>
					<span>Reactjs</span>
					<span>GraphQL</span>
					<span>Nodejs</span>
					<span>MongoDB</span>
				</div>
			)
		case '2':

			return (
				<div className="grid grid-cols-3 bg-cover">
					<span>Typescript</span>
					<span>Reactjs</span>
					<span>GraphQL</span>
					<span>Nodejs</span>
					<span>MongoDB</span>
				</div>
			)
		case '3':

			return (
				<div className="grid grid-cols-3 bg-cover">
					<span>Typescript</span>
					<span>Reactjs</span>
					<span>GraphQL</span>
					<span>Nodejs</span>
					<span>MongoDB</span>
				</div>
			)
		default:
			return (
				<div>hi</div>
			)
	}
}
export default Label