import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import compiled USWDS + custom styles
import '../static/uswds/css/index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        Rachel Corsino
      </header>
    </>
  )
}

export default App
