import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Discover from "./components/Discover/Discover";
import Story from "./components/OurStory/Story";
import Power from "./components/Power/Power";
import Sviper from "./components/Swiper/Sviper";
import Reserve from "./components/Reserve/Reserve";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Discover />
      <Story />
      <Power />
      <Sviper />
      <Reserve />
      <Footer />
    </div>
  );
}
export default App;
