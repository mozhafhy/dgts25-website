import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Sponsor from "./components/sponsor/Sponsor.jsx";
import About from "./components/about/About.jsx";
import ImgCarousel from "./components/img-carousel/ImgCarousel.jsx";
import Events from "./components/events-date/Events.jsx";
import Inti from "./components/kepanitiaan/inti/Inti.jsx";
import Divisi from "./components/kepanitiaan/divisi/Divisi.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      <About />
      <ImgCarousel />
      <Events />
      <Inti />
      <Divisi />
      <Footer />
    </>
  );
}

export default App;