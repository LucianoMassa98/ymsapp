import Header from "../components/Header";
import About from "../components/About";
import AppSection from "../components/AppSection";
import Store from "../components/Store";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WtspButton from "../components/WtspButton";
//import Galery from "../components/Galery";


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Store />
      <AppSection />
      <About />
      <WtspButton />
      <Footer />
    </>
  );
};

export default Home;
