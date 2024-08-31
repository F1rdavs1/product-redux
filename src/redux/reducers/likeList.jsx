import { LIKE_SAVE } from "../types";

const initialState = []

export const likeList = (state = initialState, action) => {
    switch(action.type){
        case LIKE_SAVE:
            if(!state.includes(action.payload)){
                return [...state,action.payload]
            }
            else {
                return[...state]
            }
        default :
            return state;
    }
}  