import React from 'react';
import {
	AboutMeContainer,
	AboutMePresentation,
	AboutMePresentationContainer
} from './About.style';
import Skill from './Skill';
import Experience from './Experience';

export const AboutMe = (props: { filteredSkills: [] }) => {
	return (
		<AboutMeContainer id="about-me">
			<AboutMePresentationContainer data-aos="fade-up">
				<AboutMePresentation className="title">
					<h2>About me!</h2>
				</AboutMePresentation>
			</AboutMePresentationContainer>
			<Experience />
			<Skill {...props} />
		</AboutMeContainer>
	);
};
