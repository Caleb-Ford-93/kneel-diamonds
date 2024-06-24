import { setTypeId } from "./TransientState.js"

export const JewelryType = async () => {
    const response = await fetch("http://localhost:8088/types")
    const types = await response.json()

    document.addEventListener("change", handleTypeChange)
    const typesHTML = types.map((type) => {
        return `<input type="radio" name="type" value="${type.id}" />${type.type}`
    })
    return typesHTML.join("")
}

const handleTypeChange = (changeEvent) => {
    if(changeEvent.target.name === "type"){
        setTypeId(changeEvent.target.value)
    }
}