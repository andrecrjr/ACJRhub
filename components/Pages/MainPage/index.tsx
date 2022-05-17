import React, {ReactElement} from "react";
import {Container, PresentationContainer, Presentation} from "../styles";
import {SocialNetwork} from "../../Layout/SocialNetwork";
import {Stacks} from "../../Layout/Stacks";

export default function MainPage({}): ReactElement {
	return (
		<>
			<Container>
				<PresentationContainer>
					<Presentation data-grid='welcome-grid' data-aos='fade-up'>
						<h2 className='presentation--world'>
							<strong>Hello world</strong>
							<br /> I am André Junior!
						</h2>
						<div
							className='presentation--pic'
							style={{
								backgroundImage: `url(${"/img/nerd-2.jpg"})`,
							}}
						></div>
						<div className='social-network'>
							<SocialNetwork
								socialNetworkHref={"linkedin.com/in/andrecrjr"}
								socialNetworkName={"linkedin"}
							/>
							<SocialNetwork
								socialNetworkHref={"instagr.am/andrecrjr"}
								socialNetworkName={"insta"}
							/>
							<SocialNetwork
								socialNetworkHref={"twitter.com/acjuni0r"}
								socialNetworkName={"twitter"}
							/>
							<SocialNetwork
								socialNetworkHref={"github.com/andrecrjr"}
								socialNetworkName={"github"}
							/>
						</div>
					</Presentation>
					<Presentation data-aos='fade-up'>
						<div className='presentation--my-stacks'>
							<h1 className='presentation--world'>
								Fullstack Developer focusing in Front-end Development
							</h1>
							<Stacks />
						</div>
					</Presentation>
				</PresentationContainer>
			</Container>
		</>
	);
}
