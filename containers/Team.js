import React from 'react';
import Image from 'next/image';

import { teamImages } from '../constants/consants';

const TeamImage = ({ url, name }) => {
	return (
		<div className="text-center p-4">
			<Image src={url} height="auto" width="auto" />
			<p>{name}</p>
		</div>
	);
};

const Team = () => {
	return (
		<div className="w-full text-purple p-4 md:p-6 md:pt-20 bg-lightPurple bg-purple bg-teams-pattern bg-cover bg-center">
			<h3 className="text-4xl md:text-6xl">Our Team</h3>
			<p className="pt-4 mb-6">
				With several offices in Ukraine and beyond, you’re more than
				welcome to come to visit us at any convenient time and meet
				your team in person.
			</p>

			<div className="grid grid-cols-2 md:grid-cols-5">
				{teamImages.map((member) => (
					<TeamImage
						url={member.url}
						name={member.name}
						key={member.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Team;
