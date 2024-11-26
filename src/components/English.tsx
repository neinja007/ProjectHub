const English = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 30'>
			<clipPath id='t'>
				<path d='M25,15 h25 v15 z v15 h-25 z h-25 v-15 z v-15 h25 z' />
			</clipPath>
			<path d='M0,0 v30 h50 v-30 z' fill='#00247d' />
			<path d='M0,0 L50,30 M50,0 L0,30' stroke='#fff' strokeWidth='6' />
			<path d='M0,0 L50,30 M50,0 L0,30' clipPath='url(#t)' stroke='#cf142b' strokeWidth='4' />
			<path d='M25,0 v30 M0,15 h50' stroke='#fff' strokeWidth='10' />
			<path d='M25,0 v30 M0,15 h50' stroke='#cf142b' strokeWidth='6' />
		</svg>
	);
};

export default English;
