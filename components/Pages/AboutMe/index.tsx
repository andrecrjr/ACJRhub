import React from "react";
import { AboutMeContainer, AboutMePresentation } from "./style";
import { PresentationContainer, Presentation,  } from "../styles";

export const AboutMe = () => {
	return (
		<AboutMeContainer id='about-me'>
			<PresentationContainer>
				<AboutMePresentation className="title">About me!</AboutMePresentation>
			</PresentationContainer>
			<AboutMePresentation>
				<p data-aos='fade-left'>
					System Analyst graduated in Bachelor of Information System, working as
					Fullstack Developer in the last 3 years, but now want to focus in{" "}
					<span className='bold-mark'>Front End</span>.
				</p>
			</AboutMePresentation>
			<AboutMePresentation>
				<p data-aos='fade-left'>
					Fell in love in Blockchains and Cryptocurrency in general, fascinated
					by the power in a future Web 3.0
				</p>
			</AboutMePresentation>
			<AboutMePresentation>
				<p data-aos='fade-left'>
					I love to watch animes and read some mangas as my favorite passtime,
					and of course playing some games a lot!
				</p>
			</AboutMePresentation>
		</AboutMeContainer>
	);
};
