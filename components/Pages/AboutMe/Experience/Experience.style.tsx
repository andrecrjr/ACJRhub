import styled from "styled-components";


export const ExperienceSection = styled.section`
    width:"100%";
    display:flex;
    flex-direction: column;
    
    .experience__description{
        font-size: 1rem;        
    }

    .experience__section{
        margin-top:2rem;
        h5{
            font-size: 1.25rem;
        }
        .experience__role{
            margin-bottom:0.9rem;
        }
        ul{
            padding-left:1.3rem;
        }
        .experience__section--paragraph{
             font-size: 1.1rem;
             margin-top: 1rem;
        }
        
    }
    .experience__section--button{
        margin-top: 4rem;
        background:unset;
        border:2px solid white;
        color:white;
        padding:16px;
        border-radius: 8px;
        font-size: 1rem;
        font-weight:bold;
        cursor:pointer;
        display:flex;
        width:fit-content;
        text-decoration: none;
        align-self:center;
        &:hover{
            transform: scale(105%);
        }
    }
`

export const ExperienceTitle = styled.h4`
    margin-bottom:0.9rem;
    font-size: 1.3rem;
`