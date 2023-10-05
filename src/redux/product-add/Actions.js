import { ADDED } from "./ActionTypes";

export const added = (name, image, category, price, quantity) => {
  return {
    type: ADDED,
    payload: {
      name,
      image,
      category,
      price,
      quantity,
    },
  };
};
