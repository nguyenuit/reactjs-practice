import { useEffect, useState } from "react"

//1. useEffect(callback)
//- Goi callback moi khi component re-render
//- Goi callback sau khi component them element vao DOM
//2. useEffect(callback, [])
//- Chi goi callback 1 lan sau khi component mounted
//3. useEffect(callback, [deps])
//- Callback se duoc goi moi khi deps thay doi

//-----
//1. Callback luon duoc goi sau khi component mounted

function Content(){
    
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log(`Mounted or Re-render lan ${count}`);
        return () => {
            console.log(`Cleanup lan ${count}`);
        }
    }, [count])
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me!</button>            
        </div>
    )
}

export default Content