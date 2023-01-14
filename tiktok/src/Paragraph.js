import { useContext } from "react"
import { ThemeContext } from "./App"

function Paragraph(){

    const theme = useContext(ThemeContext)

    return (
        <div className={theme}> 
            <h1>Keep system up to date to run business!</h1>
            <div>Get paid by your work!</div>
        </div>
    )
}
export default Paragraph