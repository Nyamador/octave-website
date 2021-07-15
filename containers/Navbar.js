import React from 'react';
import Image from 'next/image';

const Navbar = ({onMenuClick}) => {
	return (
		<nav className="flex flex-row bg-transparent p-4 md:p-10">
			<div className="flex flex-row items-center">
				<Image
					src="/svg/octave_logo.svg"
					height="20px"
					width="20px"
				/>

				<p className="text-white ml-2 font-bold">Octave Systems</p>
			</div>

			<button className="flex flex-row items-center ml-auto outline:none text-white" onClick={() => onMenuClick()}>
				Menu &nbsp;&nbsp;
				<Image src="/svg/menu.svg" height="16px" width="22px" />
			</button>
		</nav>
	);
};

export default Navbar;
