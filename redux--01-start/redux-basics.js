const redux = require("redux");

const createStore = redux.createStore;

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const ADD_TO_COUNTER = "ADD_TO_COUNTER";

// const initialState = {
//     name: "fellini",
//     age: 44,
//     male: true,
//     home: {
//         country: {
//             code: "it",
//             name: "italy"
//         }
//     }
// }

const initialState = {
  counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case ADD_TO_COUNTER:
      return {
        ...state,
        counter: state.counter + action.value
      };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);

// console.log(store.getState());

// Subscription

store.subscribe(() => {
  console.log("subscription", store.getState());
});

// Dispatching an action

store.dispatch({ type: INCREMENT_COUNTER });
store.dispatch({ type: ADD_TO_COUNTER, value: 10 });

console.log("store.getState()", store.getState());
