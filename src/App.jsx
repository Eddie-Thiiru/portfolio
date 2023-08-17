import { ScrollRestoration } from "react-router-dom";
import LandingPage from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Projects />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
