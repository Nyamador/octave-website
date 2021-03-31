import React from 'react';
import Image from 'next/image';

const BusinessIcon = ({ src, name }) => {
	return (
		<div className="flex flex-row items-center mr-2">
			<Image src={src} height="24px" width="24px" />
			<p className="pl-2">{name}</p>
		</div>
	);
};

const BusinessIcons = () => {
	return (
		<div className="flex flex-row mt-4">
			<BusinessIcon src="/svg/startups_icon.svg" name="Startups" />

			<BusinessIcon
				src="/svg/enterprise_icon.svg"
				name="Enterprise"
			/>

			<BusinessIcon src="/svg/smb_icon.svg" name="SMB" />
		</div>
	);
};

export default BusinessIcons;
