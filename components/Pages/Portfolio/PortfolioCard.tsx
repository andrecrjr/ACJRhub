import React from "react";
import Link from "next/link";


import { PortfolioDescription, 
	PortfolioDescriptionContainer, 
	PortfolioHeader, 
	PortfolioItem, 
	PortfolioItemImage, 
	PortfolioItemList, 
	PortfolioList, PortfolioListButtons } from "./Portfolio.style";
import PortfolioData from './Portfolio.json';


const PortfolioCardsList = () => {
  return (<PortfolioList data-aos="fade-up">
				{PortfolioData.map((portfolio, index) => (
						<PortfolioItem key={index}>
							{portfolio.inProgress && <span className="portfolio--wip" title="This website still being in active development">#WIP</span> || 
							<span className="portfolio--wip">
								Not active development </span>}
							{portfolio.projectImage && <PortfolioItemImage bgImg={portfolio.projectImage} />}
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
							{portfolio.projectURL && (
								<PortfolioListButtons>
									<Link href={portfolio.projectURL} passHref>
										<a>
										 DEMO
										</a>
									</Link>
									<Link href={portfolio.githubUrl} passHref>
										<a>
										Github
										</a>
									</Link>
								</PortfolioListButtons>
							)}
						</PortfolioItem>
				))}
			</PortfolioList>);
};

export default PortfolioCardsList