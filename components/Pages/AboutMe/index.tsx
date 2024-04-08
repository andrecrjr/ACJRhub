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
			<section>
				<h4>Experience</h4>
				<p>I'm proficient in a variety of front-end technologies and frameworks, including HTML, CSS, Vanilla JavaScript, and React. 
				I have experience in responsive web design, accessibility, and web performance optimization.</p>
			</section>
			<section>
				<h4>Skill</h4>
				<p>I'm proficient in a variety of front-end technologies and frameworks, including HTML, CSS, Vanilla JavaScript, and React. 
				I have experience in responsive web design, accessibility, and web performance optimization.</p>
			</section>
			<button>
				Download my Resumeé
			</button>
		</AboutMeContainer>
	);
};
