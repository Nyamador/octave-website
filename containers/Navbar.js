import React from 'react';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className="flex flex-row bg-purple p-4 md:p-6 bg-hero-pattern bg-cover bg-center">
			<div className="flex flex-row items-center">
				<Image
					src="/svg/octave_logo.svg"
					height="40px"
					width="40px"
				/>

				<p className="ml-2 font-bold">Octave Systems</p>
			</div>
		</nav>
	);
};

export default Navbar;
