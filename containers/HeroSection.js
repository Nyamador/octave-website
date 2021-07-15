import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import BusinessIcons from '../components/BusinessIcons';
import Navbar from './Navbar';

const HeroSection = ({onMenuClick}) => {
	return (
		<div className="bg-purple bg-hero-pattern bg-cover bg-center">
			<Navbar onMenuClick={onMenuClick}/>
			<div className="p-4 md:p-10 h-full md:flex md:flex-row text-white">
				<section className="md:w-6/12">
					<p className="font-bold text-grey-200">WE DESIGN UX/UI</p>
					<h1 className="text-4xl md:text-6xl mb-4 mt-2">
						Building digital <br></br> products, brands, <br></br> and
						experiences{' '}
					</h1>
					<p className="mt-4">
						We transform your business problems into beautiful
						creative solutions. Let us help you tell your story.
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
				<section className="md:w-6/12 flex flex-row justify-center items-center">
					<div className="">
						<img src="/hero_alt.png"/>
					</div>
				</section>
			</div>
		</div>
	);
};

export default HeroSection;
