import { useContext } from "react"
import { StoreContext } from "./store"

function App(){
  const state = useContext(StoreContext)
  console.log(state);

  return (
    <div>
      <h1>Get paid by your work!</h1>
    </div>
  )
}

export default App