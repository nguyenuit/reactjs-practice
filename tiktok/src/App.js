import { useState } from "react";
import Content from "./Content";

// memo() -> Higher Order Component (HOC)

function App(){
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  return (
      <div style={{padding: 20}}>
        <Content />
        <h1>{count}</h1>
        <button onClick={increase}>Click me!</button>
      </div>
  )
}

export default App;
