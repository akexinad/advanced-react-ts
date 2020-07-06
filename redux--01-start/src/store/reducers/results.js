import { setIn } from "lodash-redux-immutability";
import { STORE_RESULT, DELETE_RESULT } from "../actions";

const initialState = {
    results: []
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT:
            console.log('action', action);
            
            return setIn(
                state,
                ["results"],
                state.results.concat({ id: new Date(), value: action.result })
            );

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

export default resultsReducer;
