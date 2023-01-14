import { useState } from "react"
import Content from "./Content"
import "./App.css"

// Context
// Component A => Component B => Component C

function App(){

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light': 'dark')
  }

  return (
    <div style={{padding: 20}}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Content theme={theme} />
    </div>
  )
}

export default App
