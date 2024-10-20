import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card'
import { Carousel } from './components/Carousel'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Watch } from './components/Watch'

function App() {
  const [count, setCount] = useState(0)
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/watch' element={<Watch/>}></Route>
      </Routes>
    </Router>
  );
}

export default App
