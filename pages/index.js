import Head from 'next/head';
import Image from 'next/image';

import HeroSection from '../containers/HeroSection';
import TechStack from '../containers/TechStack';
import DevCycle from '../containers/DevCycle';
import Industries from '../containers/Industries';
import Team from '../containers/Team';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Octave Systems | Homepage </title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap"
					rel="stylesheet"
				></link>
			</Head>

			<main>
				<HeroSection />
				<TechStack />
				<DevCycle />
				<Industries />
				<Team />
			</main>
		</div>
	);
}
