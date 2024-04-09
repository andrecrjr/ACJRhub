import React from 'react';
import { GlobalHeader } from './Header.style';
import Link from 'next/link';
import { MenuLink } from './Header.style';

const Header = () => {
	return (
		<GlobalHeader>
			<Link href="/" passHref><a style={{textDecoration:"none"}}><h1 className="header--logo">ACJRHUB</h1></a></Link>
			<nav className="header--menu">
				<Link href="#about-me" passHref>
					<MenuLink>About Me</MenuLink>
				</Link>
				<Link href="#portfolio" passHref>
					<MenuLink>Portfolio</MenuLink>
				</Link>
			</nav>
		</GlobalHeader>
	);
};

export default Header;
