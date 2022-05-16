import React from "react";
import Link from "next/link";
import {
	PortfolioContainer,
	PortfolioList,
	PortfolioItem,
	PortfolioItemList,
	PortfolioPresentation,
	PortfolioItemImage,
	PortfolioHeader,
	PortfolioSoon,
} from "./style";

export const Portfolio: React.FC = () => {
	return (
		<PortfolioContainer id='portfolio'>
			<PortfolioPresentation data-aos='fade-up'>
				<div className='portfolio--title'>Portfolio Projects</div>
				<div className='portfolio--description'>
					Projects developing for studying purposes about Front-end in general,
					ReactJS, NextJS, and even Telegram Bots
				</div>
			</PortfolioPresentation>
			<PortfolioList data-aos='fade-up'>
				<Link href='https://spotiflex.vercel.app/' passHref>
					<PortfolioItem target='_blank'>
						<PortfolioItemImage bgImg='/img/spotiflex.png'/>
						<PortfolioHeader>Spotiflex</PortfolioHeader>
						<PortfolioItemList>
							<li>Nextjs</li>
							<li>Typescript</li>
							<li>REST API</li>
						</PortfolioItemList>
					</PortfolioItem>
				</Link>
				<Link href='https://animebonds.surge.sh/' passHref>
					<PortfolioItem target='_blank'>
						<PortfolioItemImage bgImg='/img/animebonds.png'/>
						<PortfolioHeader>Animebonds</PortfolioHeader>
						<PortfolioItemList>
							<li>Create React App</li>
							<li>Javascript</li>
							<li>Apollo Graphql</li>
						</PortfolioItemList>
					</PortfolioItem>
				</Link>
				<PortfolioItem>
				<PortfolioItemImage bgImg='/img/unfinished.jpg'/>
					<PortfolioSoon style={{padding:"15px"}}>More coming soon!</PortfolioSoon>
				</PortfolioItem>
			</PortfolioList>
		</PortfolioContainer>
	);
};
