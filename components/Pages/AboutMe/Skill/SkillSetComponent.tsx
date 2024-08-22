import React, { useCallback, useEffect, useState } from 'react';
import { SkillList } from './Skill.style';

export const SkillSetComponent = ({ filteredSkills }) => {
	return (
		<section>
			<p>My Programming Proficiencies</p>
			<SkillList>
				{filteredSkills.map((item: { name: string }) => {
					return (
						<li key={item.name}>
							<strong>{item.name}</strong>
						</li>
					);
				})}
			</SkillList>
		</section>
	);
};
