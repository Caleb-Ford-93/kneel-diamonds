import { JewelryType } from './JewelryType.js'
import { MetalOptions } from './MetalOptions.js'
import { Orders } from './PlacedOrders.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { SubmitOrderButton } from './SubmitOrderButton.js'
import { resetTransientState } from './TransientState.js'

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const submitOrderButtonHTML = SubmitOrderButton()
    const customOrdersHTML = await Orders()
    const typeHTML = await JewelryType()
    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>
        <article>
            <h2>Select Type of Jewelry</h2>
            ${typeHTML}
        </article>
        <article class="order">
                ${submitOrderButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                ${customOrdersHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderPlaced", event => {
    resetTransientState()
    render()
})

render()