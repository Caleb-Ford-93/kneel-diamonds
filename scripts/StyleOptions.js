import { setStyleId } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChoice)
    
const styleHTML = styles.map(
    (style) => {
    return`<div>
            <input type="radio" name="style" value="${style.id}" />${style.style}
           </div>`
    }
)
    return styleHTML.join("")
}

const handleStyleChoice = (event) => {
    if (event.target.name === "style"){
        setStyleId(parseInt(event.target.value))
    }
}