import Head from "next/head";
import Image from "next/image";
import React from "react";
import MainPage from "../components/Pages/MainPage";
import { Portfolio } from "../components/Pages/Portfolio";
import { GlobalContainer, GlobalHeader } from "../styles/global";

const Home: React.FC = () => {
	return (
		<GlobalContainer>
			<GlobalHeader>
				<h1 className='header--logo'>ACJRHUB</h1>
			</GlobalHeader>
			<MainPage />
			<Portfolio/>
		</GlobalContainer>
	);
};

export default Home;
