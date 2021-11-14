import styled from "styled-components";

export const Container = styled.section`
	background-color: ${(props) => props.theme.colors.backgroundPrimary};
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const PresentationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: ${(props) => (props.title === true ? "15px" : "0")};
	margin: 35px 0 35px 0;
`;

export const Presentation = styled.div`
	color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: center;
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	align-items: center;
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
		font-size: 30px;
		font-weight: 300;
		margin-bottom: 25px;
	}

	.presentation--pic {
		background-image: url("https://via.placeholder.com/300x300");
		width: 90px;
		height: 90px;
		border-radius: 25px;
		background-position: center;
	}

	.presentation--my-stacks {
		margin-top: 70px;
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

export const PortfolioItem = styled.section`
	width: 320px;
	min-height: 124px;
	margin-bottom: 25px;
	align-self: center;
	background: ${(props) => props.bgColor};
	color: white;
`;
