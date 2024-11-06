import React from "react";
import { useDispatch } from "react-redux";
import { randomizeValue } from "../../utils";
const Button = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => randomizeValue(dispatch)} className="button">
      Update Value
    </button>
  );
};

export default Button;
