import { useContext } from "react"
import { useStore, actions } from "./store"

function App(){
  const [state, dispatch] = useStore()
  const { todos, todoInput} = state

  console.log(todoInput);

  return (
    <div>
      <h1>Get paid by your work!</h1>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={ e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
    </div>
  )
}

export default App