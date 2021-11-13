import React from 'react'
import { ContainerPortfolio, PresentationContainer, Presentation, PortfolioItem } from '../styles'

export const Portfolio:React.FC = () => {
	return (
		<ContainerPortfolio id="portfolio">
			<PresentationContainer title='true'>
					<Presentation title='true' data-aos='fade-up'>
						Portfolio
					</Presentation>
					<Presentation data-aos='fade-up'>
						Projetos utilizados para fins de estudo
						tanto de React, quanto para desenvolvimento 
						front-end em geral.
					</Presentation>
			</PresentationContainer>
			<PortfolioItem data-aos='fade-up' bgColor="green">
				<h1>Spotiflex</h1>
			</PortfolioItem>
			<PortfolioItem data-aos='fade-up' bgColor="black">
				<h1>Animebonds</h1>
			</PortfolioItem>
		</ContainerPortfolio>
	)
}
