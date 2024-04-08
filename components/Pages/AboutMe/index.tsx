import React from 'react';
import {
	AboutMeContainer,
	AboutMePresentation,
	AboutMePresentationContainer
} from './style';
import Aboutme from './AboutMe.json';
import Skill from './Skill';
import Experience from './Experience';

export const AboutMe = () => {
	return (
		<AboutMeContainer id="about-me">
			<AboutMePresentationContainer data-aos="fade-up">
				<AboutMePresentation className="title">About me!</AboutMePresentation>
			</AboutMePresentationContainer>
			<Experience/>
			<Skill />
			<button>
				Download my Resumeé
			</button>
		</AboutMeContainer>
	);
};
