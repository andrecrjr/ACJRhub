import React from 'react';
import Link from 'next/link';
import {
	PortfolioContainer,
	PortfolioList,
	PortfolioItem,
	PortfolioPresentation,
	PortfolioItemImage,
	PortfolioSoon
} from './Portfolio.style';

import PortfolioCardsList from './PortfolioCard';

export const Portfolio: React.FC = () => {
	return (
		<PortfolioContainer id="portfolio">
			<PortfolioPresentation data-aos="fade-up">
				<div className="portfolio--title"><h2>Portfolio Projects</h2></div>
				<div className="portfolio--description">
					Projects using public APIs for studying purposes about Front-end in general,
					ReactJS, NextJS, and ECMAScript at all
				</div>
			</PortfolioPresentation>
			<PortfolioCardsList />
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
