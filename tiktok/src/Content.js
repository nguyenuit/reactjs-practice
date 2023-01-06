import { useEffect } from "react"

function Content(){

    //1. useEffect(callback)
    //2. useEffect(callback, [])
    //3. useEffect(callback, [deps])

    //-----
    //1. Callback luon duoc goi sau khi component mounted
    useEffect(() => {
        console.log('Mounted')
    })

    return (
        <h1>Hoc ReactJS!</h1>
    )
}

export default Content