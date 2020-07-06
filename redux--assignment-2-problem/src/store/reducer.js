import { ADD_USER, DELETE_USER } from "./actions";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: state.users.concat({
          id: Math.random(), // not really unique but good enough here!
          name: action.user.name,
          age: action.user.age,
        }),
      };
    case DELETE_USER:
      return {
        users: state.users.filter((user) => user.id !== action.userId),
      };
    default:
      return state;
  }
};

export default reducer;
