import React from "react";
import {
	AboutMeContainer,
	AboutMePresentation,
	AboutMePresentationContainer,
} from "./style";

export const AboutMe = () => {
	return (
		<AboutMeContainer id='about-me'>
			<AboutMePresentationContainer>
				<AboutMePresentation className='title'>About me!</AboutMePresentation>
			</AboutMePresentationContainer>
			<AboutMePresentation>
				<p data-aos='fade-left'>
					System Analyst graduated in Bachelor of Information System, working as
					Fullstack Developer in the last {new Date().getFullYear() - 2018}{" "}
					years, but always on focus into{" "}
					<span className='bold-mark'>Front End</span>.
				</p>
			</AboutMePresentation>
			<AboutMePresentation>
				<p data-aos='fade-left'>
					Fell in love in Blockchains and Cryptocurrencies in general, fascinated
					by the decentralized power in a future Web 3.0!
				</p>
			</AboutMePresentation>
			<AboutMePresentation>
				<p data-aos='fade-left'>
					I love to watch Animes and read some Mangas, that&apos;s my favorite passtime,
					and of course playing games a lot, like Terraria!
				</p>
			</AboutMePresentation>
		</AboutMeContainer>
	);
};
