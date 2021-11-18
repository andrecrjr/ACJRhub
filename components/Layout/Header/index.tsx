import React from "react";
import { GlobalHeader } from "./style";
import Link from "next/link";
import { MenuLink } from "./style";
interface Props {}

const Header = (props: Props) => {
	return (
		<GlobalHeader>
			<h1 className='header--logo'>ACJRHUB</h1>
			<nav className='header--menu'>
				<Link href='#portfolio' passHref>
					<MenuLink>Portfolio</MenuLink>
				</Link>
			</nav>
		</GlobalHeader>
	);
};

export default Header;
