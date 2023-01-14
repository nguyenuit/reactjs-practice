import Content from "./Content"
import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"
import "./App.css"

// Context
// Component A => Component B => Component C

// 1. Create context
// 2. Provider
// 3. Consumer

function App(){
  const context = useContext(ThemeContext)
  return (
      <div style={{padding: 20}}>
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Content />
      </div>
  )
}

export default App
