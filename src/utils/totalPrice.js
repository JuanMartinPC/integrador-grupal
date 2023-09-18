export const totalPrice = (cart) => {
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
    return totalPrice.toFixed(2)
}