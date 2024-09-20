import "./index.css";
import Header from "./components/Header";
import Hero from "./components/HeroSec";
import Projects from "./components/Projects";
import SelfIntroduction from "./components/self";
import Skills from "./components/skills";
import Dreams from "./components/dreams";
import SocialLinks from "./components/social";
import MintaShowcase from "./components/startup";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SelfIntroduction />
      <Skills />
      <Projects />
      <Dreams />
      <SocialLinks />
      <MintaShowcase />
    </>
  );
}

export default App;
