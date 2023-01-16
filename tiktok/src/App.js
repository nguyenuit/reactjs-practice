import { useRef } from "react"
import { useImperativeHandle } from "react"
import Video from './Video'

function App(){
  const videoRef = useRef()

  return (
    <div>
      <Video ref={videoRef} />
      <button>Play</button>
      <button>Pause</button>
    </div>
  )
}
export default App
