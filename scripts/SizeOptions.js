import { getTransientState, setSizeId } from "./TransientState.js"
import { render } from "./main.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()
    const currentTransientState = getTransientState()
    document.addEventListener("change", handleSizeChoice)

    const sizeHTML = sizes.map(
        (size) => {
        if(size.id === currentTransientState.sizeId){
                return `<div>
                    <input type="radio" name="size" value="${size.id}" checked />${size.carets}
                    </div>`
        } else {
            return `<div>
                    <input type="radio" name="size" value="${size.id}" />${size.carets}
                    </div>`
        }
        }
   )
    return sizeHTML.join("")
}

const handleSizeChoice = (event) => {
    if (event.target.name === "size"){
        setSizeId(parseInt(event.target.value))
        render()
    }
}