import styled from "styled-components";

export const GlobalContainer = styled.section`
	background: #2C2D47;
	width: 100%;
	height: auto;
`;

export const GlobalHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color:transparent;
	border-bottom: 1px solid white;
	height: ${(props) => props.theme.heights.menuHeight};
	color: ${(props) => props.theme.colors.primary};
	.header--logo {
		font-size: 1rem;
		letter-spacing: 3px;
		font-weight: 200;
		font-family: ${(props) => props.theme.logoFont};
	}
`;
