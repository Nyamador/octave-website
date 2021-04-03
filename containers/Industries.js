import React from 'react';
import Image from 'next/Image';

import { industryImages } from '../constants/consants';

const Industry = ({ url, name }) => {
	return (
		<div className="p-4 text-center mb-2">
			<Image src={url} height="50px" width="50px" />
			<p>{name}</p>
		</div>
	);
};

const Industries = () => {
	return (
		<div className="w-full text-purple p-4 md:p-6 md:pt-20">
			<h3 className="text-4xl md:text-6xl">Our Industries...</h3>
			<p className="pt-4">
				With several offices in Ukraine and beyond, you’re more than
				welcome to come to visit us at any convenient time and meet
				your team in person.
			</p>

			<section className="grid grid-cols-2 md:grid-cols-4">
				{industryImages.map((industryItem) => (
					<Industry
						url={industryItem.url}
						key={industryItem.id}
						name={industryItem.name}
					/>
				))}
			</section>
		</div>
	);
};

export default Industries;
