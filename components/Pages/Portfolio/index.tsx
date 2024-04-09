import React from 'react';
import Link from 'next/link';
import {
	PortfolioContainer,
	PortfolioList,
	PortfolioItem,
	PortfolioItemList,
	PortfolioPresentation,
	PortfolioItemImage,
	PortfolioHeader,
	PortfolioDescriptionContainer,
	PortfolioDescription,
	PortfolioSoon
} from './Portfolio.style';

import PortfolioData from './Portfolio.json';

export const Portfolio: React.FC = () => {
	return (
		<PortfolioContainer id="portfolio">
			<PortfolioPresentation data-aos="fade-up">
				<div className="portfolio--title"><h2>Portfolio Projects</h2></div>
				<div className="portfolio--description">
					Projects developing for studying purposes about Front-end in general,
					ReactJS, NextJS, and even Telegram Bots
				</div>
			</PortfolioPresentation>
			<PortfolioList data-aos="fade-up">
				{PortfolioData.map((portfolio, index) => (
					<Link href={portfolio.projectURL} passHref key={index}>
						<PortfolioItem target="_blank">
							<PortfolioItemImage bgImg={portfolio.projectImage} />
							<PortfolioDescriptionContainer>
								<PortfolioHeader>{portfolio.projectName}</PortfolioHeader>
								<PortfolioDescription>
									{portfolio.projectDescription}
								</PortfolioDescription>
								<PortfolioItemList>
									{portfolio.projectTags.map((tag) => (
										<li key={tag}>{tag}</li>
									))}
								</PortfolioItemList>
							</PortfolioDescriptionContainer>
						</PortfolioItem>
					</Link>
				))}
			</PortfolioList>
			<PortfolioList data-aos="fade-up">
				<PortfolioItem>
					<PortfolioItemImage bgImg="/img/unfinished.jpg" />
					<PortfolioSoon style={{ padding: '15px' }}>
						More coming soon!
					</PortfolioSoon>
				</PortfolioItem>
			</PortfolioList>
		</PortfolioContainer>
	);
};
