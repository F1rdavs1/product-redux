import { ACTIONS } from "./action";

const initialState = {
  products: [], 
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH:
      const filterData = state.products.filter((item) =>
        item.title.toLowerCase().trim().includes(action.payload.toLowerCase().trim())
      );
      return {
        ...state, 
        products: filterData,
      };
    default:
      return state;
  }
};
