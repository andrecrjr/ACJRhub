import {Container, PresentationContainer} from "../styles";
import styled from "styled-components";
import {Presentation} from "../styles";

export const AboutMeContainer = styled(Container)`
	background: #366186;
	overflow: hidden;
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
		content: "";
		position: absolute;
		bottom: 50%;
		left: 0;
		display: block;
		border-radius: 100%;
		width: 30px;
		height: 30px;
		border: 2px solid white;
		animation: 200ms spin;
	}
	@media (min-width: 767px) {
		margin-top: 45px;
		&:not(.title)::before {
			bottom: 25%;
		}
	}
	@keyframes spin {
		from {
			transform: translate(20px);
		}
		to {
			transform: translateY(25px);
		}
	}
`;

export const AboutMePresentationContainer = styled(PresentationContainer)``;
