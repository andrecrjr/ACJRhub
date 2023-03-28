import React from 'react';
import {
	AboutMeContainer,
	AboutMePresentation,
	AboutMePresentationContainer
} from './style';
import Aboutme from './AboutMe.json';

export const AboutMe = () => {
	return (
		<AboutMeContainer id="about-me">
			<AboutMePresentationContainer>
				<AboutMePresentation className="title">About me!</AboutMePresentation>
			</AboutMePresentationContainer>
			{Aboutme.map((item, index) => {
				return (
					<AboutMePresentation key={index}>
						<p data-aos="fade-left">{item.description}</p>
					</AboutMePresentation>
				);
			})}
		</AboutMeContainer>
	);
};
