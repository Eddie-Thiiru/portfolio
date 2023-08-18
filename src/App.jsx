import { ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
