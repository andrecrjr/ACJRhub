import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Head from 'next/dist/shared/lib/head';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script';

interface ThemeType {
	fontFamily: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
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
			<Script
				strategy="afterInteractive"
				async
				src={'https://www.googletagmanager.com/gtag/js?id=G-YCSLXN1PVV'}
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){
							dataLayer.push(arguments);
						}
						gtag('js', new Date());
						gtag('config', 'G-YCSLXN1PVV');
				`}
			</Script>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
