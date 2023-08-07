import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../components/organisms/navbar";
import MainBanner from "../../components/organisms/MainBanner";
import TransactionsStep from "../../components/organisms/TransactionsStep";
import FeauturedMenus from "../../components/organisms/FeaturedMenus";
import Reached from "../../components/organisms/Reached";
import Story from "../../components/organisms/Story";
import Footer from "../../components/organisms/Footer";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Kimitsu Artisan Cake - Get a New Expirence in Deserts</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu pengusaha untuk mendapatkan keuntungan"
        />
        <meta
          property="og:title"
          content="Kimitsu Artisan Cake - Get a New Expirence in Deserts"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu pengusaha untuk mendapatkan keuntungan"
        />
        <meta property="og:url" content="https://kodenatan17.id" />
      </Head>
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
