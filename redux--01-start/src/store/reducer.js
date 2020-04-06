import { updateIn, setIn } from "lodash-redux-immutability";
import {
    INCREMENT,
    DECREMENT,
    ADD_FIVE,
    SUBTRACT_FIVE,
    STORE_RESULT,
    DELETE_RESULT
} from "./actions";

const initialState = {
    counter: 0,
    results: []
};

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
            const newValue = {
                id: new Date(),
                value: state.counter
            };

            return setIn(state, ["results"], state.results.concat(newValue));

        case DELETE_RESULT:
            return setIn(
                state,
                ["results"],
                state.results.filter(item => item.id !== action.payload)
            );
        default:
            return state;
    }
};

export default reducer;
