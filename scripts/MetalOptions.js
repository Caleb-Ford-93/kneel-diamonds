import { getTransientState, setMetalId } from "./TransientState.js"
import { render } from "./main.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
    const currentTransientState = getTransientState()
    document.addEventListener("change", handleMetalChoice)

    const metalHTML = metals.map(
        (metal) => {
        if(metal.id === currentTransientState.metalId){    
            return `<div>
                    <input type="radio" name="metal" value="${metal.id}" checked />${metal.metal}
                    </div>`
        } else {
            return `<div>
                    <input type="radio" name="metal" value="${metal.id}" />${metal.metal}
                    </div>`
        }
    }
) 
    return metalHTML.join("")
}

const handleMetalChoice = (event) => {
    if (event.target.name === "metal"){
        setMetalId(parseInt(event.target.value))
        render()
    }
}