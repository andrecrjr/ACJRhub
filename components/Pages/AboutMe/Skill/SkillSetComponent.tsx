import React, { useCallback, useEffect, useState } from 'react';
import { SkillList } from './Skill.style';

type Props = {};

const fetchSkillData = async () => {
	try {
		const resp = await fetch(
			'https://wakatime.com/share/@andrecrjr/a12e00de-1f51-4ac8-b8d9-36a1c9313fd4.json'
		);
		const data = await resp.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const SkillSetComponent = async (props: Props) => {
	const { data } = await fetchSkillData();
	const filterSkill = data.filter(
		(skill) => skill.percent > 1 && skill.name !== 'Other'
	);

	return (
		<section>
			<p>My Programming Proficiencies</p>
			<SkillList>
				{filterSkill.map((item) => {
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
