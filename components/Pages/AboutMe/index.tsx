import React from "react";
import { AboutMeContainer } from "./style";
import { PresentationContainer, Presentation } from "../styles";

export const AboutMe = () => {
	return (
		<AboutMeContainer id='about-me'>
			<PresentationContainer>
				<Presentation>About me!</Presentation>
			</PresentationContainer>
			<Presentation>
				<p data-aos='fade-right'>
					System Analyst graduated in Bachelor of Information System, working as
					Fullstack Developer in the last 3 years, but now want to focus in{" "}
					<span className='bold-mark'>Front End</span>.
				</p>
			</Presentation>
			<Presentation>
				<p data-aos='fade-right'>
					Fell in love in Blockchains and Cryptocurrency in general, fascinated
					by the power in a future Web 3.0
				</p>
			</Presentation>
			<Presentation>
				<p data-aos='fade-right'>
					I love to watch animes and read some mangas as my favorit passtime,
					and of course playing Games a lot!!
				</p>
			</Presentation>
		</AboutMeContainer>
	);
};
