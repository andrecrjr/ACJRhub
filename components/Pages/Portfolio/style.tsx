import styled from "styled-components";

export const PortfolioList = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	@media (min-width: 767px) {
		flex-direction: row;
	}
`;

export const PortfolioItem = styled.a<{ bgColor: String }>`
	width: 250px;
	min-height: 150px;
	margin-bottom: 25px;
	align-self: center;
	background: ${(props) => `url("${props.bgColor}")`};
	background-position: fixed;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	border-radius: 5%;
	box-shadow: #333333 0px 3px 14px -4px;
	text-decoration: none;
	color: white;
	display: block;
	cursor: pointer;
	text-align: center;
	transition: width 2s, height 2s;
	&:hover {
		width: 300px;
		height: 200px;
	}
`;

export const PortfolioItemList = styled.ul`
	list-style: none;
	z-index: 1px;
	li {
		font-size: 0.85rem;
		text-shadow: 1px 1px 1px #404273;
	}
`;
