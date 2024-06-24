import { placeOrder } from "./TransientState.js"

const handlePlaceOrder = (clickEvent) => {
    if(clickEvent.target.id === "placeOrder") {
        placeOrder()
    }
}

export const SubmitOrderButton = () => {
    document.addEventListener("click", handlePlaceOrder)
    return `<button id="placeOrder">Place Order</button>`
}