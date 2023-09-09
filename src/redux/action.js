export const setColorType = (color, index) => ({
    type: 'COLOR_TYPE', payload: { color, index }
});
export const addToCart = (product) => (
    {
        type: 'ADD_TO_CART', payload: { Id: product.Id, Title: product.Title, Price: product.Price }
    }
)