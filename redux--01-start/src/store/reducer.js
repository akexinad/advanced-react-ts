const initialState = {
    counter: 0
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_FIVE = "ADD_FIVE";
export const SUBTRACT_FIVE = "SUBTRACT_FIVE";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            };
        case DECREMENT:
            return {
                counter: state.counter - 1
            };
        case ADD_FIVE:
            return {
                counter: state.counter + action.payload
            };
        case SUBTRACT_FIVE:
            return {
                counter: state.counter - action.payload
            };
        default:
            return state;
    }
};

export default reducer;
