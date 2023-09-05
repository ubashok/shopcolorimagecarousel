export const setColorType = (color, index) => ({
    type: 'COLOR_TYPE', payload: { color, index }
});
export const setCartSize = (cartSize) => (
    {
        type: 'CART_SIZE', payload: cartSize
    }
)