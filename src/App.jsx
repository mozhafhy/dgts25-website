import AOS from "./components/anim/AOS.jsx";
import Navbar from "./components/1navbar/Navbar.jsx";
import ContactButton from "./components/contact/contact.jsx";
import Hero from "./components/2hero/Hero.jsx";
import Sponsor from "./components/3sponsor/Sponsor.jsx";
import About from "./components/4about/About.jsx";
import Events from "./components/5events-date/Events.jsx";
import Inti from "./components/6kepanitiaan/1inti/Inti.jsx";
import Divisi from "./components/6kepanitiaan/2divisi/Divisi.jsx";
import Footer from "./components/7footer/Footer.jsx";

const components = [<Sponsor key={0} />, <About key={1} />, <Events key={2} />];
const footerInit = {
  filter: "blur(5px)",
};
const footerEnd = {
  transition: { duration: 0.3 },
  filter: "blur(0)",
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactButton />
      <Hero />
      {components.map((component, id) => (
        <AOS key={id}>{component}</AOS>
      ))}
      <Inti key={3} />
      <Divisi key={4} />

      <AOS initial={footerInit} end={footerEnd}>
        <Footer />
      </AOS>
    </div>
  );
}

export default App;
