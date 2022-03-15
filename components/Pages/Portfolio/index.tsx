import React from "react";
import {
	PresentationContainer,
} from "../styles";
import Link from "next/link";
import {PortfolioContainer, PortfolioList, PortfolioItem, PortfolioItemList, PortfolioPresentation, PortfolioItemImage} from "./style";

export const Portfolio: React.FC = () => {
	return (
		<PortfolioContainer id='portfolio'>
				<PortfolioPresentation data-aos='fade-up'>
					<div className='portfolio--title'>Portfolio Projects</div>
					<div className='portfolio--description'>
						Projects developing for studying purposes about Front-end in
						general, ReactJS, NextJS, and even Telegram Bots
					</div>
				</PortfolioPresentation>
			<PortfolioList data-aos='fade-up'>
        <Link href='https://spotiflex.vercel.app/' passHref>
					<PortfolioItem
						target='_blank'
          >
          <PortfolioItemImage
              bgImg='/img/spotiflex.png'>
          </PortfolioItemImage>
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
          >
            <PortfolioItemImage
              bgImg='/img/animebonds.png'>
               </PortfolioItemImage>
						<h1>Animebonds</h1>
						<PortfolioItemList>
							<li>Create React App</li>
							<li>Javascript</li>
							<li>Apollo Graphql</li>
						</PortfolioItemList>
					</PortfolioItem>
				</Link>
				<PortfolioItem data-aos='fade-up'>
					<p>Coming Soon!</p>
				</PortfolioItem>
			</PortfolioList>
		</PortfolioContainer>
	);
};
