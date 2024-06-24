import { setMetalId } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChoice)

    const metalHTML = metals.map(
        (metal) => {
            return `<div>
                    <input type="radio" name="metal" value="${metal.id}" />${metal.metal}
                    </div>`
    }
) 
    return metalHTML.join("")
}

const handleMetalChoice = (event) => {
    if (event.target.name === "metal"){
        setMetalId(parseInt(event.target.value))
    }
}