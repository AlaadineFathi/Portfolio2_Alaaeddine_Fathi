import { ADD } from './actions';
import {  DELETE } from './actions';

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

      case DELETE:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };


    default:
      return state;
  }
};

export default reducer;
