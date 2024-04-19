"use client"
import styled from 'styled-components';

export const PresentationPic = styled.div<{ bgImage: string }>`
	width: 100px;
	background-image: url(${(props) => props.bgImage});
	height: 100px;
	background-size: 100px 100px;
	border-radius: 25px;
	background-position: center;
	background-repeat: no-repeat;
	@media (min-width: 767px) {
		width: 250px;
		height: 280px;
		background-size: 300px 280px;
		grid-row: span 2;
	}
`;

export const SocialNetworkContainer = styled.ul`
	display: flex;
	justify-content: center;
	margin-top: 80px;
	list-style: none;

	li,
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		margin-right: 20px;
		&:last-child {
			margin-right: 0;
		}
	}
`;

export const MyStackContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
`;

export const PresentationTechStack = styled.div`
	margin-right: 15px;
	display: flex;
	align-self: center;
	a {
		width: 3rem;
		margin-right: 20px;
		&:last-child {
			margin-right: 0;
		}
	}
`;
