import React from 'react';
import { GlobalHeader } from './Header.style';

import { MenuLink } from './Header.style';
import Link from 'next/link';

const Header = () => {
	return (
		<GlobalHeader>
			<Link href="/">
				<h1 className="header--logo">ACJR</h1>
			</Link>
			<nav className="header--menu">
				<Link href="#about-me">
					<MenuLink>About Me</MenuLink>
				</Link>
				<Link href="#portfolio">
					<MenuLink>Showcase</MenuLink>
				</Link>
			</nav>
		</GlobalHeader>
	);
};

export default Header;
