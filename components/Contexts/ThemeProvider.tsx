"use client"
import { theme } from "@/styles/theme";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Aos from 'aos';
import 'aos/dist/aos.css';

const GlobalStyle = createGlobalStyle`
*{
	margin:0;
	padding:0;
}

body{
	font-family: ${(props) => props.theme.fontFamily};
}

a{
	&:hover{
		transition:transform 200ms linear;
	}
	color: ${(props) => props.theme.colors.primary};
	opacity: 0.7;
	transition: opacity 300ms ease-out;
	&:hover{
		opacity: 1;
	}
	&:visited{
		color: ${(props) => props.theme.colors.primary}
	}
}
`;

type Props = {
    children: React.ReactNode
};

export const GlobalThemeProvider = ({children}: Props) => {

	
useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);
    
  return (
        <ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
    	</ThemeProvider>
    );
};
