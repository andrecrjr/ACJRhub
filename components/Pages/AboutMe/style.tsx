import { Container, PresentationContainer } from '../styles';
import styled from 'styled-components';
import { Presentation } from '../styles';

export const AboutMeContainer = styled(Container)`
	background-color: ${(props) => props.theme.colors.backgroundAboutMe};
	color: white;
	overflow: hidden;
	@media screen and (min-width:768px) {		
		display:grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr auto;
		gap: 2rem;
		padding: 0 6rem 1rem 6rem;
	}
	`;

export const AboutMePresentation = styled(Presentation)`
	margin-bottom: 2rem;
	position: relative;
	&:not(.title) {
		margin-bottom: 5rem;
		max-width: 768px;
		align-self: center;
	}
	&:not(.title)::before {
		content: '';
		position: absolute;
		bottom: 45%;
		left: 0;
		display: block;
		border-radius: 100%;
		width: 25px;
		height: 25px;
		background: white;
		animation: 200ms spin;
	}
	@media (min-width: 767px) {
		margin-top: 45px;
		&:not(.title)::before {
			bottom: 25%;
		}
	}
`;

export const AboutMePresentationContainer = styled(PresentationContainer)`
	grid-column-start: 1;
	grid-column-end:  span 2;
	justify-content: unset;
	height:fit-content;
`;
