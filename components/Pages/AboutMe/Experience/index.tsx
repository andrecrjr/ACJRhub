import React from 'react';
import { ExperienceSection, ExperienceTitle } from './Experience.style';

type Props = {};

const Experience = (props: Props) => {
	return (
		<ExperienceSection data-aos="fade-up">
			<ExperienceTitle>Experiences</ExperienceTitle>
			<section className="experience__section">
				<h5>Front-End Developer Mid-Level at Editora Globo</h5>
				<p className="experience__role">2019 / current role</p>
				<p style={{ marginBottom: '1rem' }}>
					Currently working with the O Globo Project team on the development and
					maintenance of subscription sales systems, particularly for the{' '}
					<a href="https://oglobo.globo.com">O Globo Newspaper</a>, one of the
					most prominent news portals in Brazil.
				</p>
				<details>
					<summary>More about this role</summary>
					<ul>
						<li>
							<p className="experience__section--paragraph">
								Real-Time Payment Integration: Implemented a real-time Pix
								payment integration system using webhooks for subscription
								sales, allowing users to receive instant transaction status
								updates.
							</p>
						</li>
						<li className="experience__section--paragraph">
							<p>
								E-commerce Development for Subscription Sales: Played a key role
								in developing and maintaining the O Globo Offers Platform, an
								e-commerce subscription system for O Globo newspaper, enhancing
								sales functionality and user experience.
							</p>
						</li>
						<li className="experience__section--paragraph">
							<p>
								System Migration: Led the transition of legacy systems to modern
								technologies, utilizing React, SCSS, and JavaScript to ensure
								improved stability and performance.
							</p>
						</li>
						<li className="experience__section--paragraph">
							<p>
								Tech Stack Enhancement: Integrated Python and NodeJS
								microservices, React with Redux-form, and Sass for advanced CMS
								functionalities and front-end development.
							</p>
						</li>
						<li className="experience__section--paragraph">
							<p>
								CI/CD Expertise: Gained proficiency in CI/CD pipelines using
								GitLab CI and GitHub Actions, enhancing the development process.{' '}
							</p>
						</li>
						<li className="experience__section--paragraph">
							<p>
								Agile Methodologies: Demonstrated flexibility in project
								management by adeptly employing both Scrum and Kanban
								frameworks.
							</p>
						</li>
						<li className="experience__section--paragraph">
							<p>
								SEO Optimization: Leveraged Google Search Console to refine the
								CMS, boosting search engine visibility and indexing health by
								over 90%.
							</p>
						</li>
						<li className="experience__section--paragraph">
							<p>
								Design Collaboration: Worked closely with UX/UI teams to
								faithfully execute design specifications using Zeplin, Adobe XD,
								and Figma.
							</p>
						</li>
						<li className="experience__section--paragraph">
							<p>
								Design to Development: Consistently translated design concepts
								into functional user interfaces, ensuring fidelity to original
								layouts.
							</p>
						</li>
					</ul>
				</details>
			</section>
			<section className="experience__section">
				<h5>Web Developer Trainee at Editora Globo</h5>
				<p className="experience__role">2018 / 2019</p>
				<p style={{ marginBottom: '1rem' }}>
					Worked to maintain the legacy content management as a fullstack
					trainee
				</p>
				<details>
					<summary>More about this role</summary>
					<ul>
						<li className="experience__section--paragraph">
							<p>
								Legacy System Revitalization: Enhanced legacy systems using
								Django and Python 2.7, acquiring expertise in established
								technologies.
							</p>
						</li>
						<li className="experience__section--paragraph">
							<p>
								Front-End Leadership: Led the creation of user interfaces with
								Less and Vanilla Javascript, merging practicality with aesthetic
								design.
							</p>
						</li>
						<li className="experience__section--paragraph">
							<p>
								Technological Adaptability: Overcame the intricacies of older
								tech stacks, mastering Django, Python 2.7, Less, and Vanilla
								Javascript.
							</p>
						</li>
					</ul>
				</details>
			</section>
			<a
				href="https://drive.google.com/file/d/1iKpeqeFRG4R8jH4kY-274pDIHk3AVHf8/view?usp=drive_link"
				target="_blank"
				className="experience__section--button"
			>
				Download my complete resumé
			</a>
		</ExperienceSection>
	);
};

export default Experience;
