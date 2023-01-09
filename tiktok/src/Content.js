import { useEffect, useState, useRef } from "react"

//1. useEffect(callback)
//- Goi callback moi khi component re-render
//- Goi callback sau khi component them element vao DOM
//2. useEffect(callback, [])
//- Chi goi callback 1 lan sau khi component mounted
//3. useEffect(callback, [deps])
//- Callback se duoc goi moi khi deps thay doi

//-----
//1. Callback luon duoc goi sau khi component mounted

let timerId

function Content(){
    
    const [count, setCount] = useState(60)

    const handleStart = () => {
        timerId = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
    
    }

    const handleStop = () => {
        clearInterval(timerId)
    }

    return (
        <div>
           <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Content