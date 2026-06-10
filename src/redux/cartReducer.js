import { ADD_ITEM, DELETE_ITEM } from './cartActions';

export const initialState = {
  items: [],
  total: 0,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          total: state.total + action.payload.price,
        };
      }

      const newState = {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
      return newState;
    }
    case DELETE_ITEM: {
      const itemToDelete = state.items.find((item) => item.id === action.payload);

      if (!itemToDelete) {
        return state;
      }

      if (itemToDelete.quantity > 1) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          ),
          total: state.total - itemToDelete.price,
        };
      }

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        total: state.total - itemToDelete.price,
      };
    }
    default:
      return state;
  }
}
