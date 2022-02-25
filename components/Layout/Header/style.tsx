import styled from "styled-components";

export const MenuLink = styled.div`
	text-decoration: none;
	cursor: pointer;
	margin-right: 15px;
	font-size: 0.8rem;
	border-bottom: 1px dotted white;
	@media (min-width: 767px) {
		margin-right: 25px;
		font-size: 1.1rem;
		border-bottom: 0;
	}
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
	.header--menu {
		display: flex;
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

GlobalHeader.defaultProps = {
  theme: {
    logoFont: "'Work Sans', sans-serif",
    fontFamily: "'Work Sans', sans-serif",
    gridWelcome: "465px 235px",
    gridHeader: "150px 550px",
    heights: {
      menuHeight: "2.5rem",
    },
    colors: {
      primary: "#fafafa",
      backgroundPrimary: "#2C2D47",
    },
  }
}
