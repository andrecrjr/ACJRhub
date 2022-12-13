import styled from 'styled-components';

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
	padding-left: ${(props) => (props.hasTitle === 'true' ? '15px' : '0')};
	[data-grid='welcome-grid'] {
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
`;

export const Presentation = styled.div<{ row?: String }>`
	color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: center;
	flex-direction: ${(props) => (props.row ? 'row' : 'column')};
	align-items: center;
	.bold-mark {
		font-weight: bold;
		display: inline;
	}

	.presentation--world {
		font-size: 25px;
		font-weight: 300;
		margin-bottom: 25px;
		text-align: center;
	}

`;
