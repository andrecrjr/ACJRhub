import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Head from "next/dist/shared/lib/head";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ServerStyleSheet } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
 margin:0;
 padding:0;
}

body{
	font-family: ${(props) => props.theme.fontFamily};
}
`;

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init({ duration: 1600 });
	}, []);
	return (
		<>
			<Head>
				<title>ACJRHUB - Portfolio do Ac Junior</title>
			</Head>
			<ThemeProvider theme={theme}>
				{" "}
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
