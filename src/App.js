import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/about/About'
import Home from './components/home/Home'
import Services from './components/services/Services';
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
     
      <Home />
      <About />
      <Services />
      <Resume />
      <Contact />

      
    </main>
    </>
  )
}

export default App;
