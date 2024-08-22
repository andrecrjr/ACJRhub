import React from 'react';
import { SkillSetComponent } from './SkillSetComponent';
import { SkillList, SkillsetTitle } from './Skill.style';

const Skill = () => {
	return (
		<section data-aos="fade-up">
			<SkillsetTitle>My Skills</SkillsetTitle>
			<SkillSetComponent />

			<SkillList data-language="true">
				<p>Languages</p>
				<li>
					<p>
						<strong>Portuguese</strong>: Native proficiency. Full command of the
						language in both reading and writing, with the ability to
						communicate complex concepts and engage in detailed discussions.
					</p>
				</li>
				<li>
					<strong>English</strong>: Intermediate proficiency. Capable of reading
					and writing with a good understanding of grammar and vocabulary.
					Comfortable engaging in everyday communication and mainly
					comprehending technical texts
				</li>
			</SkillList>
		</section>
	);
};

export default Skill;
