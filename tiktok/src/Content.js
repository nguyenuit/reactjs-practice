import { memo } from "react"

function Content(){
    console.log('re-render');
    return (
        <h2>Get paid by your work!</h2>
    )
}

export default memo(Content)