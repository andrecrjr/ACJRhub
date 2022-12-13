import React, { ReactElement } from 'react';
import { Container, Presentation, PresentationContainer } from '../styles';
import { SocialNetwork } from '../../Layout/SocialNetwork';
import { Stacks } from '../../Layout/Stacks';
import { PresentationPic } from './style';

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
						<div className="social-network">
							<SocialNetwork
								socialNetworkHref={'linkedin.com/in/andrecrjr'}
								socialNetworkName={'linkedin'}
							/>
							<SocialNetwork
								socialNetworkHref={'instagr.am/andrecrjr'}
								socialNetworkName={'insta'}
							/>
							<SocialNetwork
								socialNetworkHref={'twitter.com/acjuni0r'}
								socialNetworkName={'twitter'}
							/>
							<SocialNetwork
								socialNetworkHref={'github.com/andrecrjr'}
								socialNetworkName={'github'}
							/>
						</div>
					</Presentation>
					<Presentation data-aos="fade-up">
						<div className="presentation--my-stacks">
							<h1 className="presentation--world">
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
