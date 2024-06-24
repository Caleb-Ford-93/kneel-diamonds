import { setSizeId } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSizeChoice)

    const sizeHTML = sizes.map(
        (size) => {
            return `<div>
                    <input type="radio" name="size" value="${size.id}" />${size.carets}
                    </div>`
        }
   )
    return sizeHTML.join("")
}

const handleSizeChoice = (event) => {
    if (event.target.name === "size"){
        setSizeId(parseInt(event.target.value))
    }
}