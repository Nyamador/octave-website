import React from 'react';
import Image from 'next/image';

import { techStackImages } from '../constants/consants';

const Tech = ({ url }) => {
	return <Image src={url} height="100px" width="100px" />;
};

const TechStack = () => {
	return (
		<div className="w-full text-purple p-4 md:p-10 md:pt-20">
			<div className="md:w-6/12">
				<h2 className="text-4xl md:text-6xl">We work with...</h2>
				<p className="pt-4">
					We work with modern and scalable technologies to deliver top
					notch solutions including the following.
				</p>
			</div>

			<div className="overflow-hidden">
				<div className="flex flex-row w-full filter-grayscale">
					{techStackImages.map((image) => (
						<Tech key={image.id} url={image.url} />
					))}
				</div>
			</div>
		</div>
	);
};

export default TechStack;
