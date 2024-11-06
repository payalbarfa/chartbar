// utils.js
import { setGaugeValue } from "../slice";

export const randomizeValue = (dispatch) => {
  const randomValue = Math.floor(Math.random() * 101);
  dispatch(setGaugeValue(randomValue));
};
