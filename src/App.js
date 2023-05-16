import logo from './logo.svg'
import Home from './components/Home'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/about/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="#about-me" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
