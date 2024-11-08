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
				<Link
					href="https://acjr.notion.site/138b5e58148c80809666d2b33948b37e?pvs=105"
					target="_blank"
				>
					<MenuLink>Get in touch</MenuLink>
				</Link>
				<Link href="#portfolio">
					<MenuLink>Showcase</MenuLink>
				</Link>
			</nav>
		</GlobalHeader>
	);
};

export default Header;
