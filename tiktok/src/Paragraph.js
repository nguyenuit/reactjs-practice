import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Paragraph(){

    const context = useContext(ThemeContext)

    return (
        <div className={context.theme}> 
            <h1>Keep system up to date to run business!</h1>
            <div>Get paid by your work!</div>
        </div>
    )
}
export default Paragraph