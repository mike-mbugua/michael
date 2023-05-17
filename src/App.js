import logo from './logo.svg'
import Home from './components/Home'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Skill from './components/skills/Skill'
import Contact from './components/contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="#about-me" element={<About />} /> */}
      </Routes>
      <Contact />
    </BrowserRouter>
  )
}

export default App
