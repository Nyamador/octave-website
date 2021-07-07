import React from 'react';

const Footer = () => {
	return (
		<footer className="h-auto bg-purple p-4 md:p-6 md:p-20 text-white">
			<div className="md:h-1/2 mb-12">
				<h3 className="text-2xl md:text-6xl md:mb-4">Got a project idea?</h3>
				<p className="md:text-4xl">Let's talk about it.</p>
			</div>

			<div className="flex flex-col md:flex-row">
				<div className="w-6/12">
					<a href="mailto:hello@octavesystems.com" className="md:text-xl leading-snug underline hover:no-underline">
						<p className="font-light">hello@octavesystems.com</p>
					</a>

				</div>
				<div className="w-6/12 grid grid-cols-2 md:grid-cols-3 gap-4">
					<div>
						<p>Facebook</p>
					</div>

					<div>
						<p>Instagram</p>
					</div>
					
					<div>
						<p>Dribbble</p>
					</div>
					
					<div>
						<p>Behance</p>
					</div>					
				</div>
			</div>
		</footer>
	);
};

export default Footer;
