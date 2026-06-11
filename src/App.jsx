import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Discover from "./components/Discover/Discover";
import Story from "./components/OurStory/Story";
import Power from "./components/Power/Power";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Discover />
      <Story />
      <Power />
    </div>
  );
}
export default App;
