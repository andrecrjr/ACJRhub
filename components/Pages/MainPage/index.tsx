import React, { ReactElement } from "react";
import { Container, PresentationContainer, Presentation } from "../styles";
import { SocialNetwork } from "../../Layout/SocialNetwork";

export default function MainPage({}): ReactElement {
	return (
		<>
			<Container>
				<PresentationContainer>
					<Presentation data-aos='fade-right'>
						<h2 className='presentation--world'>
							Olá mundo,
							<br /> sou André Carlos!
						</h2>
						<div className='presentation--pic'></div>
					</Presentation>
					<Presentation data-aos='fade-up'>
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
				</PresentationContainer>
			</Container>
		</>
	);
}
