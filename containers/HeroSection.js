import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import BusinessIcons from '../components/BusinessIcons';

const HeroSection = () => {
	return (
		<div className="md:p-6 bg-purple h-screen md:flex md:flex-row">
			<section className="md:w-6/12 m-auto">
				<p className="font-bold text-grey-200">WE DESIGN UX/UI</p>
				<h1 className="text-6xl mb-4 mt-2">
					Building digital <br></br> products, brands, <br></br> and
					experiences{' '}
				</h1>
				<p className="mt-4">
					We transform your business problems into beautiful creative
					solutions. Let us help you tell your story.
				</p>

				<div className="mt-8 mb-12">
					<Link href="/">
						<a className="border-b-2 border-b-white">
							Connect with us &nbsp;
							<Image
								src="/svg/arrow-right.svg"
								height="13px"
								width="13px"
							/>
						</a>
					</Link>
				</div>

				<BusinessIcons />
			</section>
			<section className="md:w-6/12"></section>
		</div>
	);
};

export default HeroSection;
