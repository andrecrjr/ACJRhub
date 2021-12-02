import React from "react";
import { AboutMeContainer } from "./style";
import { PresentationContainer, Presentation } from "../styles";

export const AboutMe = () => {
	return (
		<AboutMeContainer id='about-me'>
			<PresentationContainer>
				<Presentation title='true'>Sobre mim</Presentation>
			</PresentationContainer>
			<Presentation title='false'>
				Analista de Sistemas formado em Bacharelado de Sistemas de Informação.
				Atuo na área de Desenvolvimento a mais de 3 anos, como Fullstack
				Developer, mas agora quero seguir o
				<span className='bold-mark'>foco no Front-End</span>.
			</Presentation>
		</AboutMeContainer>
	);
};
