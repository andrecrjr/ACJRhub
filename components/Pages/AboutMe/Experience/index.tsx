import React from "react";
import { ExperienceSection, ExperienceTitle } from "./Experience.style";

type Props = {};

const Experience = (props: Props) => {
  return <ExperienceSection>
    <ExperienceTitle>Experiences</ExperienceTitle>
    
    <p className="experience__description">
      As a Front-End Developer with a passion for crafting engaging user interfaces, I have honed my skills through practical experience and continuous learning. My journey has been marked by a significant tenure at Editora Globo, where I’ve had the opportunity to contribute to diverse projects, each challenging and enriching my expertise.
      While my focus has been predominantly on Front-End development, I’ve also delved into Back-End technologies to ensure a well-rounded understanding of the full development stack. This dual exposure has equipped me to adapt swiftly to the evolving tech landscape, embracing new challenges with enthusiasm.
    </p>
    <section className="experience__section">
      <h5>FullStack Developer Mid-Level at Editora Globo</h5>
      <i>2022 / current role</i>
      <ul>
        <li>Legacy System Migration In 2022, I played a pivotal role in migrating three legacy systems to modern content management applications, transitioning from Java 6 and Django 1.4 to a more current stack.</li>
        <li>Full-Stack Development Employed a robust technology stack, integrating Python and NodeJS microservices, and crafting intricate CMS functionalities using React and Redux-form. My front-end development was enhanced by Sass, HTML, and Vanilla JavaScript.</li>
      </ul>
    </section>
    <section className="experience__section">
      <h5>Front-End Developer Jr. at Editora Globo</h5>
      <i>2019 / 2022</i>
      <ul>
        <li></li>
      </ul>
    </section>
  </ExperienceSection>;
};

export default Experience