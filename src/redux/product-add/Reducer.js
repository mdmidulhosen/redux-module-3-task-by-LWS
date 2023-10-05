import { ADDED, ADDTOCART } from "./ActionTypes";
import { InitialState } from "./InitialState";

const nextProductId = (product) => {
    const maxId = product.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
  };
export const productReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADDED:
            return[
                ...state,
                {
                    id: nextProductId(state),
                    name: action.payload.name,
                    category: action.payload.category,
                    image: action.payload.image,
                    price: action.payload.price,
                    quantity: action.payload.quantity
                }
            ]
            case ADDTOCART:
                return state.map((data) => {
                  if (Number(data.id) === action.payload) {
                    return {
                      ...data,
                      quantity: Number(data.quantity) - 1,
                    };
                  }
                  return data;
                });
              
    
        default:
            return state;
    }
}