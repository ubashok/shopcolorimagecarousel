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
        default:
            return state;
    }
});

export default reducers