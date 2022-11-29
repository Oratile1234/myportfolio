import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/about/About'
import Home from './components/home/Home'
// import Skills from './components/skills/skills'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
// import Skills from './components/Skill/Skill'


function App() {
  return (
    <>
 
    <Sidebar />
    <main className="main">
     
      <Home />
      <About />
      {/* <Skills /> */}
      <Services />
      <Resume />
      <Portfolio />
      <Contact />

      
    </main>
    </>
  )
}

export default App;
