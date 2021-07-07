import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import HeroSection from '../containers/HeroSection';
import SideMenu from '../containers/SideMenu'
import TechStack from '../containers/TechStack';
import DevCycle from '../containers/DevCycle';
import Industries from '../containers/Industries';
import Team from '../containers/Team';
import Testimonials from '../containers/Testimonials';
import Footer from '../containers/Footer';

export default function Home() {
	const [menuOpened, setMenuOpened] = useState(false)

	useEffect(() => {
		if (menuOpened) {
			document.classList = "overflow-hidden"
		} else {
			document.classList = ""
		}
	}, [menuOpened])

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
				<HeroSection onMenuClick={() => menuOpened ? setMenuOpened(false) : setMenuOpened(true)}/>
				<TechStack />
				<DevCycle />
				<Industries />
				<Team />
				<Testimonials />
				<Footer />
			</main>
			<SideMenu opened={menuOpened} onClose={() => setMenuOpened(false)}/>
		</div>
	);
}
