import type { Metadata } from 'next';
import Script from 'next/script';
import { fontPrimaryTheme } from '@/styles/theme';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalThemeProvider } from '@/components/Contexts/ThemeProvider';

export const metadata = {
	title: `ACJR - Portfolio of André Carlos Jr.`,
	description: `André Carlos Jr's Portfolio showcasing projects and works in Front-end development!`,
	robots: 'index, follow'
};

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<Script
					strategy="afterInteractive"
					async
					src={'https://www.googletagmanager.com/gtag/js?id=G-YCSLXN1PVV'}
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{process.env.NODE_ENV !== 'development' &&
						`
						window.dataLayer = window.dataLayer || [];
						function gtag(){
							dataLayer.push(arguments);
						}
						gtag('js', new Date());
						gtag('config', 'G-YCSLXN1PVV');
				`}
				</Script>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin={''}
				/>
				<link href={`${fontPrimaryTheme.urlGoogleFont}`} rel="stylesheet" />
				{
					<meta
						name="google-site-verification"
						content="google504a726bb71d2ea2"
					/>
				}
			</head>
			<body>
				<StyledComponentsRegistry>
					<GlobalThemeProvider>{children}</GlobalThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
