import types from "./types";

console.log(types.INCREMENT);

export const increment = () => ({
  type: types.INCREMENT
});
export const decrement = () => ({
  type: types.DECREMENT
});
