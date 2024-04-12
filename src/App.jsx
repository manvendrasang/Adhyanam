import { useState } from 'react'
import './css/App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Main />
    <Footer />
    </div>
  )
}

export default App
