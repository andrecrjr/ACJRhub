import { Container, PresentationContainer } from '../styles';
import styled from 'styled-components';
import { Presentation } from '../styles';

export const AboutMeContainer = styled(Container)`
	background: #366186;
	overflow: hidden;
	display:grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr;
`;

export const AboutMePresentation = styled(Presentation)`
	margin-bottom: 2rem;
	position: relative;
	padding-left: 50px;
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
`;
