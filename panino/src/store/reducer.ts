import { IAction, IState } from "../interfaces";

const initialState: IState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case "ADD_INGREDIENT":
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    // replacing a particular property
                    [action.payload]: state.ingredients[action.payload] + 1
                }
            };
        case "REMOVE_INGREDIENT":
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload]: state.ingredients[action.payload] - 1
                }
            };
        default:
            return state;
    }
};
