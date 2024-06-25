import { getTransientState, setStyleId } from "./TransientState.js"
import { render } from "./main.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()
    const currentTransientState = getTransientState()
    document.addEventListener("change", handleStyleChoice)
    
const styleHTML = styles.map(
    (style) => {
    if(style.id === currentTransientState.styleId) {
        return`<div>
                <input type="radio" name="style" value="${style.id}" checked />${style.style}
                </div>`
        } else {
         return`<div>
                <input type="radio" name="style" value="${style.id}" />${style.style}
                </div>`
        }
    }
)
    return styleHTML.join("")
}

const handleStyleChoice = (event) => {
    if (event.target.name === "style"){
        setStyleId(parseInt(event.target.value))
        render()
    }
}