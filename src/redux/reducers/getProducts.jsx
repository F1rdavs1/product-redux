import { GET_ALL_PODUCTS } from "../types"

const initialState = []

export const getProduct = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PODUCTS:
            return [...action.payload]
        default :
            return state;
    }
}