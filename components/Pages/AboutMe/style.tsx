import { Container } from "../styles";
import styled from "styled-components";
import {Presentation} from "../styles";

export const AboutMeContainer = styled(Container)`
	background-color: #366186;
`;

export const AboutMePresentation = styled(Presentation)`
  margin-bottom:2rem;
  position:relative;
  padding-left:50px;
  &:not(.title){
    align-items:flex-start;
    justify-content:flex-start;
    margin-bottom:5rem;
  }
  &:not(.title)::before{
    content:"";
    position:absolute;
    bottom:50%;
    left:0;
    display:block;
    border-radius:100%;
    width:30px;
    height:30px;
    background:black;
  }
  @media (min-width: 767px) {
    .portfolio--title {
      margin: 45px 0;
    }
    .portfolio--description {
      margin-bottom: 40px;
    }
    &:not(.title)::before{
      bottom:15%;

    }
  }
`
