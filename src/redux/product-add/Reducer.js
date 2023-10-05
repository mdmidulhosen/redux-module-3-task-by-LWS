import { ADDED } from "./ActionTypes";
import { InitialState } from "./InitialState";

export const productReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADDED:
            return[
                ...state,
                {
                    name: action.payload.name,
                    category: action.payload.category,
                    image: action.payload.image,
                    price: action.payload.price,
                    quantity: action.payload.quantity
                }
            ]
    
        default:
            return state;
    }
}