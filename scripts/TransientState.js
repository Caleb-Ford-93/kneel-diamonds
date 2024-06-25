let transientState = {
    "styleId": 0,
    "sizeId": 0,
    "metalId": 0,
    "typeId": 0,
    "timestamp": 0,
}

export const setStyleId = (chosenStyle) => {
    transientState.styleId = chosenStyle
}

export const setSizeId = (chosenSize) => {
    transientState.sizeId = chosenSize
}

export const setMetalId = (chosenMetal) => {
    transientState.metalId = chosenMetal
}
export const setTypeId = (chosenType) => {
    transientState.typeId = chosenType
}

export const placeOrder = async () => {
    if(transientState.metalId !=0
        && transientState.styleId !=0
        && transientState.sizeId !=0
        && transientState.typeId !=0){

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
    } else {
        window.alert("Please make a selection for all options")
    }
}

export const resetTransientState = () => {
    transientState = {
        "styleId": 0,
        "sizeId": 0,
        "metalId": 0,
        "typeId": 0,
        "timestamp": 0,
    }
}

export const getTransientState = () => {
    return transientState
}