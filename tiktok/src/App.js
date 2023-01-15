import { useContext } from "react"
import { useStore } from "./store"

function App(){
  const [state, dispatch] = useStore()
  console.log(state);

  return (
    <div>
      <h1>Get paid by your work!</h1>
    </div>
  )
}

export default App