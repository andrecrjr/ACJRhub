import { SkillWrapper } from '@/components/Contexts/SkillContext';
import Header from '@/components/Layout/Header';
import { AboutMe } from '@/components/Pages/AboutMe';
import MainPage from '@/components/Pages/MainPage';
import { Portfolio } from '@/components/Pages/Portfolio';
import { GlobalContainer } from '@/styles/global';

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
export default async function Page({}: Props) {
	const { data } = await fetchSkillData();
	const filterSkill = data.filter(
		(skill) => skill.percent > 1 && skill.name !== 'Other'
	);

	return (
		<GlobalContainer>
			<Header />
			<MainPage />
			<AboutMe filteredSkills={filterSkill} />
			<Portfolio />
		</GlobalContainer>
	);
}
