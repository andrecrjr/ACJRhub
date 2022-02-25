import styled from "styled-components";

export const Container = styled.section`
	background-color: ${(props) => props.theme.colors.backgroundPrimary};
	min-height: 100vh;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
`;



export const PresentationContainer = styled.div<{ hasTitle?: String }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: ${(props) => (props.hasTitle === "true" ? "15px" : "0")};
	[data-grid="welcome-grid"] {
		margin-top: 60px;
		@media (min-width: 767px) {
			display: grid;
			width: 100%;
			height: auto;
			grid-template-columns: ${(props) => props.theme.gridWelcome};
			grid-template-rows: auto auto;
			margin: 70px 0 0 0;
			.presentation--world {
				font-size: 40px;
				text-align: left;
			}
			.presentation--pic {
				width: 225px;
				height: 280px;
				background-size: 225px 280px;
				grid-row: span 2;
			}
			.social-network {
				margin-top: 0;
				margin-right: 40px;
				a {
					width: 55px;
				}
			}
		}
		@media (min-width: 980px) {
			.presentation--world {
				font-size: 45px;
				text-align: left;
				margin-right: 50px;
			}
		}
	}

	[data-grid="portfolio-grid"] {
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
	}
`;

export const Presentation = styled.div<{ row?: String }>`
	color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: center;
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	align-items: center;
	.bold-mark {
		font-weight: bold;
		display: inline;
	}
	.social-network {
		display: flex;
		justify-content: row;
		margin-top: 50px;
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
	}

	.presentation--world {
		font-size: 25px;
		font-weight: 300;
		margin-bottom: 25px;
		text-align: center;
	}

	.presentation--pic {
		width: 80px;
		height: 100px;
		background-size: 80px 100px;
		border-radius: 25px;
		background-position: center;
	}

	.presentation--my-stacks {
		margin-top: 35px;
		display: flex;
		flex-direction: column;

		svg {
			width: 40px;
			height: 40px;
			align-self: center;
			margin-right: 40px;
			&:last-child {
				margin-right: 0;
			}
		}
	}
	.presentation--techstacks {
		margin: 0 auto;
	}
`;

export const ContainerPortfolio = styled(Container)`
	padding: 25px 0 20px;
	background: #404273;
`;

Container.defaultProps = {
  theme: {
    colors: {
      backgroundPrimary: "green"
    }
  }
}

Presentation.defaultProps = {
  theme: {
    colors: {
      primary:"blue"
    }
  }
}