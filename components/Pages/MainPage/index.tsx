import React, { ReactElement } from 'react';
import { Container, Presentation, PresentationContainer } from '../styles';
import { SocialNetwork } from '../../Layout/SocialNetwork';
import { Stacks } from '../../Layout/Stacks';
import {
	MyStackContainer,
	PresentationPic,
	SocialNetworkContainer
} from './style';

export default function MainPage({}): ReactElement {
	return (
		<>
			<Container>
				<PresentationContainer>
					<Presentation data-grid="welcome-grid" data-aos="fade-up">
						<h2 className="presentation--world">
							<strong>Hello world</strong>
							<br /> I am André Junior!
						</h2>
						<PresentationPic bgImage="https://media-exp1.licdn.com/dms/image/D4D03AQFcNVGkcWebNA/profile-displayphoto-shrink_800_800/0/1670429810926?e=1676505600&v=beta&t=LoaxT4Z86vjnq4fsbFEh6EpcZQC1S1b8C9PLSAZAuwI" />
						<SocialNetworkContainer>
							<li>
								<SocialNetwork
									socialNetworkHref={'linkedin.com/in/andrecrjr'}
									socialNetworkName={'linkedin'}
								/>
							</li>
							<li>
								<SocialNetwork
									socialNetworkHref={'instagr.am/andrecrjr'}
									socialNetworkName={'insta'}
								/>
							</li>
							<li>
								<SocialNetwork
									socialNetworkHref={'twitter.com/acjuni0r'}
									socialNetworkName={'twitter'}
								/>
							</li>
							<li>
								<SocialNetwork
									socialNetworkHref={'github.com/andrecrjr'}
									socialNetworkName={'github'}
								/>
							</li>
						</SocialNetworkContainer>
					</Presentation>
					<Presentation data-aos="fade-up">
						<MyStackContainer>
							<h2 className="presentation--world">
								Fullstack Developer focusing in Front-end Development
							</h2>
							<Stacks />
						</MyStackContainer>
					</Presentation>
				</PresentationContainer>
			</Container>
		</>
	);
}
