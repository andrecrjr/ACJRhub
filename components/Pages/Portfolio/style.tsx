import styled from "styled-components";
import { Container, Presentation } from "../styles"

export const PortfolioList = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	@media (min-width: 767px) {
		flex-direction: row;
	}
`;

export const PortfolioPresentation = styled(Presentation)`
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
`;

export const PortfolioContainer = styled(Container)`
	padding: 25px 20px;
	background: #52528d;
`;

export const PortfolioItem = styled.a`
	width: 250px;
	min-height: 150px;
	margin-bottom: 25px;
	align-self: center;
	border-radius: 8%;
	box-shadow: #333333 0px 3px 14px -4px;
	text-decoration: none;
	display:grid;
  background:#21174e;
  h1{
    font-size:20px;
    color:white;
    padding-left:10px;
  }
`;

export const PortfolioItemImage = styled.div<{ bgImg: String }>`
	background: ${(props) => `url("${props.bgImg}")`};
  background-position: fixed;
	background-size: 100% 100%;
	background-repeat: no-repeat;
  height:150px;
  transition:200ms transform ease-in;
  &:hover{
     transform:scale(1.3);

  }
  iframe{
    text-align:center;
  }
`

export const PortfolioItemList = styled.ul`
	list-style: none;
	li {
		font-size: 0.9rem;
    padding:5px 25px;
    color:#eee;
	}
`;
