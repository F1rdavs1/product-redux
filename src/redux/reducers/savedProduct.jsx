import { SAVED_PRODUCT } from "../types";

const initialState = []


export const savedProduct = (state = initialState, action) => {
    switch(action.type){
        case SAVED_PRODUCT:
            if(!state.includes(action.payload)){
                return [...state,action.payload]
            }
            else {
                return [...state]
            }
        default :
            return state;
    }
}  