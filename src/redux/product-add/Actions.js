import { ADDED, ADDTOCART } from "./ActionTypes";

export const added = (id, name, image, category, price, quantity) => {
  return {
    type: ADDED,
    payload: {
      id,
      name,
      image,
      category,
      price,
      quantity,
    },
  };
};

export const addToCart = (id) => {
  return{
    type: ADDTOCART,
    payload: id
  }
}