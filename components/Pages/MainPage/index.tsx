import React, { ReactElement } from 'react';
import { Container, Presentation, PresentationContainer } from '../styles';
import { Stacks } from '../../Layout/Stacks';
import { MyStackContainer, SocialNetworkContainer } from './style';
import { SocialNetwork } from '@/components/Layout/SocialNetwork';

export default function MainPage({}): ReactElement {
	return (
		<>
			<Container>
				<PresentationContainer>
					<Presentation data-grid="welcome-grid" data-aos="fade-up">
						<h2 className="presentation--world">
							Hello World, I am <strong>André Carlos Junior</strong>
						</h2>

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
									socialNetworkHref={'github.com/andrecrjr'}
									socialNetworkName={'github'}
								/>
							</li>
						</SocialNetworkContainer>
					</Presentation>
					<Presentation data-grid="stack-grid" data-aos="fade-up">
						<MyStackContainer>
							<h2 className="presentation--world">
								Front-end Developer and Platonic Fullstack Lover.
							</h2>
							<Stacks />
						</MyStackContainer>
					</Presentation>
				</PresentationContainer>
			</Container>
		</>
	);
}
