import React from "react";
import { ExperienceSection, ExperienceTitle } from "./Experience.style";

type Props = {};

const Experience = (props: Props) => {
  return <ExperienceSection>
    <ExperienceTitle>Experiences</ExperienceTitle>
    
    <p className="experience__description">
      As a dedicated Front-End Developer, I specialize in creating user interfaces. My current experience at Editora Globo has allowed me to tackle a variety of projects, enhancing my skills. While focused on Front-End, I’ve also explored Back-End technologies, giving me a comprehensive understanding of web development. This knowledge enables me to quickly adapt to new technologies and eagerly take on fresh challenges.
    </p>
    <section className="experience__section">
      <h5>FullStack Developer Mid-Level at Editora Globo</h5>
      <i>2022 / current role</i>
      <ul>
        <li className="experience__section--paragraph">Legacy System Migration In 2022, I played a pivotal role in migrating three legacy systems to modern content management applications, transitioning from Java 6 and Django 1.4 to a more current stack.</li>
        <li  className="experience__section--paragraph">Full-Stack Development Employed a robust technology stack, integrating Python and NodeJS microservices, and crafting intricate CMS functionalities using React and Redux-form. My front-end development was enhanced by Sass, HTML, and Vanilla JavaScript.</li>
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