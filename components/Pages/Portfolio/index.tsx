import React from "react";
import {
	ContainerPortfolio,
	PresentationContainer,
	Presentation,
} from "../styles";
import Link from "next/link";
import { PortfolioList, PortfolioItem } from "./style";

export const Portfolio: React.FC = () => {
	return (
		<ContainerPortfolio id='portfolio'>
			<PresentationContainer hasTitle='true'>
				<Presentation data-aos='fade-up'>Portfolio</Presentation>
				<Presentation data-aos='fade-up'>
					Projetos utilizados para fins de estudo tanto de React, quanto para
					desenvolvimento front-end em geral.
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
					</PortfolioItem>
				</Link>
				<Link href='https://animebonds.surge.sh/' passHref>
					<PortfolioItem
						data-aos='fade-up'
						target='_blank'
						bgColor='/img/animebonds.png'
					>
						<h1>Animebonds</h1>
					</PortfolioItem>
				</Link>
				<PortfolioItem bgColor={""} data-aos='fade-up'>
					<p>Coming Soon!</p>
				</PortfolioItem>
			</PortfolioList>
		</ContainerPortfolio>
	);
};
