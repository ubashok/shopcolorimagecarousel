const defaultValue = {
    setColor: 'L',
    allColor: ['XS', 'S', 'M', 'L', 'XXL'],
    colorIndex: 3,
    cartSize: 0
}

const reducers = ((state = defaultValue, action) => {
    switch (action.type) {
        case "COLOR_TYPE":
            return {
                ...state, setColor: action.payload.color, colorIndex: action.payload.index
            }
        case "CART_SIZE":
            return {
                ...state, setSize: action.payload.cartSize
            }
        default:
            return state;
    }
});

export default reducers