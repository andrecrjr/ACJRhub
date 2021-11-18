import React from "react";
import MainPage from "../components/Pages/MainPage";
import { Portfolio } from "../components/Pages/Portfolio";
import { GlobalContainer } from "../styles/global";
import Header from "../components/Layout/Header";

const Home: React.FC = () => {
	return (
		<GlobalContainer>
			<Header />
			<MainPage />
			<Portfolio />
		</GlobalContainer>
	);
};

export default Home;
