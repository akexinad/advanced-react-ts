const initialState = {
    counter: 0,
    results: []
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_FIVE = "ADD_FIVE";
export const SUBTRACT_FIVE = "SUBTRACT_FIVE";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case ADD_FIVE:
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case SUBTRACT_FIVE:
            return {
                ...state,
                counter: state.counter - action.payload
            };
        case STORE_RESULT:
            return {
                ...state,
                // push mutates the array.
                // concat makes a copy.
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter
                })
            };
        case DELETE_RESULT:
            const updated = state.results.filter(
                item => item.id !== action.payload
            );

            return {
                ...state,
                results: updated
            };
        default:
            return state;
    }
};

export default reducer;
