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

	[data-grid='stack-grid'] {
		margin-top: 70px;
	}

	[data-grid='welcome-grid'] {
		margin-top: 50px;
		.presentation--world {
			&:after {
				content: '';
				right: -15px;
				/* Remove display: inline-block if not required to be on the same line as text etc */
				display: inline-block;
				background-color: #d4d4d4;
				width: 10px;
				/* Set height to the line height of .text */
				height: 20px;
				margin-left: 10px;
				-webkit-animation: blink 1s step-end infinite;
				animation: blink 1s step-end infinite;
			}
			@-webkit-keyframes blink {
				0% {
					opacity: 1;
				}
				50% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}

			@keyframes blink {
				0% {
					opacity: 1;
				}
				50% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
		}

		@media (min-width: 767px) {
			display: grid;
			width: 100%;
			height: auto;
			grid-template-columns: auto;
			grid-template-rows: auto;
			margin: 125px 0 0 0;
			.presentation--world {
				font-size: 40px;
				text-align: left;
				positioon: relative;
				&:after {
					height: 30px;
				}
			}
			.social-network {
				margin-top: 0;
				margin-right: 80px;
				a {
					width: 55px;
				}
			}
		}
		@media (min-width: 980px) {
			.presentation--world {
				font-size: 45px;
				text-align: left;
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
