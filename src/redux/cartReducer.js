const cartReducer = (state = [], action) => {
    let doesItemExist ;
    switch (action.type) {
      case 'ADD_TO_CART':
        doesItemExist = false
        const newState = state.map((item) => {
            if (item.Id === action.payload.Id) {
              item.quantity += 1;
              doesItemExist = true;
            }
            return item;
        });
        if (doesItemExist) {
          return newState;
        }
        return [...state, {...action.payload, quantity: 1}];
      default:
        return state;
    }
  };
  
  export default cartReducer;