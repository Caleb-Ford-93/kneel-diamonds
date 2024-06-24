export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=type")
    const orders = await fetchResponse.json()

    let ordersHTML = orders.map(
        (order) => {
            const orderPrice = (order.metal.price + order.style.price + order.size.price) * order.type.price
            return `<div>Order #${order.id} 
                    is made of ${order.metal.metal}
                    in a ${order.style.style} style
                    with a ${order.size.carets} carat diamond
                    and costs $${Number(orderPrice).toFixed(2)}.</div>`        
        }
    )

    return ordersHTML.join("")
}