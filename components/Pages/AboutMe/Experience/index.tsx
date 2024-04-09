import React from "react";
import { ExperienceSection, ExperienceTitle } from "./Experience.style";

type Props = {};

const Experience = (props: Props) => {
  return <ExperienceSection  data-aos="fade-up">
    <ExperienceTitle>Experiences</ExperienceTitle>
    <section className="experience__section">
      <h5>FullStack Developer Mid-Level at Editora Globo</h5>
      <i>2019 / current role</i>
      <details>
      <summary>More about this role</summary>
      <ul>
        <li className="experience__section--paragraph">
          Tech Stack Enhancement: Integrated Python and NodeJS microservices, 
          React with Redux-form, and Sass for 
          advanced CMS functionalities and front-end development.
        </li>
        <li className="experience__section--paragraph">
          CI/CD Expertise: Gained proficiency in CI/CD pipelines using GitLab CI and GitHub Actions, enhancing the development process.  
        </li>
        <li  className="experience__section--paragraph">
          Agile Methodologies: Demonstrated flexibility in project management by adeptly employing both Scrum and Kanban frameworks.
        </li>
        <li className="experience__section--paragraph">
          SEO Optimization: Leveraged Google Search Console to refine the CMS, boosting search engine visibility and indexing health by over 90%.
        </li>
        <li className="experience__section--paragraph">Design Collaboration: Worked closely with UX/UI teams to faithfully execute design specifications using Zeplin, Adobe XD, and Figma.</li>
        <li className="experience__section--paragraph">Design to Development: Consistently translated design concepts into functional user interfaces, ensuring fidelity to original layouts.</li>
      </ul>
      </details>
    </section>
    <section className="experience__section">
      <h5>Web Developer Trainee at Editora Globo</h5>
      <i>2018 / 2019</i>
      <details>
       <summary>More about this role</summary>
      <ul>
        <li className="experience__section--paragraph">Legacy System Revitalization: Enhanced legacy systems using Django and Python 2.7, acquiring expertise in established technologies.</li>
        <li className="experience__section--paragraph">Front-End Leadership: Led the creation of user interfaces with Less and Vanilla Javascript, merging practicality with aesthetic design.</li>
        <li className="experience__section--paragraph">Technological Adaptability: Overcame the intricacies of older tech stacks, mastering Django, Python 2.7, Less, and Vanilla Javascript.</li>
      </ul>
      </details>
    </section>
		<a href="#" className="experience__section--button">Download my complete resumé</a>
  </ExperienceSection>;
};

export default Experience