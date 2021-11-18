import React from "react";
import { GlobalHeader } from "../../styles/global";
import Link from "next/link";
import { MenuLink } from "../../styles/global";
interface Props {}

const Header = (props: Props) => {
	return (
		<GlobalHeader>
			<h1 className='header--logo'>ACJRHUB</h1>
			<Link href='#portfolio' passHref>
				<MenuLink>Portfolio</MenuLink>
			</Link>
		</GlobalHeader>
	);
};

export default Header;
