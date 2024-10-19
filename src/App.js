
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Projects from './components/project';
import Resume from './components/resume';
import Skills from './components/skill';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
