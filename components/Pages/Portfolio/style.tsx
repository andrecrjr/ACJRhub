import styled from "styled-components";
import {Container, Presentation} from "../styles";

export const PortfolioList = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	flex-wrap:wrap;
	@media (min-width: 767px) {
		flex-direction: row;
	}
`;

export const PortfolioPresentation = styled(Presentation)`
	.portfolio--title {
		margin: 15px 0;
	}
	.portfolio--description {
		margin-bottom: 25px;
	}

	@media (min-width: 767px) {
		.portfolio--title {
			margin: 45px 0;
		}
		.portfolio--description {
			margin-bottom: 40px;
		}
	}
`;

export const PortfolioContainer = styled(Container)`
	padding: 25px 20px;
	background: #52528d;
`;

export const PortfolioHeader = styled.h2`
	font-size: 0.9rem;
	color: white;
	padding-left: 16px;
`;

export const PortfolioItem = styled.a`
	width: 250px;
	min-height: 150px;
	margin-bottom: 25px;
	align-self: center;
	border-radius: 8%;
	box-shadow: #333333 0px 3px 14px -4px;
	text-decoration: none;
	display: grid;
	background: #21174e;
	transition: transform 100ms linear;
	&:hover {
		transform: scale(1.1) !important;
	}
`;

export const PortfolioItemImage = styled.div<{bgImg: String}>`
	background: ${(props) => `url("${props.bgImg}")`};
	background-position: fixed;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	height: 150px;
	transition: 200ms transform ease-in;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	margin-bottom: 8px;
`;

export const PortfolioItemList = styled.ul`
	list-style: none;
	li {
		font-size: 0.77rem;
		padding: 10px 16px;
		color: #eee;
	}
`;

export const PortfolioSoon = styled.h3`
	font-size: 1.2rem;
	color: white;
	align-self: center;
	justify-self: center;
`;
