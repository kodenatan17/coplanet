import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../components/organisms/navbar";
import MainBanner from "../../components/organisms/MainBanner";
import TransactionsStep from "../../components/organisms/TransactionsStep";
import FeauturedMenus from "../../components/organisms/FeaturedMenus";
import Reached from "../../components/organisms/Reached";
import Story from "../../components/organisms/Story";
import Footer from "../../components/organisms/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionsStep />
      <FeauturedMenus />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
