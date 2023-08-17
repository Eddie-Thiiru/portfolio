import LandingPage from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
