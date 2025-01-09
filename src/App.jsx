import "./App.css";
import ContactButton from "./components/contact/contact.jsx";
import Navbar from "./components/1navbar/Navbar.jsx";
import Hero from "./components/2hero/Hero.jsx";
import Sponsor from "./components/3sponsor/Sponsor.jsx";
import About from "./components/4about/About.jsx";
import Events from "./components/5events-date/Events.jsx";
import Inti from "./components/6kepanitiaan/1inti/Inti.jsx";
import Divisi from "./components/6kepanitiaan/2divisi/Divisi.jsx";
import Footer from "./components/7footer/Footer.jsx";

function App() {
  return (
    <>
      <ContactButton />
      <Navbar />
      <Hero />
      <Sponsor />
      <About />
      <Events />
      <Inti />
      <Divisi />
      <Footer />
    </>
  );
}

export default App;
