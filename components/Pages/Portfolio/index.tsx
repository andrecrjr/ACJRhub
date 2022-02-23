import React from "react";
import {
	ContainerPortfolio,
	PresentationContainer,
	Presentation,
} from "../styles";
import Link from "next/link";
import {PortfolioList, PortfolioItem, PortfolioItemList} from "./style";

export const Portfolio: React.FC = () => {
	return (
		<ContainerPortfolio id='portfolio'>
			<PresentationContainer hasTitle='true'>
				<Presentation data-aos='fade-up' data-grid='portfolio-grid'>
					<div className='portfolio--title'>Portfolio Projects</div>
					<div className='portfolio--description'>
						Projects developing for studying purposes about Front-end in
						general, ReactJS, NextJS, and even Telegram Bots
					</div>
				</Presentation>
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
		</ContainerPortfolio>
	);
};
