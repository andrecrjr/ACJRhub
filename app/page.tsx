import Header from "@/components/Layout/Header";
import { AboutMe } from "@/components/Pages/AboutMe";
import MainPage from "@/components/Pages/MainPage";
import { Portfolio } from "@/components/Pages/Portfolio";
import { GlobalContainer } from "@/styles/global";

type Props = {};

export default function Page({}: Props) {
  return (
      <GlobalContainer>
        <Header />
        <MainPage />
        <AboutMe />
        <Portfolio />
      </GlobalContainer>
  );
}
