import { BUY_SAVE } from "../types";

const initialState = [];

export const buyList = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SAVE:
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      } else {
        return [...state];
      }
    default:
      return state;
  }
};
