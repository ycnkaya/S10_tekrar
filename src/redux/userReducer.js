import { ADD_USER, DELETE_USER } from './userActions';

export const userState = {
  users: [],
};

export function userReducer(state = userState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
}
