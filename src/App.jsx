import "./App.css";
import AboutSection from "./components/aboutSection/AboutSection";
import ContactUs from "./components/contactUs/ContactUs";
import FamilySection from "./components/family/FamilySection";
import FooterSection from "./components/footer/FooterSection";
import Header from "./components/header/Header";
import HelpSection from "./components/helpSection/HelpSection";
import HeroSection from "./components/heroSection/HeroSection";
import MediaSection from "./components/mediaResource/MediaSection";
import PartnersSection from "./components/partnersSection/PartnersSection";
import TeamSection from "./components/teamSection/TeamSection";
import Wrapper from "./components/wrapper/Wrapper";

function App() {
  return (
    <>
      <Header />
      <main>
        <Wrapper Component={HeroSection} />
        <Wrapper Component={PartnersSection} />
        <Wrapper Component={HelpSection} />
        <Wrapper Component={TeamSection} />
        <Wrapper Component={AboutSection} />
        <Wrapper Component={FamilySection} />
        <Wrapper Component={MediaSection} />
        <Wrapper Component={ContactUs} />
      </main>
      <footer>
        <Wrapper Component={FooterSection} />
      </footer>
    </>
  );
}

export default App;
