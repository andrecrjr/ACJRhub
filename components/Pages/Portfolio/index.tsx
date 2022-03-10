import React from "react";
import {
	PresentationContainer,
} from "../styles";
import Link from "next/link";
import {PortfolioContainer, PortfolioList, PortfolioItem, PortfolioItemList, PortfolioPresentation} from "./style";

export const Portfolio: React.FC = () => {
	return (
		<PortfolioContainer id='portfolio'>
			<PresentationContainer hasTitle='true'>
				<PortfolioPresentation data-aos='fade-up'>
					<div className='portfolio--title'>Portfolio Projects</div>
					<div className='portfolio--description'>
						Projects developing for studying purposes about Front-end in
						general, ReactJS, NextJS, and even Telegram Bots
					</div>
				</PortfolioPresentation>
			</PresentationContainer>
			<PortfolioList>
				<Link href='https://spotiflex.vercel.app/' passHref>
					<PortfolioItem
						data-aos='fade-up'
						target='_blank'
						bgColor='/img/spotiflex.png'
					>
						<h1>Spotiflex</h1>
						<PortfolioItemList>
							<li>Nextjs</li>
							<li>Typescript</li>
							<li>REST API</li>
						</PortfolioItemList>
					</PortfolioItem>
				</Link>
				<Link href='https://animebonds.surge.sh/' passHref>
					<PortfolioItem
						data-aos='fade-up'
						target='_blank'
						bgColor='/img/animebonds.png'
					>
						<h1>Animebonds</h1>
						<PortfolioItemList>
							<li>Create React App</li>
							<li>Javascript</li>
							<li>Apollo Graphql</li>
						</PortfolioItemList>
					</PortfolioItem>
				</Link>
				<PortfolioItem bgColor={""} data-aos='fade-up'>
					<p>Coming Soon!</p>
				</PortfolioItem>
			</PortfolioList>
		</PortfolioContainer>
	);
};
