import anime from 'animejs'
const Loading = () => {
	const anim = anime.timeline({
		loop: true,
		direction: 'alternate',
	});

	anim
		.add({
			targets: '#hexagon path',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutQuart',
			duration: 2000,
			delay: function (el, i) { return i * 250 },
		})
		.add({
			targets: '#hexagon #B',
			duration: 1000,
			opacity: 1,
			easing: 'easeInOutQuart'
		});

	return (
		<div className="container" id="app">
			<svg id="hexagon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				<g>
					<g id="B" transform="translate(36, 33)" fill="#64FFDA" font-family="Calibre-Medium, Calibre" font-size="50" font-weight="400" letter-spacing="4.16666603">
						<text>
							<tspan x="0.141666985" y="33">B</tspan>
						</text>
					</g>
					<path
						stroke="#64FFDA"
						stroke-width="5"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M 50, 5
         L 11, 27
         L 11, 72
         L 50, 95
         L 89, 73
         L 89, 28 z"
					/>
				</g>
			</svg>
		</div>
	)
}
export default Loading