'use client';
import styled from 'styled-components';
import { ExperienceTitle } from '../Experience/Experience.style';
export const SkillsetTitle = styled(ExperienceTitle)``;

export const SkillList = styled.ul`
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	&:not(:first-child) {
		margin-top: 1.2rem;
	}

	&:not([data-language]) {
		li {
			&:not(:last-child) {
				&:after {
					content: '-';
					padding: 0.77rem;
				}
			}
		}
	}
	&[data-language] {
		li {
			margin-top: 1rem;
		}
	}
`;
