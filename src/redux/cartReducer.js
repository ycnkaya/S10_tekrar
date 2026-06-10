import { ADD_ITEM, DELETE_ITEM } from './cartActions';

export const initialState = {
  items: [],
  total: 0,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const newState = {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
      return newState;
    case DELETE_ITEM:
      return state;
    default:
      return state;
  }
}
