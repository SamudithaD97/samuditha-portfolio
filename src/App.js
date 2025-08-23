import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work"
import { Education } from "./components/Education";
import { Blog } from "./components/Blog";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      {/* <Blog/> */}
      <Work/>
      <Education/>
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
