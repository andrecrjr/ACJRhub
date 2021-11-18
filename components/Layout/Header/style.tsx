import styled from "styled-components";

export const MenuLink = styled.div`
	text-decoration: none;
	cursor: pointer;
`;

export const GlobalHeader = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: transparent;
	border-bottom: 1px solid white;
	height: ${(props) => props.theme.heights.menuHeight};
	color: ${(props) => props.theme.colors.primary};
	position: absolute;
	top: 0;
	width: 100%;
	.header--logo {
		font-size: 1rem;
		letter-spacing: 3px;
		font-weight: 200;
		font-family: ${(props) => props.theme.logoFont};
	}
	@media (min-width: 767px) {
		display: grid;
		grid-template-columns: ${(props) => props.theme.gridHeader};
		justify-content: center;
		.header--menu {
			justify-self: flex-end;
		}
	}
`;
