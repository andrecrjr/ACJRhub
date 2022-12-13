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
